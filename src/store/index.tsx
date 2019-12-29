import React, { useReducer, useEffect } from "react";
import useCombinedReducers from "use-combined-reducers";
import _get from "lodash/get";
import {
  authReducer,
  authInitialState,
  commonReducer,
  commonInitialState,
  expenseReducer,
  expenseInitialState
} from "./reducers";

export const Store = React.createContext(null);
const APP_STATE = "appState";

const localState = JSON.parse(localStorage.getItem(APP_STATE) || "");

export function StoreProvider(props: any) {
  const [state, dispatch] = useCombinedReducers({
    auth: useReducer(authReducer, _get(localState, "auth") || authInitialState),
    common: useReducer(
      commonReducer,
      _get(localState, "common") || commonInitialState
    ),
    invoice: useReducer(
      expenseReducer,
      _get(localState, "expense") || expenseInitialState
    )
  });
  const value = { state, dispatch };
  useEffect(() => {
    localStorage.setItem(APP_STATE, JSON.stringify(state));
  }, [state]);
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
