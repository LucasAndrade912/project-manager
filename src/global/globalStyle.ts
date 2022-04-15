import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    color: #0D0D0D;
    background-color: #EEE;
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: #0D0D0D;
    text-decoration: none;
  }
`

export default GlobalStyled