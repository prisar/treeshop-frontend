import React, { Component } from 'react';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.getOrders = this.getOrders.bind(this);
        this.state ={orders: []};
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
        <div className="Login">
            <button onClick={this.getOrders}>Get Orders</button>
          {JSON.stringify(this.state.orders)}
        </div>
      );
    }
  }
  
  export default Orders;