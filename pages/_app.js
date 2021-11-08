import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import GlobalStyles from '../components/styles/Global'
import ContextWrapper from '../components/ContextWrapper'

const theme = {
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
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <ContextWrapper>
          <Component {...pageProps} />
        </ContextWrapper>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
