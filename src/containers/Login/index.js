import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './styles.scss';
import MainFooter from '../../components/MainFooter';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { API_URL } from '../../config';

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
        fetch(API_URL + 'users/login', {
            method: 'POST',
            body: data
        }).then((result) => {
            return result.json();
        }).then(user => {
          const res = JSON.parse(user);
          console.log(res);
            if (res.error === false && res.token !== null) {
              let authResult = {
                accessToken: res.token
              };
              localStorage.setItem('access_token', authResult.accessToken);

              this.setState({ user, authenticated: true });
            }
        }).catch((err) => {
            
        });
    }

    setSession = (authResult) => {
      // // Set the time that the access token will expire at
      // let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      // localStorage.setItem('access_token', authResult.accessToken);
      // localStorage.setItem('id_token', authResult.idToken);
      // localStorage.setItem('expires_at', expiresAt);
      // // navigate to the home route
      // history.replace('/feed');

      localStorage.setItem('access_token', authResult.accessToken);
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
          <h3>Login</h3>
          <Input id='email' placeholder='email' onChange={this.fieldChange}/>
          <br/>
          <Input type='password' id='password' placeholder='password' onChange={this.fieldChange} />
          <br/>
          <Button variant="contained" color="primary" onClick={this.onSubmit} >Submit</Button>
          {/* <h5>SignUp</h5>
          <h5>Forgot Password?</h5> */}
          <MainFooter />
        </div>
      );
    }
  }
  
  export default Login;