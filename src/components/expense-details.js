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
    let that = this;
    var expenseURL = "expenses/"+this.state.expenseID;
    var detailExpenseRef = firebase.database().ref(expenseURL);
    detailExpenseRef.once('value', function(snapshot) {
      that.setState({
        details: snapshot.val()
      })
    });
  }
  render(){
    return(
      <ul className="container">
        <h3>{this.state.details.payee}</h3>
        <h1>{this.state.details.amount}</h1>
        <p>{moment(this.state.details.date).format("hh.mm A, DD/MM/YYYY")}</p>
        <p>{this.state.details.category}</p>
        {this.state.details.comment ? <p>{this.state.details.comment}</p> : ""}
      </ul>
    )
  }
}

export default ExpenseDetails;