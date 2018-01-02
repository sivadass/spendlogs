import React from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
  render(){
    const user = firebase.auth().currentUser;
    console.log(user);
    return(
      <header className="container">
        <Link to="/">My Expense</Link> <Link className="primary-cta" to="/add-expense">ADD EXPENSE</Link>
        {user ? <a href="#" onClick={this.logout}>Logout</a> : <Link to="/login">Login</Link>}
      </header>
    )
  }
}

export default Header;