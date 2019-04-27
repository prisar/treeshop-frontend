import React, { Component } from "react";
import { Input, Button, Snackbar } from "@material-ui/core";
import { API_URL } from "../../config";

import "./styles.scss";

const initialstate = {
  authenticated: false,
  newUser: {
    firstName: "",
    lastName: "",
    birthday: "",
    mobile: "",
    email: "",
    password: ""
  },
  openSnackbar: false,
  errorMessage: ''
};

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialstate;
  }
  onSubmit = e => {
    e.preventDefault();

    const data = JSON.stringify(this.state.newUser);
    fetch(API_URL + "users/register", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.error) {
          this.setState({
            openSnackbar: false,
            errorMessage: "Fail"
          });
        }
        if (!res.error) {
          this.setState({
            openSnackbar: true,
            errorMessage: "Success"
          });
        }
      })
      .catch(err => {});
  };

  fieldChange = e => {
    if (e.target.id === "firstName") {
      const user = this.state.newUser;
      user.firstName = e.target.value;
      this.setState({ newUser: user });
    } else if (e.target.id === "lastName") {
      const user = this.state.newUser;
      user.lastName = e.target.value;
      this.setState({ newUser: user });
    } else if (e.target.id === "birthday") {
      const user = this.state.newUser;
      user.birthday = e.target.value;
      this.setState({ newUser: user });
    } else if (e.target.id === "mobile") {
      const user = this.state.newUser;
      user.mobile = e.target.value;
      this.setState({ newUser: user });
    } else if (e.target.id === "email") {
      const user = this.state.newUser;
      user.email = e.target.value;
      this.setState({ newUser: user });
    } else if (e.target.id === "password") {
      const user = this.state.newUser;
      user.password = e.target.value;
      this.setState({ newUser: user });
    }
  };

  render() {
    return (
      <div>
        <div className="page-heading">
          <h1>Register</h1>
        </div>

        <div className="signup-form">
          <Input
            id="firstName"
            placeholder="First Name"
            className="signup-form-input"
            onChange={this.fieldChange}
          />
          <Input
            id="lastName"
            placeholder="Last Name"
            className="signup-form-input"
            onChange={this.fieldChange}
          />
          <Input
            id="birthday"
            placeholder="Birthday"
            type="date"
            className="signup-form-input"
            onChange={this.fieldChange}
          />
          <Input
            id="mobile"
            placeholder="Phone Number"
            inputProps={{
              maxLength: 10
            }}
            className="signup-form-input"
            onChange={this.fieldChange}
          />
          <Input
            id="email"
            placeholder="Email"
            className="signup-form-input"
            onChange={this.fieldChange}
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            className="signup-form-input"
            onChange={this.fieldChange}
          />
          <div className="signup-btns">
            <Button
              variant="contained"
              color="primary"
              className="signup-btn"
              onClick={this.onSubmit}
            >
              Sign Up
            </Button>
          </div>
        </div>
        <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            open={this.state.openSnackbar}
            autoHideDuration={6000}
            message={this.state.errorMessage}
          />
      </div>
    );
  }
}
