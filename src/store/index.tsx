import React, { useReducer, useEffect, Dispatch } from "react";
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

interface StateProps {
  auth: {
    isAuthenticated: boolean;
    user: {};
  };
  common: {
    isMenuOpen: boolean;
  };
  expense: {
    list: {
      loading: boolean;
      error: string;
      data: {}[];
      pageNumber: number;
      totalPages: number;
      filter: any;
    };
  };
}

interface Actions {
  type: string;
  value: any;
}

interface ContextProps {
  state: StateProps;
  dispatch: Dispatch<Actions>;
}

export const Store = React.createContext({} as ContextProps);
const APP_STATE = "appState";

const localState = JSON.parse(localStorage.getItem(APP_STATE) || "{}");

export function StoreProvider(props: any) {
  const [state, dispatch] = useCombinedReducers({
    auth: useReducer(authReducer, _get(localState, "auth") || authInitialState),
    common: useReducer(
      commonReducer,
      _get(localState, "common") || commonInitialState
    ),
    expense: useReducer(
      expenseReducer,
      _get(localState, "expense") || expenseInitialState
    )
  });
  const value: any = { state, dispatch };
  useEffect(() => {
    localStorage.setItem(APP_STATE, JSON.stringify(state));
  }, [state]);
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
