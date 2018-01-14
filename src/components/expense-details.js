import React from 'react';
import {db} from '.././firebase';
import moment from 'moment';
import { Link } from 'react-router-dom';

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
      <div className="container">
        <div className="page-title">
          <Link to="/" className="back-button"><i className="material-icons">arrow_back</i></Link>
          <h2>EXPENSE DETAILS</h2>
        </div>
        <h3>{this.state.details.payee}</h3>
        <h1>{this.state.details.amount}</h1>
        <p>{moment(this.state.details.date).format("hh.mm A, DD/MM/YYYY")}</p>
        <p>{this.state.details.category}</p>
        {this.state.details.comment ? <p>{this.state.details.comment}</p> : ""}
      </div>
    )
  }
}

export default ExpenseDetails;