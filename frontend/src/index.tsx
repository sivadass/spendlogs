import React from "react";
import ReactDOM from "react-dom";
import _get from "lodash/get";
import App from "./app";
import { StoreProvider } from "./store";
import { ServiceWorkerProvider } from "./hooks/useServiceWorker";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ServiceWorkerProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ServiceWorkerProvider>,
  document.getElementById("root")
);

serviceWorker.register();
