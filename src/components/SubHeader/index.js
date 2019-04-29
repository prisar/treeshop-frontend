import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import "./styles.scss";
import { Toolbar, Menu, IconButton } from "@material-ui/core";

const toolbarStyle = {
  backgroundColor: "yellow"
};

export default class SubHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <div className="menul">
          <Toolbar style={toolbarStyle}>
            <IconButton
              aria-label="More"
              aria-owns={open ? "long-menu" : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              Menu
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={this.handleClose}
              PaperProps={{
                style: {
                  width: 200
                }
              }}
            >
              <MenuList>
                <MenuItem>
                  <NavLink to="/products">Products</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/viewcart">Cart</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/checkout">Confirm Order</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/orders">Orders</NavLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </Toolbar>
        </div>
      </div>
    );
  }
}