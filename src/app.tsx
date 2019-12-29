import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/index";
import Login from "./pages/login";
import Register from "./pages/register";
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
