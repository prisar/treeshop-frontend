import React, { Component } from "react";
import MainFooter from "../../components/MainFooter";
import Masterhead from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import axios from "axios";
import { API_URL } from "../../config";
import CartItem from "../../components/CartItem";
import { Button } from "@material-ui/core";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart_items: []
    };
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    const customerId = this.props.routeParams.customer_id;
    axios.get(`${API_URL}cart/${customerId}`).then(response => {
      const items = response.data.results;
      this.setState({
        cart_items: items
      });
    });
  }
  render() {
    return (
      <div>
        <Masterhead />
        <SubHeader />
        <h1>My Cart</h1>
        <div>Cart Subtotal: {}</div>
        <Button color="primary">Procced to Buy</Button>
        <div>
          {this.state.cart_items.map(item => (
            <CartItem item={item} key={item.Id} />
          ))}
        </div>
        <MainFooter />
      </div>
    );
  }
}
