const h = require('preact').h

const CardanoLiteLogo = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 66.52 66.67',
      style: 'width: 2.5rem; height: 2.5rem;',
    },
    h('path', {
      color: '#ed1a77',
      d:
        'M34.632 65.697c-.788-1.529.139-3.197 1.807-3.197 1.529 0 2.409.742 2.409 2.085 0 1.344-.88 2.085-2.41 2.085-.833 0-1.436-.324-1.806-.973zM17.72 64.168c-.51-1.343.047-2.363 1.39-2.502 1.668-.185 2.317.464 1.946 1.946-.231.973-.556 1.205-1.714 1.205-.788 0-1.483-.278-1.622-.649zM21.983 57.126c-.973-.927-.927-2.687 0-3.66 1.158-1.112 3.475-.742 4.309.74.602 1.113.602 1.345-.093 2.457-.926 1.39-3.058 1.621-4.216.463zM34.215 54.763c-1.02-1.297-.973-2.919.092-4.17.834-1.02 3.939-.741 4.726.417 2.41 3.429-2.224 6.996-4.818 3.753zM7.805 50.454c-1.112-1.112-1.112-1.344-.185-2.687.788-1.112 2.456-1.344 3.336-.464.88.88.695 3.058-.324 3.614-1.298.649-1.761.603-2.827-.463zM27.914 47.303c-3.29-2.64-2.502-7.598 1.436-8.895 3.243-1.066 6.718 1.25 6.718 4.494 0 1.9-1.066 4.123-2.27 4.772-1.437.741-4.772.556-5.884-.37zM17.628 45.543c-1.205-.834-1.39-3.429-.278-4.54.926-.974 3.614-.974 4.54 0 1.02 1.019.927 3.242-.185 4.354s-2.64 1.205-4.077.186zM22.354 37.527c-1.946-1.204-2.78-3.614-2.039-5.884 1.483-4.448 8.247-4.448 9.73 0 1.066 3.336-1.39 6.765-4.865 6.765-.741 0-2.039-.417-2.826-.88zM9.288 35.35c-.556-.371-1.02-1.205-1.02-1.854 0-1.343 1.483-2.965 2.78-2.965 1.205 0 2.78 1.575 2.78 2.78 0 1.158-1.575 2.78-2.687 2.78-.463 0-1.297-.324-1.853-.741zM.392 34.47c-1.204-1.483.603-3.754 2.224-2.734 1.575 1.02 1.02 3.428-.834 3.428-.463 0-1.065-.324-1.39-.695zM28.84 28.03c-2.038-.881-2.965-2.456-2.965-4.82 0-1.621.278-2.27 1.344-3.382 1.158-1.112 1.714-1.343 3.753-1.343 1.9 0 2.594.231 3.474 1.112 4.078 4.077-.417 10.749-5.606 8.432zM40.84 28.168c-3.475-.973-4.633-5.745-2.038-8.34 1.158-1.112 1.714-1.343 3.753-1.343 1.9 0 2.594.231 3.475 1.112 3.938 3.938.185 10.054-5.19 8.571zM17.998 26.222c-1.667-.834-1.9-4.077-.37-5.143 3.382-2.363 7.042 2.224 3.8 4.773-1.437 1.112-1.854 1.158-3.43.37zM51.682 25.527c-1.158-1.25-1.02-3.614.232-4.448 2.27-1.575 5.004-.324 5.004 2.27 0 .835-.325 1.9-.742 2.27-.973 1.02-3.567.928-4.494-.092zM7.342 18.994c-.741-1.436-.556-2.27.695-3.104 1.066-.695 1.251-.695 2.317 0 1.25.834 1.529 2.502.602 3.429-.88.88-3.058.695-3.614-.325zM62.848 19.365c-1.158-.649-1.112-3.012.046-3.66 1.437-.742 2.27-.556 3.105.695.695 1.065.695 1.25 0 2.316-.788 1.205-1.854 1.437-3.15.649zM34.493 15.89c-1.02-.973-.927-3.567.092-4.494 1.066-.973 2.827-1.02 4.17-.046 1.298.88 1.39 3.428.186 4.494-1.066.973-3.522 1.02-4.448.046zM21.798 13.296c-.325-.325-.556-1.205-.556-1.993 0-.787.231-1.668.556-1.992.741-.741 3.243-.741 3.984 0 .325.324.556 1.205.556 1.992 0 1.807-.741 2.549-2.548 2.549-.788 0-1.668-.232-1.992-.556zM47.327 12.647c-.695-1.112-.695-1.344-.093-2.456.463-.88 1.112-1.25 2.27-1.343 1.761-.186 2.78.74 2.78 2.502 0 2.548-3.52 3.474-4.957 1.297zM17.72 4.4c-.51-1.298.047-2.363 1.251-2.502 1.437-.186 2.456.926 2.04 2.224-.372 1.112-2.874 1.343-3.29.278zM52.47 3.89c-.371-1.529.278-2.178 1.946-1.992 1.158.139 1.343.324 1.343 1.529 0 1.204-.185 1.39-1.482 1.529-1.298.139-1.53-.047-1.807-1.066zM34.724 3.102c-.648-1.76.047-2.919 1.946-3.058 1.483-.139 1.715 0 1.993 1.112.417 1.668-.278 2.688-2.085 2.873-1.159.14-1.53-.046-1.854-.927z',
    })
  )

const VacuumlabsLogo = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 192.8 39.7',
      style: 'enable-background:new 0 0 192.8 39.7; ' + 'width: 9.64rem; height: 2rem;',
    },
    h('style', undefined, '.st1{fill:#242f3c}'),
    h(
      'g',
      {id: 'XMLID_2_'},
      h('path', {
        fill: '#ed1a77',
        d:
          'M36.6.8H6.9C5.5.8 4.2 1.2 3.2 2c-.1 0-.1.1-.2.2-.1 0-.1.1-.2.1 0 0-.1 0-.1.1l-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1c-.1.1-.1.1-.1.2l-.1.1-.2.2c-.6.8-.9 1.7-1 2.8V7c0 1.1.3 2.1.8 3.1l14.9 25.8c1.7 3 5.5 4 8.5 2.3 3-1.7 4-5.5 2.3-8.5L23 22.5c-.5-.9-.8-1.9-.8-3 0-3.4 2.8-6.2 6.2-6.2h8.1c3.4 0 6.2-2.8 6.2-6.2.1-3.5-2.6-6.3-6.1-6.3',
      }),
      h('path', {
        class: 'st1',
        d:
          'M43.6 35.5h-.2c-1.2 0-2-.7-2.4-1.9l-4.7-10.8c-.1-.3-.2-.7-.2-1.1 0-1 .9-2 2.1-2 1.2 0 1.8.7 2.1 1.5l3.3 8.8 3.3-8.9c.3-.7.9-1.5 2-1.5s2.1.9 2.1 2c0 .4-.1.8-.2 1l-4.8 11c-.5 1.1-1.3 1.9-2.4 1.9',
      }),
      h('path', {
        class: 'st1',
        d:
          'M51.4 30.8c0-3.4 2.5-4.9 6.1-4.9 1.5 0 2.6.3 3.7.6v-.3c0-1.8-1.1-2.8-3.3-2.8-1.2 0-2.2.2-3 .4-.2.2-.3.2-.5.2-1 0-1.8-.8-1.8-1.8 0-.8.5-1.4 1.2-1.7 1.4-.5 2.8-.8 4.9-.8 2.4 0 4.1.6 5.1 1.7 1.1 1.1 1.6 2.8 1.6 4.9v6.9c0 1.2-.9 2.1-2.1 2.1-1.2 0-2.1-.9-2.1-1.8-1 1.2-2.5 1.9-4.6 1.9-2.8.1-5.2-1.6-5.2-4.6m9.9-1V29c-.7-.3-1.7-.6-2.8-.6-1.8 0-3 .7-3 2.1v.1c0 1.2 1 1.8 2.4 1.8 2 .1 3.4-1 3.4-2.6',
      }),
      h('path', {
        class: 'st1',
        d:
          'M67.2 27.7c0-4.4 3.3-8 8-8 2.3 0 3.9.6 5.2 1.7.3.2.7.7.7 1.5 0 1.1-.9 1.9-2 1.9-.6 0-1-.2-1.2-.4-.8-.6-1.6-1-2.7-1-2.2 0-3.7 1.9-3.7 4.1v.1c0 2.3 1.5 4.2 3.9 4.2 1.1 0 2-.4 2.8-1 .2-.2.7-.4 1.2-.4 1 0 1.8.8 1.8 1.8 0 .6-.3 1-.6 1.4-1.3 1.2-2.9 2-5.4 2-4.6-.1-8-3.6-8-7.9',
      }),
      h('path', {
        class: 'st1',
        d:
          'M96.9 33.2c0 1.2-1 2.2-2.2 2.2-1.2 0-2.2-1-2.2-2.2V33c-1 1.3-2.3 2.4-4.5 2.4-3.3 0-5.2-2.2-5.2-5.7V22c0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2v6.5c0 2 1 3.1 2.6 3.1s2.7-1.1 2.7-3.1V22c0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2v11.2z',
      }),
      h('path', {
        class: 'st1',
        d:
          'M113.4 33.2c0 1.2-1 2.2-2.2 2.2-1.2 0-2.2-1-2.2-2.2V33c-1 1.3-2.3 2.4-4.5 2.4-3.3 0-5.2-2.2-5.2-5.7V22c0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2v6.5c0 2 1 3.1 2.6 3.1s2.7-1.1 2.7-3.1V22c0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2v11.2z',
      }),
      h('path', {
        class: 'st1',
        d:
          'M116.2 22c0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2v.2c1-1.3 2.3-2.4 4.5-2.4 2 0 3.5.9 4.3 2.4 1.3-1.6 2.9-2.4 5-2.4 3.2 0 5.1 1.9 5.1 5.6v7.9c0 1.2-1 2.2-2.2 2.2-1.2 0-2.2-1-2.2-2.2v-6.5c0-2-.9-3.1-2.5-3.1s-2.6 1.1-2.6 3.1v6.5c0 1.2-1 2.2-2.2 2.2-1.2 0-2.2-1-2.2-2.2v-6.5c0-2-.9-3.1-2.5-3.1s-2.6 1.1-2.6 3.1v6.5c0 1.2-1 2.2-2.2 2.2-1.2 0-2.2-1-2.2-2.2V22z',
      }),
      h('path', {
        class: 'st1',
        d: 'M142.9 15.1c0-.4.3-.7.7-.7.4 0 .7.3.7.7v19.5c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7V15.1z',
      }),
      h('path', {
        class: 'st1',
        d:
          'M147.5 31c0-3.1 2.6-4.8 6.3-4.8 2 0 3.4.3 4.8.6v-.6c0-2.9-1.8-4.4-4.8-4.4-1.6 0-2.9.4-4.1 1-.1.1-.2.1-.3.1-.3 0-.7-.3-.7-.7 0-.3.3-.6.4-.6 1.5-.7 2.9-1.1 4.8-1.1 2 0 3.5.5 4.6 1.6 1 1 1.5 2.3 1.5 4.1v8.4c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7v-1.8c-1 1.4-2.8 2.8-5.5 2.8-2.7-.1-5.6-1.6-5.6-4.6m11.1-1.2v-1.6c-1.2-.3-2.8-.7-4.9-.7-3.1 0-4.8 1.4-4.8 3.4v.1c0 2.1 2 3.3 4.2 3.3 3-.1 5.5-1.9 5.5-4.5',
      }),
      h('path', {
        class: 'st1',
        d:
          'M163.8 15.1c0-.4.3-.7.7-.7.4 0 .7.3.7.7V24c1.2-1.9 3.1-3.6 6-3.6 3.5 0 7 2.8 7 7.5v.1c0 4.7-3.6 7.6-7 7.6-2.9 0-4.8-1.6-6-3.5v2.5c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7V15.1zM176.7 28c0-3.9-2.6-6.3-5.7-6.3-3 0-5.9 2.5-5.9 6.2v.1c0 3.7 2.9 6.2 5.9 6.2 3.2 0 5.7-2.3 5.7-6.2',
      }),
      h('path', {
        class: 'st1',
        d:
          'M180.5 33.6c-.1-.1-.3-.3-.3-.5 0-.4.3-.7.7-.7.2 0 .3.1.5.1 1.5 1.1 3.1 1.6 4.8 1.6 2 0 3.5-1.1 3.5-2.8v-.1c0-1.7-1.8-2.3-3.8-2.9-2.4-.7-5-1.4-5-4v-.1c0-2.3 2-4 4.8-4 1.6 0 3.3.5 4.7 1.3.2.1.4.3.4.6 0 .4-.3.7-.7.7-.2 0-.3-.1-.4-.1-1.2-.7-2.6-1.2-4-1.2-2 0-3.3 1.1-3.3 2.5v.1c0 1.6 2 2.2 4 2.8 2.3.7 4.8 1.5 4.8 4.1v.1c0 2.6-2.2 4.2-5 4.2-2.1.2-4.2-.6-5.7-1.7',
      })
    )
  )

const MenuIcon = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20',
      height: '20',
      viewBox: '0 0 448 512',
    },
    h('path', {
      fill: '#000000',
      d:
        'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z',
    })
  )

const DetailIcon = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20',
      height: '20',
      viewBox: '0 0 576 512',
    },
    h('path', {
      d:
        'M569.354 231.631C512.97 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-102.556 0-192.091-54.701-240-136 44.157-74.933 123.677-127.27 216.162-135.007C273.958 131.078 280 144.83 280 160c0 30.928-25.072 56-56 56s-56-25.072-56-56l.001-.042C157.794 179.043 152 200.844 152 224c0 75.111 60.889 136 136 136s136-60.889 136-136c0-31.031-10.4-59.629-27.895-82.515C451.704 164.638 498.009 205.106 528 256c-47.908 81.299-137.444 136-240 136z',
    })
  )

const CloseIcon = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20',
      height: '20',
      viewBox: '0 0 352 512',
    },
    h('path', {
      color: '#000000',
      d:
        'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
    })
  )

const LinkIcon = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 26.458 26.458',
      style: 'width: 2.5rem; height: 2.5rem;',
    },
    h('path', {
      d: 'M3.78 13.22v9.185h18.37v-6.68H19.923v4.454H6.007V6.262H10.46V4.036H3.78z',
    }),
    h('path', {
      d:
        'M15.275 5.65l1.587 1.587-2.505 2.504-2.505 2.478 1.03 1.057 1.03 1.058 2.532-2.505 2.505-2.505 1.615 1.586 1.586 1.615V4.036H13.69z',
    })
  )

const CopyIcon = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 512 562',
      style: 'width: 2rem; height: 2rem;',
    },
    h('path', {
      d:
        'M488.68 65.941l-51.882-51.882A48 48 0 0 0 402.857 0H230.739c-26.51 0-48 21.49-48 48v48h-80c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.06-33.941zM320.739 464h-212a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96h-212a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.59 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243z',
    })
  )

const AdaIcon = ({width, height}) =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 36.993 44',
      style: `width: ${width}; height: ${height};`,
    },
    h('path', {
      d:
        'M36.991 26.538c-.053-1.006-.952-1.773-1.984-1.773h-5.61l-1.534-3.89h3.466c1.005 0 1.931-.74 1.984-1.772a1.838 1.838 0 0 0-1.825-1.932h-5.08l-6.35-16.007A1.848 1.848 0 0 0 18.338 0c-.74 0-1.429.476-1.72 1.164l-6.085 15.981H5.559c-1.006 0-1.932.74-1.985 1.773A1.838 1.838 0 0 0 5.4 20.849h3.625l-1.482 3.863H1.987c-1.006 0-1.932.74-1.985 1.773a1.838 1.838 0 0 0 1.826 1.931h4.26L1.114 41.328a1.866 1.866 0 0 0 1.058 2.408c.212.105.423.105.635.105.74 0 1.429-.423 1.72-1.164l5.503-14.234h16.748l5.715 14.393c.265.74.953 1.164 1.72 1.164.212 0 .476-.053.688-.106.952-.37 1.376-1.428 1.005-2.407L30.72 28.469h4.207c1.244-.026 2.117-.873 2.064-1.931zM18.417 7.01l3.996 10.134h-7.885l3.89-10.134c-.054 0 0 0 0 0zm-6.879 17.754l1.482-3.89h10.768l1.535 3.89z',
    })
  )

const ExitIcon = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20',
      height: '20',
      viewBox: '0 0 20 20',
    },
    h('path', {
      fill: '#000000',
      d:
        'M11.5 8c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.827-0.673-1.5-1.5-1.5h-9c-0.827 0-1.5 0.673-1.5 1.5v12c0 0.746 0.537 1.56 1.222 1.853l5.162 2.212c0.178 0.076 0.359 0.114 0.532 0.114 0.213-0 0.416-0.058 0.589-0.172 0.314-0.207 0.495-0.575 0.495-1.008v-1.5h2.5c0.827 0 1.5-0.673 1.5-1.5v-4c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5h-2.5v-9.5c0-0.746-0.537-1.56-1.222-1.853l-3.842-1.647h7.564c0.276 0 0.5 0.224 0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5zM6.384 5.566c0.322 0.138 0.616 0.584 0.616 0.934v12c0 0.104-0.028 0.162-0.045 0.173s-0.081 0.014-0.177-0.027l-5.162-2.212c-0.322-0.138-0.616-0.583-0.616-0.934v-12c0-0.079 0.018-0.153 0.051-0.22l5.333 2.286z',
    }),
    h('path', {
      fill: '#000000',
      d:
        'M18.354 9.146l-3-3c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2.146 2.146h-6.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h6.293l-2.146 2.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l3-3c0.195-0.195 0.195-0.512 0-0.707z',
    })
  )

const RefreshIcon = () =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20',
      height: '20',
      viewBox: '0 0 20 20',
    },
    h('path', {
      fill: '#000000',
      d:
        'M19.854 8.646c-0.195-0.195-0.512-0.195-0.707 0l-1.149 1.149c-0.051-2.060-0.878-3.99-2.341-5.452-1.511-1.511-3.52-2.343-5.657-2.343-2.974 0-5.686 1.635-7.077 4.266-0.129 0.244-0.036 0.547 0.208 0.676s0.547 0.036 0.676-0.208c1.217-2.303 3.59-3.734 6.193-3.734 3.789 0 6.885 3.027 6.997 6.789l-1.143-1.143c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l2 2c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l2-2c0.195-0.195 0.195-0.512 0-0.707z',
    }),
    h('path', {
      fill: '#000000',
      d:
        'M16.869 13.058c-0.244-0.129-0.547-0.036-0.676 0.208-1.217 2.303-3.59 3.734-6.193 3.734-3.789 0-6.885-3.027-6.997-6.789l1.143 1.143c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-2-2c-0.195-0.195-0.512-0.195-0.707 0l-2 2c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l1.149-1.149c0.051 2.060 0.878 3.99 2.341 5.452 1.511 1.511 3.52 2.343 5.657 2.343 2.974 0 5.686-1.635 7.077-4.266 0.129-0.244 0.036-0.547-0.208-0.676z',
    })
  )

const DownloadIcon = () =>
  h(
    'svg',
    {
      'version': '1.1',
      'xmlns': 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      'width': '20',
      'height': '20',
      'viewBox': '0 0 502 502',
    },
    h('path', {
      fill: '#000000',
      d: 'M395.25,153h-102V0h-153v153h-102l178.5,178.5L395.25,153z M38.25,382.5v51h357v-51H38.25z',
    })
  )

module.exports = {
  CardanoLiteLogo,
  VacuumlabsLogo,
  MenuIcon,
  AdaIcon,
  DetailIcon,
  CloseIcon,
  LinkIcon,
  CopyIcon,
  ExitIcon,
  RefreshIcon,
  DownloadIcon,
}
