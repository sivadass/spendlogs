import React, { useState, useEffect, createContext } from "react";
import * as serviceWorker from "../serviceWorker";

const ServiceWorkerContext = createContext(null);

export const ServiceWorkerProvider: React.FC<{}> = ({ children }) => {
  const [waitingServiceWorker, setWaitingServiceWorker] = useState(null);
  const [isUpdateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    // @ts-ignore
    serviceWorker.register({
      onUpdate: (registration: any) => {
        setWaitingServiceWorker(registration.waiting);
        setUpdateAvailable(true);
      }
    });
  }, []);

  React.useEffect(() => {
    if (waitingServiceWorker) {
      // @ts-ignore
      waitingServiceWorker.addEventListener("statechange", (event: any) => {
        if (event.target.state === "activated") {
          window.location.reload();
        }
      });
    }
  }, [waitingServiceWorker]);

  const value: any = React.useMemo(
    () => ({
      isUpdateAvailable,
      updateAssets: () => {
        if (waitingServiceWorker) {
          // @ts-ignore
          waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
        }
      }
    }),
    [isUpdateAvailable, waitingServiceWorker]
  );

  return (
    <ServiceWorkerContext.Provider value={value}>
      {children}
    </ServiceWorkerContext.Provider>
  );
};

// With this React Hook we'll be able to access `isUpdateAvailable` and `updateAssets`
export const useServiceWorker = () => {
  return React.useContext(ServiceWorkerContext);
};
