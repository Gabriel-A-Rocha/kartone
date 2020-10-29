import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  h1,h2,h3,h4,h5,h6,p{
    font-family: 'Satisfy', cursive;
  }

`;

export default GlobalStyle;