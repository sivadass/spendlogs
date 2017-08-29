import React from 'react';
import firebase from 'firebase';
import moment from 'moment';

class ExpenseDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
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
    var ref = firebase.database().ref('expenses');
    var self = this;
    // ref.on('value', snapshot => {
    //   var expenseData = [];
    //   snapshot.forEach(function(childSnapshot) {
    //     var childData = childSnapshot.val();
    //     expenseData.push(childData);
    //   });
    //   self.setState({details: expenseData});
    // })
    console.log(this.props.id);
    var detailExpenseRef = firebase.database().ref('expenses/' + this.props.id);
    detailExpenseRef.on('value', function(snapshot) {
      console.log(snapshot.val());
    });
  }
  render(){
    console.log(this.state.details);
    return(
      <ul className="container">
        <h3>Kumaran Silks</h3>
        <h1>2600</h1>
      </ul>
    )
  }
}

export default ExpenseDetails;