import React, { Component } from "react";
import MainFooter from "../../components/MainFooter";
import Masterhead from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import { Button, Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { API_ROOT } from "../../config";

const leftCard = {
  width: "50%",
  float: "left",
  boxShadow: "none"
};

const rightCard = {
  width: "50%",
  float: "right",
  boxShadow: "none"
};

const productImageStyle = {
  width: "100%"
};

const imgStyle = {
  maxWidth: "100%",
  objectFit: "contain"
};

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <Masterhead />
        <SubHeader />
        <h1>Order Summary</h1>
        <Card style={leftCard}>
          <CardContent>
            <div style={productImageStyle}>
              <img
                // src={`${API_ROOT}public/assets/images/${
                //   1// this.state.details.product_image
                // }`}
                // alt={this.state.details.product_name}
                style={imgStyle}
              />
            </div>
          </CardContent>
        </Card>
        <Card style={rightCard}>
        <div>
          <CardHeader title="Price Details"></CardHeader>
          <CardContent>
          <Typography>Price (0 items)</Typography>
          <Typography>₹ 0</Typography>
          <Typography>Tax</Typography>
          <Typography>₹ 0</Typography>
          <Typography>Delivery Charges</Typography>
          <Typography>FREE</Typography>
          <Typography>Amount Payable</Typography>
          <Typography>0</Typography>
          <Button variant="contained" color="primary">
            Place your Order
          </Button>
          </CardContent>
          
        </div>
        </Card>
        <MainFooter />
      </div>
    );
  }
}
