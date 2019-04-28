import React, { Component } from "react";
import MainHeader from "../../components/MainHeader";
import OrderDetails from "../../components/OrderDetails";
import SubHeader from "../../components/SubHeader";
import MainFooter from "../../components/MainFooter";

import axios from 'axios';

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
    axios.get(`http://localhost:8000/api/orders/myorders?customerid=9`)
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
