import React from 'react';
import {auth} from '.././firebase';
import { withRouter, Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: ""
    }
    this.loginUser = this.loginUser.bind(this);
  }
  loginUser(e){
    e.preventDefault();
    let email = this.state.email, password = this.state.password;
    console.log(email, password);
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
  render(){
    return(
      <div className="container">
        <h1>Login</h1>
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