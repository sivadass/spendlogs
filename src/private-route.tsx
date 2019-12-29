import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import _get from "lodash/get";
import { Store } from "./store";
import PrivateLayout from "./private-layout";

interface PrivateRouteProps {
  children: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const {
    state: { auth }
  } = useContext(Store);
  const { isAuthenticated, user } = auth;
  console.log("user", user);
  return (
    <Route
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
