import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 400;
    src: url("./fonts/Inter-UI-Regular.woff2?v=1.0") format("woff2"), url("./fonts/Inter-UI-Regular.woff?v=1.0") format("woff");
  }

  @font-face {
    font-family: "Inter UI";
    font-style: bold;
    font-weight: 600;
    src: url("../fonts/Inter-UI-Bold.woff2?v=2.1") format("woff2"), url("../fonts/Inter-UI-Bold.woff?v=2.1") format("woff");
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    font-family: "Inter UI", Arial, Helvetica, sans-serif;
  }

`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <h1>Hey</h1>
    </div>
  );
}

export default App;
