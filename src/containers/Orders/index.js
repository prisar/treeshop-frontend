import React, { Component } from "react";
import MainHeader from "../../components/MainHeader";
import OrderDetails from "../../components/OrderDetails";
import SubHeader from "../../components/SubHeader";
import MainFooter from "../../components/MainFooter";
import { API_URL } from "../../config";
import axios from 'axios';
import jwt from "jsonwebtoken";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = { orders: [] };
    this.getOrders = this.getOrders.bind(this);
  }

  componentDidMount() {
    this.getOrders();
  }

  getOrders = () => {
    const access_token = localStorage.getItem("access_token");
    const rows = jwt.decode(access_token);
    if (!rows) {
      return;
    }
    
    const customerId = rows.rows[0].user_id;
    axios.get(`${API_URL}orders/myorders?customerid=${customerId}`)
      .then(response => {
            let orders = response.data.orders;
            this.setState({ orders: orders });
      })
  };

  render() {
    return (
      <div>
        <MainHeader />
        <SubHeader />
        <h1>My Orders</h1>
        <div>
          {this.state.orders.map(order => (
            <OrderDetails order={order} key={order.ID} />
          ))}
        </div>

        <MainFooter />
      </div>
    );
  }
}

export default Orders;
