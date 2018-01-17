import React from 'react';
import {auth} from '.././firebase';
import { withRouter, Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: "",
      errorMessages: {
      	email: [],
        password: []
      }
    }
    this.loginUser = this.loginUser.bind(this);
  }
  loginUser(e){
    e.preventDefault();
    let email = this.state.email, password = this.state.password;
    console.log(email, password);
    this.validate();
    auth.signInWithEmailAndPassword(email, password).then(() => {
        this.setState({
          email: "",
          password: ""
        })
        this.props.history.push('/');
      }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
        this.setState({
          error: errorCode + errorMessage
        })
      // ...
    });
  }
  handleInput(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  validate(e){
 	  e.preventDefault();
    let valid = true;
    let { email, password } = this.state;
    let errorMessages = {
      email: [],
      password: []
    };
  
    if (email === null || email === '') {
      valid = false;
      errorMessages['email'].push('Email is required');
    }

    if (password === null || password === '') {
      valid = false;
      errorMessages['password'].push('Password is required');
    } 

   console.log(this.state);
   console.log(errorMessages);
   
   this.setState({
     errorMessages: errorMessages
   });
   
   if (valid) {
     // Don't forget to POST this form or something!
   }
  }
  render(){
    return(
      <div className="container">
        <h1>Sign in</h1>
        <form onSubmit={this.loginUser}>
          {this.state.error && <p>Invalid username or password!</p>}
          <input type="email" name="email" onChange={this.handleInput.bind(this)} value={this.state.email} placeholder="Email"/>
          <input type="password" name="password" onChange={this.handleInput.bind(this)} value={this.state.password} placeholder="Password"/>
          <button type="submit">Login</button>
        </form>
        New here? <Link to="/register">Register here</Link>.
      </div>
    )
  }
}

export default withRouter(Login);