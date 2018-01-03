import React from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      authenticated: false
    }
    this.logout = this.logout.bind(this);
  }
  logout(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
  componentDidMount(user){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authenticated: true });
      } else {
        this.setState({ authenticated: false });
      }
    });
  }
  render(){
    console.log(this.state.authenticated);
    return(
      <header className="container">
        <Link to="/">My Expense</Link> <Link className="primary-cta" to="/add-expense">ADD EXPENSE</Link>
        {this.state.authenticated ? <a href="#" onClick={this.logout.bind(this)}>Sign Out</a> : <Link to="/login">Login</Link>}
      </header>
    )
  }
}

export default Header;