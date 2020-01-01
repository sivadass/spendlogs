import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import _get from "lodash/get";
import Header from "./components/header";
import Footer from "./components/footer";
import ExpenseList from "./pages/expense-list";
import Login from "./pages/login";
import Register from "./pages/register";
import ExpenseDetails from "./pages/expense-details";
import ExpenseAdd from "./pages/expense-add";
import Search from "./pages/search";
import GlobalStyles from "./styled/global";
import { Wrapper, Main } from "./styled/common";
import PrivateRoute from "./private-route";
import { Store } from "./store";
import SidebarMenu from "./components/SidebarMenu";

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
                <ExpenseList />
              </Route>
              <PrivateRoute path="/details/:id">
                <ExpenseDetails />
              </PrivateRoute>
              <PrivateRoute path="/add">
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
