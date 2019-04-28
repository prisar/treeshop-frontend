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
            <Button color="inherit">
              <NavLink className="icons btn-logout" to="/login">
                Login
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to="/signup">Signup</NavLink>
            </Button>
          </Toolbar>
        </AppBar>
        {/* <div className='login-out'>
              <NavLink className='icons btn-logout' to='/'></NavLink>
            </div> */}
        }
      </header>
    );
  }
}

Masterhead.propTypes = {
  attr: PropTypes.object
};

export default Masterhead;
