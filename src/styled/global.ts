import { createGlobalStyle } from "styled-components";
import InterUIRegular from "../assets/fonts/Inter-UI-Regular.woff2";
import InterUIBold from "../assets/fonts/Inter-UI-Bold.woff2";
import MaterialIcon from "../assets/fonts/Material-Icons-Regular.woff2";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 400;
    src: url(${InterUIRegular}) format("woff2");
  }

  @font-face {
    font-family: "Inter UI";
    font-style: bold;
    font-weight: 600;
    src: url(${InterUIBold}) format("woff2");
  }

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(${MaterialIcon}) format('woff2');
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
