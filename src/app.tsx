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

function App() {
  const { state, dispatch } = useContext(Store);
  return (
    <Router basename="/expense-manager">
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
              <Route path="/" exact>
                <Dashboard />
              </Route>
              <PrivateRoute path="/expense" exact>
                <ExpenseList />
              </PrivateRoute>
              <PrivateRoute path="/expense/details/:id">
                <ExpenseDetails />
              </PrivateRoute>
              <PrivateRoute path="/expense/add">
                <ExpenseAdd />
              </PrivateRoute>
              <PrivateRoute path="/search">
                <Search />
              </PrivateRoute>
            </Switch>
          </Main>
          <Footer />
        </Wrapper>
      </Wrapper>
    </Router>
  );
}

export default App;
