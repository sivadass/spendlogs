import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/Inter-UI-Regular.woff2?v=1.0") format("woff2"), url("../assets/fonts/Inter-UI-Regular.woff?v=1.0") format("woff");
  }

  @font-face {
    font-family: "Inter UI";
    font-style: bold;
    font-weight: 600;
    src: url("../fonts/Inter-UI-Bold.woff2?v=2.1") format("woff2"), url("../fonts/Inter-UI-Bold.woff?v=2.1") format("woff");
  }

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    font-family: "Inter UI", Arial, Helvetica, sans-serif;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0
  }
  
  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0
  }

  a {
    text-decoration: none;
    color: #999;
    &:hover {
      text-decoration: underline;
    }
  }

`;

export default GlobalStyles;
