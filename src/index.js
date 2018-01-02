import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter  as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import * as firebase from 'firebase';

import App from './app';
import Header from './components/header';
import AddExpense from './components/add-expense';
import ExpenseDetails from './components/expense-details';
import Login from './components/login';
import Register from './components/register';

// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyC4KIa7QIZb7XxgfW6vKm3emLeq7zNBif0",
//   authDomain: "myspendz.firebaseapp.com",
//   databaseURL: "https://myspendz.firebaseio.com",
//   projectId: "myspendz",
//   storageBucket: "",
//   messagingSenderId: "738205482933"
// };

// Pesronal Build
var config = {
  apiKey: "AIzaSyDVHpvb1w8gh2yY-f2On93s81zQf_aBnwM",
  authDomain: "myspendingz.firebaseapp.com",
  databaseURL: "https://myspendingz.firebaseio.com",
  projectId: "myspendingz",
  storageBucket: "myspendingz.appspot.com",
  messagingSenderId: "12426474145"
};
firebase.initializeApp(config);

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