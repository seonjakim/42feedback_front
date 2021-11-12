import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import GlobalStyles from '../components/styles/Global'

const theme = {
  color: {
    light: '#FBF8F5',
    main: '#F9C638',
  },
  green: {
    light: '#679b99',
    midLight: '#41817f',
    mid: '#0d4d4b',
    strong: '#003432',
  },
  greenYellow: {
    light: '#f4fba7',
    midLight: '#c8d168',
    mid: '#747d15',
    strong: '#4c5400',
  },
  font: {
    grey: '#868686',
  },
  border: {
    grey: '#ccc',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
