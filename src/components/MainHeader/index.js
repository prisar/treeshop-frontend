import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

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
      <header className="header">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              // className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" color="inherit">
              <Link to="/">Home</Link>
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
