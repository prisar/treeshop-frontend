import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state ={users: []};
    }

    onSubmit() {
        fetch('http://localhost:3000', {
            method: 'POST',
            body: JSON.stringify({
                'username': 'abc@abc.com',
                'password': 'hhh'
            })
        }).then((result) => {
            return result.json();
        }).then(users => {
            this.setState({ users });
            console.log(this.state);
        }).catch((err) => {
            
        });
    }

    render() {
      return (
        <div className="Login">
          <h1>Login</h1>
          <input type="text" placeholder='username'/>
          <br/>
          <input type='password' placeholder='password' />
          <br/>
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      );
    }
  }
  
  export default Login;