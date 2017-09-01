import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postExpense} from '../actions/index';
import {withRouter, Link} from "react-router-dom";

class AddExpense extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      payee: "",
      amount: "",
      category: "",
      comment: ""
    }
  }
  handlePayee(e){
    this.setState({
      payee: e.target.value
    })
  }
  handleAmount(e){
    this.setState({
      amount: e.target.value
    })
  }
  handleCategory(e){
    this.setState({
      category: e.target.value
    })
  }
  handleComment(e){
    this.setState({
      comment: e.target.value
    })
  }
  addExpense(e){
    e.preventDefault();
    const payee = this.state.payee;
    const amount = this.state.amount;
    const category = this.state.category;
    const comment = this.state.comment;
    this.props.postExpense(payee, amount, category,comment);
    // Reset form fields
    this.setState({
      category: "",
      payee: "",
      amount: "",
      comment: ""
    });
    //this.props.router.push('/');
    //this.props.history.push("/");
  }
  render(){
    return(
      <div className="container">
        <div className="page-title">
          <Link to="/" className="back-button"><i className="material-icons">arrow_back</i></Link>
          <h2>ADD EXPENSE</h2>
        </div>
        <div className="form-container">
          <form onSubmit={this.addExpense.bind(this)}>
            <input type="text" placeholder="Payee" value={this.state.payee} onChange={this.handlePayee.bind(this)} required/>
            <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.handleAmount.bind(this)} required/>
            <select value={this.state.category} onChange={this.handleCategory.bind(this)}>
              <option value="books">Books</option>
              <option value="cloths">Cloths</option>
              <option value="electricity">Electricity</option>
              <option value="food">Food</option>
              <option value="fruits">Fruits</option>
              <option value="grocery">Grocery</option>
              <option value="internet">Internet</option>
              <option value="mobile">Mobile</option>
              <option value="travelling">Travelling</option>
              <option value="uncategorized">Uncategorized</option>
              <option value="vegetables">Vegetables</option>
            </select>
            <textarea value={this.state.comment} onChange={this.handleComment.bind(this)} placeholder="Comment"/>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    )
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
      postExpense: postExpense
    }, dispatch)
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);