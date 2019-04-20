import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './styles.scss';
import MainFooter from '../../components/MainFooter';

const initialstate = {
  loginUser: {
    email: '',
    password: ''
  },
  user: [],
  authenticated: false
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = initialstate;
    }

    onSubmit = (e) => {
      e.preventDefault();
      
      const data = new URLSearchParams(`email=${this.state.loginUser.email}&password=${this.state.loginUser.password}`);
        fetch('http://localhost:8000/api/users/userlogin', {
            method: 'POST',
            body: data
        }).then((result) => {
            return result.json();
        }).then(user => {
          const res = JSON.parse(user);
          console.log(res);
            if (res.error === false && res.token !== null) {
              this.setState({ user, authenticated: true });
            }
        }).catch((err) => {
            
        });
    }

    fieldChange = (e) => {
      if (e.target.id === 'email') {
        const password = this.state.loginUser.password;
        this.setState({ loginUser: { email: e.target.value, password: password } });
      } else if (e.target.id === 'password') {
        const email = this.state.loginUser.email;
        this.setState({ loginUser: { email: email, password: e.target.value } });
      }
    }

    render() {
      if (this.state.authenticated === true) {
        return <Redirect to='/Orders'/>;
      }

      return (
        <div className="Login">
          <h1>Tree Shop</h1>
          <h3>Login</h3>
          <input type="text" id='email' placeholder='email' onChange={this.fieldChange} />
          <br/>
          <input type='password' id='password' placeholder='password' onChange={this.fieldChange} />
          <br/>
          <button onClick={this.onSubmit}>Submit</button>
          <h5>SignUp</h5>
          <h5>Forgot Password?</h5>
          <MainFooter />
        </div>
      );
    }
  }
  
  export default Login;