import React from 'react';
import firebase from 'firebase';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.registerUser = this.registerUser.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      email: "",
      password: ""
    }
  }
  registerUser(e){
    e.preventDefault();
    let email = this.state.email, password = this.state.password;
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  handleInput(e){
    this.setState({
      [e.target.name] : e.target.name
    })
  }
  render(){
    return(
      <div className="container">
        <form onSubmit={this.registerUser}>
          <input type="email" name="email" onChange={this.handleInput} value={this.state.email} placeholder="Email"/>
          <input type="password" name="password" onChange={this.handleInput} value={this.state.password} placeholder="Password"/>
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}

export default Register;