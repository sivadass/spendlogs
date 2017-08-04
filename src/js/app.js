import React from 'react';
import { connect } from "react-redux";
import Header from './components/header/index';
import Stats from './components/stats/index';
import DataTable from './components/data-table/index';

const App = (props) => {
  return(
    <div className="container">
       <Header />
      <Stats />
      <DataTable /> 
      <p>{props.count}</p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.addExpense}> ADD EXPENSE</button>
    </div>
  )
};

function mapStateToProps(state) {
   return {
     count: state
   };
}

function mapDispatchToProps(dispatch) {
return {
   increment: () => dispatch({type: 'INCREMENT'}),
   decrement: () => dispatch({type: 'DECREMENT'}),
   addExpense: () => dispatch({type: 'ADD_EXPENSE'})
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);