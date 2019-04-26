import React, { Component } from 'react';
import MainHeader from '../../components/MainHeader';
import OrderDetails from '../../components/OrderDetails';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.getOrders = this.getOrders.bind(this);
    this.state = { orders: [] };
  }

  getOrders = () => {
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
        <OrderDetails {...this.state.orders[0]}/>
      </div>

    );
  }
}

export default Orders;