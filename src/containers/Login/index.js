import React, { Component } from 'react';

const initialstate = {
  loginUser: {
    email: '',
    password: ''
  },
  users: []
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
        }).then(users => {
            this.setState({ users });
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
      return (
        <div className="Login">
          <div>Tree Shop</div>
          <h1>Login</h1>
          <input type="text" id='email' placeholder='email' onChange={this.fieldChange} />
          <br/>
          <input type='password' id='password' placeholder='password' onChange={this.fieldChange} />
          <br/>
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      );
    }
  }
  
  export default Login;