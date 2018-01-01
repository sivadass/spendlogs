import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeExpense, addExpense, fetchExpenses} from './actions/index';
import moment from 'moment';
const css = require('./stylesheets/style.scss');
import { Link, withRouter } from 'react-router-dom';
import firebase from 'firebase';

import ExpenseItem from './components/expense-item';
import ExpenseItemLoading from './components/expense-item-loading';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expenses: []
    }
    this.fetchExpenses = this.fetchExpenses.bind(this);
    this.categoryIcon = this.categoryIcon.bind(this);
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
    ref.orderByChild('-date').limitToLast(10).on('value', snapshot => {
      var expenseData = [];
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        expenseData.push(childData);
      });
      self.setState({expenses: expenseData}, function(){
        console.log(self.state.expenses);
      });
    })
  }
  // Goto Details Page
  gotoDetails(id){
    this.props.history.push(`/expense-details/${ id }`);
  }
  categoryIcon(icon){
    console.log("hi--");
    switch(icon) {
      case 'books':
        return "book";
      case 'cloths':
        return "restaurant_menu";
      case 'electricity':
        return "restaurant_menu";
      case 'food':
        return "restaurant_menu";
      case 'fruits':
        return "restaurant_menu";
      case 'grocery':
        return "local_grocery_store";
      case 'internet':
        return "wifi_tethering";
      case 'mobile':
        return "stay_current_portrait";
      case 'travelling':
        return "directions_bus";
      case 'uncategorized':
        return "local_offer";
      case 'vegetables':
        return "local_mall";
      default:
        return "local_offer";
     }
  }

  render(){
    let expenseArr = this.state.expenses;
    let renderExpenseItems;
    if(expenseArr.length < 1){
      renderExpenseItems = <ExpenseItemLoading />
    }else{
      renderExpenseItems = expenseArr.map((item) => (
        <ExpenseItem key={item.id} data={item} setCategoryIcon={this.categoryIcon}/>
      ))
    }
    return(
      <div className="container">
        <table className="data-table">
          <thead>
            <tr>
              <th className="title-category"></th>
              <th className="title-payee">Payee</th>
              <th className="title-date">Date</th>
              <th className="title-comment">Comment</th>
              <th className="title-amount text-ar">Amount</th>
            </tr>
          </thead>
          <tbody>
            {renderExpenseItems}
          </tbody>
        </table>
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