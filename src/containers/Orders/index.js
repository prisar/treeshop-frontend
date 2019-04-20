import React, { Component } from 'react';
import MainHeader from '../../components/MainHeader';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.getOrders = this.getOrders.bind(this);
    this.state = { orders: [] };
  }

  getOrders() {
    fetch('http://localhost:8000/orders/showAllOrders', {
      method: 'GET'
    }).then((result) => {
      return result.json();
    }).then(orders => {
      this.setState({ orders });
      console.log(this.state);
    }).catch((err) => {

    });
  }

  render() {
    return (
      <div>
        <MainHeader />
        <div className="Login">
          <div onClick={this.getOrders()}>Recent Orders</div>
          {JSON.stringify(this.state.orders)}
        </div>
      </div>

    );
  }
}

export default Orders;