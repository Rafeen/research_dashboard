import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: urw-form, sans-serif;
    font-style: normal;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: white;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: urw-form, sans-serif;
    font-style: normal;
    line-height: 1.5em;
    font-size: 12px;
  }
`;

export default GlobalStyle;
