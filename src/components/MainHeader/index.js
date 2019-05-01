import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import jwt from "jsonwebtoken";

const rootStyle = {
  flexGrow: 1
};

const appNameStyle = {
  flexGrow: 1
};

const logoutButtonStyle = {
  color: "white"
};

class Masterhead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: ''
    };
  }

  componentDidMount() {
    const access_token = localStorage.getItem("access_token");
    const rows = jwt.decode(access_token);
    if (rows) {
      const display_name = rows.rows[0].first_name;
      this.setState({
        displayName: display_name
      });
    }
  }

  getAccessToken() {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      return "NOT_FOUND"; // No access token found
    }
    return accessToken;
  }

  isAuthenticated() {
    const access_token = this.getAccessToken();

    if (access_token === "NOT_FOUND") {
      return false;
    }

    return true;
  }

  logout = () => {
    // Clear access token from local storage
    localStorage.removeItem("access_token");
    this.setState({
      displayName: ""
    });
  }

  render() {
    return (
      <header className="header" style={rootStyle}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={appNameStyle}>
              ecommerce
            </Typography>
            <div>
              <NavLink to="/viewcart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#FFF"
                    stroke="#000"
                    d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                  />
                </svg>
              </NavLink>
            </div>

            {!this.isAuthenticated() && (
              <div>
                <Button color="inherit">
                  <NavLink className="icons btn-logout" to="/login">
                    <div style={logoutButtonStyle}>Login</div>
                  </NavLink>
                </Button>
                <Button color="inherit">
                  <NavLink to="/signup"><div style={logoutButtonStyle}>Signup</div></NavLink>
                </Button>
              </div>
            )}
            {this.isAuthenticated() && (
              <div>
                {this.state.displayName}
                <Button style={logoutButtonStyle} onClick={this.logout}>Logout</Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

Masterhead.propTypes = {
  attr: PropTypes.object
};

export default Masterhead;
