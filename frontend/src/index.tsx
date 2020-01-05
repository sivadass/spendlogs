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

window.addEventListener("error", async err => {
  console.error(err);
  if (!navigator.serviceWorker) {
    return;
  }
  if (process.env.NODE_ENV !== "development") {
    const registration = await navigator.serviceWorker.ready;
    if (registration.installing || registration.waiting) {
      navigator.serviceWorker.ready.then(async registration => {
        await registration.unregister();
        window.location.reload();
      });
    }
  }
});
