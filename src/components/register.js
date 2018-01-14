import React from 'react';
import {auth} from '.././firebase';
import { withRouter, Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      displayName: ""
    }
    this.registerUser = this.registerUser.bind(this);
  }
  registerUser(e){
    e.preventDefault();
    let email = this.state.email, password = this.state.password, displayName = this.state.displayName;
    console.log(email, password, displayName);
    auth.createUserWithEmailAndPassword(email, password).then(function(user) {
      // [END createwithemail]
      // callSomeFunction(); Optional
      // var user = firebase.auth().currentUser;
      user.updateProfile({
          displayName: displayName
      }).then(function() {
          // Update successful.
      }, function(error) {
          // An error happened.
      });        
    }, function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
      } else {
          console.error(error);
      }
      // [END_EXCLUDE]
  });

    this.setState({
      email: "",
      password: "",
      displayName: ""
    })
    this.props.history.push('/');
    alert('Registered Successfully!');
  }
  handleInput(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render(){
    return(
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.registerUser}>
          <input type="text" name="displayName" onChange={this.handleInput.bind(this)} value={this.state.displayName} placeholder="Full Name"/>
          <input type="email" name="email" onChange={this.handleInput.bind(this)} value={this.state.email} placeholder="Email"/>
          <input type="password" name="password" onChange={this.handleInput.bind(this)} value={this.state.password} placeholder="Password"/>
          <button type="submit">Register</button>
        </form>

        Already registered? <Link to="/login">Login here</Link>.
      </div>
    )
  }
}

export default withRouter(Register);