import React from "react";
import ReactDOM from "react-dom";
import _get from "lodash/get";
import App from "./app";
import { StoreProvider } from "./store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);

serviceWorker.register();
