import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter  as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

import App from './app';
import Header from './components/header';
import AddExpense from './components/add-expense';
import ExpenseDetails from './components/expense-details';
import Login from './components/login';
import Register from './components/register';

const initialState = {};

const middleWare = applyMiddleware(thunk);
let store = createStore(
  rootReducer,
  initialState,
  middleWare
);

ReactDOM.render(
  <Provider store={store}>
    <div className="wrapper">
      <Router>
      <div className="app">
        <Header />
        <Route exact path="/" component={App}/>
        <Route path="/add-expense" component={AddExpense}/>
        <Route path="/expense-details/:value" component={ExpenseDetails}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </div>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);