import React, { Component } from 'react'

export default class OrderDetails extends Component {
  render() {
      const order = this.props;
    return (
      <div className="order-details">
        <div>Product</div>
        <div className="info">
            <div className="order-amount">{order.order_amount}</div>
            <div className="order-date">{order.OrderDate}</div>
            <div className="delivery-address">{order.delivery_address}</div>
        </div>
      </div>
    )
  }
}
