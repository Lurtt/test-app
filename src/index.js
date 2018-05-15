import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import App from './App'

injectGlobal`
  html {
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  #app {
    max-width: 50rem;
    margin: auto;
  }
`

ReactDOM.render(<App />, document.getElementById('app'))
