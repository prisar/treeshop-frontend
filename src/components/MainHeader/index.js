import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const rootStyle = {
  flexGrow: 1
};

const appNameStyle = {
  flexGrow: 1
};

class Masterhead extends Component {
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

  logout() {
    // Clear access token from local storage
    localStorage.removeItem("access_token");
  }

  render() {
    return (
      <header className="header" style={rootStyle}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={appNameStyle}>
              ecommerce
            </Typography>

            {!this.isAuthenticated() && (
              <div>
                <Button color="inherit">
                  <NavLink className="icons btn-logout" to="/login">
                    Login
                  </NavLink>
                </Button>
                <Button color="inherit">
                  <NavLink to="/signup">Signup</NavLink>
                </Button>
              </div>
            )}
            {this.isAuthenticated() && (
              <Button onClick={this.logout}>Logout</Button>
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
