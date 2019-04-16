const {h} = require('preact')
const connect = require('unistore/preact').connect

const actions = require('../../../actions')
const Modal = require('../../common/modal')
const {CRYPTO_PROVIDER_TYPES} = require('../../../wallet/constants')

class LedgerTransportChoiceModal {
  render({closeLedgerTransportChoiceModal, loadWallet}) {
    return h(
      Modal,
      {
        closeHandler: closeLedgerTransportChoiceModal,
        title: 'Choose how to connect',
      },
      h(
        'div',
        {
          style: {
            display: 'flex',
          },
        },
        h(
          'div',
          {
            style: {
              width: '10em',
            },
          },
          h(
            'button',
            {
              class: 'button primary',
              onClick: () => {
                closeLedgerTransportChoiceModal()
                loadWallet({
                  cryptoProviderType: CRYPTO_PROVIDER_TYPES.LEDGER,
                  cryptoProviderTransport: 'USB',
                })
              },
            },
            'USB'
          )
        ),
        h(
          'div',
          {
            style: {
              width: '10em',
            },
          },
          h(
            'div',
            undefined,
            h(
              'button',
              {
                class: 'button primary',
                onClick: () => {
                  closeLedgerTransportChoiceModal()
                  loadWallet({
                    cryptoProviderType: CRYPTO_PROVIDER_TYPES.LEDGER,
                    cryptoProviderTransport: 'BLE',
                  })
                },
              },
              'Bluetooth'
            )
          )
        )
      )
    )
  }
}

module.exports = connect(
  {},
  actions
)(LedgerTransportChoiceModal)
