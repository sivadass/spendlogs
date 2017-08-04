import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
//import rootReducer from './reducers/rootReducer'
import counter from './reducers/counter'

let  store = createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);