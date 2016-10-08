import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import store from './store'
import App from './App'
import './fonts/roboto/roboto.css'
import './index.css'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

ReactDOM.render(
  <MuiThemeProvider>
    <App {...store} />
  </MuiThemeProvider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <MuiThemeProvider>
        <NextApp {...store} />
      </MuiThemeProvider>,
      document.getElementById('root')
    )
  })
}
