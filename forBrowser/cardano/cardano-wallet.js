var cbor = require('cbor');

const mnemonic = require("./mnemonic");
const tx = require("./transaction");
const address = require("./address");
const blockchainExplorer = require("./blockchain-explorer");
const utils = require("./utils");
const helpers = require("./helpers");

exports.CardanoWallet = class CardanoWallet{
  constructor(rootSecret) {
    this.rootSecret = rootSecret;
  }

  fromMnemonic(mnemonic) {
    return exports.Wallet(mnemonic.mnemonicToWalletSecretString(mnemonic));
  }

  async sendAda(address, coins) {
    if (coins > Number.MAX_SAFE_INTEGER) {
      throw new Error("Unsupported amount of coins: " + coins)
    }

    var txInputs = await this.prepareTxInputs(coins);
    var txInputsCoinsSum = txInputs.reduce((acc, elem) => {
      return acc + elem.coins;
    }, 0);

    var fee = this.computeTxFee(txInputs, coins);

    //comment this for developement
    if (fee === -1) {
      return false;
    }

    var txOutputs = [
      new tx.TxOutput(
        new tx.WalletAddress(address),
        coins
      ),
      new tx.TxOutput(
        new tx.WalletAddress(this.getChangeAddress()),
        txInputsCoinsSum - fee - coins
      )
    ];

    var unsignedTx = new tx.UnsignedTransaction(
      txInputs,
      txOutputs,
      {}
    );

    var txHash = unsignedTx.getId();

    var witnesses = unsignedTx.inputs.map((input) => {
      return input.getWitness(txHash);
    });

    var txBody = cbor.encode(new tx.SignedTransaction(unsignedTx, witnesses)).toString("hex");

    return await this.submitTxRaw(txHash, txBody);
  }

  async getTxFee(address, coins) {
    var txInputs = await this.prepareTxInputs(coins);

    return this.computeTxFee(txInputs, coins);
  }

  async getBalance() {
    var result = 0;

    var addresses = this.getUsedAddressesAndSecrets();

    for (var i = 0; i < addresses.length; i++) {
      result += await blockchainExplorer.getAddressBallance(addresses[i].address);
    }

    return result;
  }

  async prepareTxInputs(coins) {
    // TODO optimize tx inputs selection, now it takes all utxos
    var utxos = await this.getUnspentTxOutputsWithSecrets();

    var txInputs = [];
    for (var i = 0; i < utxos.length; i++) {
      txInputs.push(
        new tx.TxInput(utxos[i].txHash, utxos[i].outputIndex, utxos[i].secret, utxos[i].coins)
      );
    }

    return txInputs;
  }

  // if the fee cannot be paid it returns -1, otherwise it returns the fee
  computeTxFee(txInputs, coins) {
    if (coins > Number.MAX_SAFE_INTEGER) {
      throw new Error("Unsupported amount of coins: " + coins)
    }

    var txInputsCoinsSum = txInputs.reduce((acc, elem) => {
      return acc + elem.coins;
    }, 0);

    var out1coins = coins;
    var out2coinsUpperBound = txInputsCoinsSum - coins;

    // the +1 is there because in the actual transaction the txInputs are encoded as indefinite length array
    var txInputsSize = cbor.encode(txInputs).length + 1;

    /*
    * we assume that only two outputs (destination and change address) will be present
    * encoded in an indefinite length array
    */
    var txOutputsSize = 2*77 + cbor.encode(out1coins).length + cbor.encode(out2coinsUpperBound).length + 2;
    var txMetaSize = 1; // currently empty Map

    // the 1 is there for the CBOR "tag" for an array of 3 elements
    var txAuxSize = 1 + txInputsSize + txOutputsSize + txMetaSize;

    var txWitnessesSize = txInputs.length * 139 + 1;

    // the 1 is there for the CBOR "tag" for an array of 2 elements
    var txSizeInBytes = 1 + txAuxSize + txWitnessesSize;

    /*
    * the deviation is there for the array of tx witnesses - it may have more than 1 byte of overhead
    * if more than 16 elements are present
    */
    var deviation = 4;

    var fee = this.txFeeFunction(txSizeInBytes + deviation);

    if (txInputsCoinsSum - coins - fee < 0) {
      return -1;
    }

    return fee;
  }

  getChangeAddress() {
    var availableAddresses = this.getUsedAddressesAndSecrets();

    // TODO - do something smarter, now it just returns a random address from the pool of available ones

    return availableAddresses[Math.floor(Math.random()*availableAddresses.length)].address;
  }

  async getUnspentTxOutputsWithSecrets() {
    var result = [];

    var addresses = this.getUsedAddressesAndSecrets();

    for (var i = 0; i < addresses.length; i++) {
      var addressUnspentOutputs = await blockchainExplorer.getUnspentTxOutputs(addresses[i].address);

      addressUnspentOutputs.map((element) => {
        element.secret = addresses[i].secret;
      });

      var result = result.concat(addressUnspentOutputs);
    }

    return result;
  }

  getUsedAddressesAndSecrets() {
    // TODO - do something smarter, now it just returns 16 addresses with consecutive child indices

    var result = [];
    for (var i = 345000; i < 345016; i++) {
      result.push(address.deriveAddressAndSecret(this.rootSecret, i));
    }

    return result;
  }

  txFeeFunction(txSizeInBytes) {
    var a = 155381;
    var b = 43.946;

    return Math.ceil(a + txSizeInBytes * b);
  }

  async submitTxRaw (txHash, txBody) {
    try {
      const res = await utils.request(
        "http://localhost:3001/",
        "POST",
        JSON.stringify({
          txHash,
          txBody
        }),
        {
          "Content-Type": "application/json"
        }
      );

      if (res.status >= 300) {
        console.log(res.status + " " + JSON.stringify(res));
      }
      else {
        return res.result;
      }
    } catch (err) {
      console.log("txSubmiter unreachable " + err);
    }
  }
}
