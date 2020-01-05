import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import _get from "lodash/get";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import ExpenseList from "./pages/expense/index";
import ExpenseDetails from "./pages/expense/details";
import ExpenseAdd from "./pages/expense/add";
import Search from "./pages/search";
import GlobalStyles from "./styled/global";
import { Wrapper, Main } from "./styled/common";
import PrivateRoute from "./private-route";
import { Store } from "./store";
import SidebarMenu from "./components/sidebar-menu";
import { useServiceWorker } from "./hooks/useServiceWorker";

function App() {
  const { state, dispatch } = useContext(Store);
  // @ts-ignore
  const { isUpdateAvailable, updateAssets } = useServiceWorker();
  console.log("useServiceWorker", isUpdateAvailable, updateAssets);
  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        <SidebarMenu />
        <Wrapper>
          <Header />
          <Main>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <PrivateRoute path="/" exact>
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/expense" exact>
                <ExpenseList />
              </PrivateRoute>
              <PrivateRoute path="/expense/add">
                <ExpenseAdd />
              </PrivateRoute>
              <PrivateRoute path="/expense/:id">
                <ExpenseDetails />
              </PrivateRoute>
              <PrivateRoute path="/search">
                <Search />
              </PrivateRoute>
            </Switch>
          </Main>
          {isUpdateAvailable && (
            <div>
              A new version of this app is available!
              <button type="button" onClick={updateAssets}>
                Update now
              </button>
            </div>
          )}
          <Footer />
        </Wrapper>
      </Wrapper>
    </Router>
  );
}

export default App;
