import React from "react";
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
import ExpenseEdit from "./pages/expense/edit";
import CategoryList from "./pages/category/index";
import CategoryDetails from "./pages/category/details";
import CategoryAdd from "./pages/category/add";
import CategoryEdit from "./pages/category/edit";

import Search from "./pages/search";
import GlobalStyles from "./styled/global";
import { Wrapper, Main } from "./styled/common";
import PrivateRoute from "./private-route";
import SidebarMenu from "./components/sidebar-menu";

function App() {
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
              <PrivateRoute path="/expense/:id" exact>
                <ExpenseDetails />
              </PrivateRoute>
              <PrivateRoute path="/expense/:id/edit">
                <ExpenseEdit />
              </PrivateRoute>
              <PrivateRoute path="/category" exact>
                <CategoryList />
              </PrivateRoute>
              <PrivateRoute path="/category/add">
                <CategoryAdd />
              </PrivateRoute>
              <PrivateRoute path="/category/:id" exact>
                <CategoryDetails />
              </PrivateRoute>
              <PrivateRoute path="/category/:id/edit">
                <CategoryEdit />
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
