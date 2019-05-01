import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./styles.scss";
import MainFooter from "../../components/MainFooter";

import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import { API_URL } from "../../config";
import axios from "axios";
import loginpg from "./../../i/login-pg.jpg";

const initialstate = {
  loginUser: {
    email: "",
    password: ""
  },
  authenticated: false,
  errorMessage: "",
  redirect_to_signup_page: false
};

const leftPageStyle = {
  width: "50%",
  height: "100vh"
};

const rightPageStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  height: "100vh",
  position: "relative",
  float: "right"
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initialstate;
  }

  onSubmit = e => {
    e.preventDefault();

    const data = new URLSearchParams(
      `email=${this.state.loginUser.email}&password=${
        this.state.loginUser.password
      }`
    );

    axios.post(API_URL + "users/login", data).then(response => {
      let authResult = response.data;
      if (!authResult.error) {
        this.setSession(authResult);

        this.setState({
          authenticated: true,
          errorMessage: ""
        });
      }
      if (authResult.error) {
        this.setState({
          authenticated: false,
          errorMessage: authResult.message
        });
      }
    });
  };

  setSession = authResult => {
    localStorage.setItem("access_token", authResult.token);
  };

  fieldChange = e => {
    if (e.target.id === "email") {
      const password = this.state.loginUser.password;
      this.setState({
        loginUser: { email: e.target.value, password: password }
      });
    } else if (e.target.id === "password") {
      const email = this.state.loginUser.email;
      this.setState({ loginUser: { email: email, password: e.target.value } });
    }
  };

  signUp = () => {
    this.setState({
      redirect_to_signup_page: true
    });
  }

  render() {
    if (this.state.authenticated) {
      return <Redirect to="/products" />;
    }

    if (this.state.redirect_to_signup_page) {
      return <Redirect to="/signup" />;
    }

    return (
      <div>
        <img src={loginpg} style={leftPageStyle} />

        <div style={rightPageStyle}>
          <form className="lgoinForm">
            <h5>Login</h5>
            <div className="error-text">{this.state.errorMessage}</div>

            <Input
              id="email"
              className="login-form-input"
              placeholder="email"
              onChange={this.fieldChange}
            />
            <Input
              type="password"
              className="login-form-input"
              id="password"
              placeholder="password"
              onChange={this.fieldChange}
            />
            <button
              className="login-btn"
              onClick={this.onSubmit}
            >
              Login
            </button>
            <button className="signup-btn"
            onClick={this.signUp}>
              Sign Up
            </button>
            {/* <MainFooter /> */}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
