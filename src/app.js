import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeExpense, addExpense, fetchExpenses} from './actions/index';
import moment from 'moment';
const css = require('./stylesheets/style.scss');
import { Link } from 'react-router-dom';
import firebase from 'firebase';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expenses: []
    }
    this.fetchExpenses = this.fetchExpenses.bind(this);
  }
  componentDidMount(){
    this.fetchExpenses();
  }
  componentWillUnmount(){
    var ref = firebase.database().ref('expenses');
    ref.off();
  }
  removeExpense(key){
    this.props.removeExpense(key);
  }
  // Load Initial Data
  fetchExpenses(){
    var ref = firebase.database().ref('expenses');
    var self = this;
    ref.on('value', snapshot => {
      var expenseData = [];
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        expenseData.push(childData);
      });
      self.setState({expenses: expenseData});
    })
  }

  render(){
    let expenseArr = this.state.expenses;
    let renderExpenseItems;
    if(expenseArr.length > 0){
      renderExpenseItems = expenseArr.map((item, key = item.id) => (
        <li key={item.id}>
          <Link 
            to = {`/expense-details/${ item.id }`}
          >
            <span>{item.category}</span> {item.payee} <strong>{item.amount}</strong> <span>{moment(item.date).format("hh.mm A, DD/MM/YYYY")}</span>
          </Link>
          <button className="button-inline" onClick={this.removeExpense.bind(this, item.id)}>Remove</button>
        </li>
      ))
    }else{
      renderExpenseItems = "Loading..."
    }
    return(
      <div className="container">
        <ul>
          {renderExpenseItems}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    expense: state
  };
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators({
      removeExpense : removeExpense
    }, dispatch)
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(App);