import React from 'react';
import {auth} from '.././firebase';
import { withRouter, Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.registerUser = this.registerUser.bind(this);
  }
  registerUser(e){
    e.preventDefault();
    let email = this.state.email, password = this.state.password;
    console.log(email, password);
    auth.createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    this.setState({
      email: "",
      password: ""
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