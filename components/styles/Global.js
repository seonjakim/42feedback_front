import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body, html, button, div {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 100%;
  }
  button {
    border: 0;
  }
  input:focus, textarea:focus {
    outline: none;
  }
  ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  textarea {
    resize: none;
  }
`
export default GlobalStyles
