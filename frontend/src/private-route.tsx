import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import _get from "lodash/get";
import { Store } from "./store";
import PrivateLayout from "./private-layout";
import { authActions } from "./store/actions";
import { setAuthHeader, setupAxiosInterceptors } from "./utils/axios";

interface PrivateRouteProps {
  children: any;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  path,
  exact = false
}) => {
  const {
    state: { auth },
    dispatch
  } = useContext(Store);
  const { isAuthenticated, user, token } = auth;
  setAuthHeader(token);
  setupAxiosInterceptors(() => {
    authActions.logout(dispatch);
  });
  return (
    <Route
      path={path}
      exact={exact}
      render={({ location }) =>
        _get(user, "_id", null) && isAuthenticated ? (
          <PrivateLayout>{children}</PrivateLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
