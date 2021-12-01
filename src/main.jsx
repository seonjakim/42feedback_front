import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/style/Global'
import App from './App'

const theme = {
  color: {
    light: '#FBF8F5',
    main: '#FE7E35',
  },
  font: {
    grey: '#868686',
  },
  border: {
    grey: '#ccc',
    radius: '8px',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
