import React from 'react';
import firebase from 'firebase';
import moment from 'moment';

class ExpenseDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expenseID : this.props.match.params.value,
      details: []
    }
  }
  componentDidMount(){
    this.fetchExpenseDetails();
  }
  componentWillUnmount(){
    var ref = firebase.database().ref('expenses');
    ref.off();
  }
  // Load Initial Data
  fetchExpenseDetails(){
    var expenseURL = `expenses/${this.state.expenseID}`;
    let id = this.state.expenseID;
    console.log(expenseURL);
    var detailExpenseRef = firebase.database().ref('expenses/' + id);
    detailExpenseRef.once('value', function(snapshot) {
      console.log(snapshot.val());
    });
  }
  render(){
    return(
      <ul className="container">
        <h3>Kumaran Silks</h3>
        <h1>2600</h1>
        <h2>{this.props.match.params.value}</h2>
      </ul>
    )
  }
}

export default ExpenseDetails;