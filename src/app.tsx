import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import ExpenseList from "./pages/expense-list";
import Login from "./pages/login";
import Register from "./pages/register";
import ExpenseDetails from "./pages/expense-details";
import GlobalStyles from "./styled/global";
import { Wrapper } from "./styled/common";

function App() {
  return (
    <Router basename="/expense-manager">
      <GlobalStyles />
      <Wrapper>
        <Header />
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
          <Route path="/details/:id">
            <ExpenseDetails />
          </Route>
        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
