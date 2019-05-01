import React, { Component } from "react";
import Masterhead from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import axios from "axios";
import { API_URL } from "../../config";
import CartItem from "../../components/CartItem";
import { Button } from "@material-ui/core";
import jwt from "jsonwebtoken";
import { Redirect } from "react-router-dom";

const cartHeaderStyle = {
  flexgrow: 1
};

const proceedToBuyBtnStyle = {
  position: "absolute",
  right: "1em",
  top: "8em"
}

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart_items: [],
      cart_subtotal: 0,
      proceed_to_buy: false
    };
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    const access_token = localStorage.getItem("access_token");
    const rows = jwt.decode(access_token);
    if (!rows) {
      return;
    }
    const customerId = rows.rows[0].user_id;
    axios.get(`${API_URL}cart/${customerId}`).then(response => {
      const items = response.data.results;
      this.setState({
        cart_items: items
      });

      this.calcuateSubtotal();
    });
  }

  calcuateSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < this.state.cart_items.length; i++) {
      subtotal += this.state.cart_items[i].product_price;
    }
    console.log(this.state.cart_items[0]);
    this.setState({
      cart_subtotal: subtotal
    });
  }

  proceedToBuy = () => {
    this.setState({
      proceed_to_buy: true
    });
  };

  render() {
    if (this.state.proceed_to_buy) {
      let path = "/checkout";
      return <Redirect to={path} />;
    }

    return (
      <div>
        <Masterhead />
        <SubHeader />
        <h1>My Cart</h1>
        <div style={cartHeaderStyle}>
          <h3>
            Cart Subtotal ({this.state.cart_items.length} items): ₹{" "}
            {this.state.cart_subtotal}
          </h3>
        </div><div style={proceedToBuyBtnStyle}><Button
            variant="contained"
            color="primary"
            onClick={this.proceedToBuy}
          >
            Proceed to Buy
          </Button></div>
        <div>
          {this.state.cart_items.map(item => (
            <CartItem item={item} key={item.cart_id} />
          ))}
        </div>
      </div>
    );
  }
}
