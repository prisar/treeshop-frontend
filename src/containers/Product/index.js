import React, { Component } from "react";
import Masterhead from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import { Card, CardContent, Button } from "@material-ui/core";
import axios from "axios";
import { API_URL } from "../../config";
import { API_ROOT } from "../../config";
import { Redirect } from "react-router-dom";

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

const productPrice = {
  fontSize: "xx-large"
};

const productDesc = {
  fontSize: "smaller"
};

const buttons = {
  marginTop: "10%"
};

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ""
    };
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails() {
    const productId = this.props.routeParams.id;

    axios.get(`${API_URL}products/${productId}`).then(response => {
      let details = response.data.results;
      this.setState({
        details: details,
        proceed_to_cart: false,
        proceed_to_checkout: false,
        quantity: 0
      });
    });
  }

  addToCart = () => {
    let data = {
      customerId: 9, // TODO login user
      productId: this.state.details.id,
      quantity: 1
    };

    axios.post(`${API_URL}cart`, data).then(response => {
      console.log(response);
      if (response.data.status === "success") {
        this.setState({
          proceed_to_cart: true
        });
      }
    });
  };

  checkoutNow = () => {
    // TODO genertate order id
    this.setState({
      proceed_to_checkout: true
    });
  };

  render() {
    if (this.state.proceed_to_cart) {
      let path = "/viewcart";
      return <Redirect to={path} />;
    }

    if (this.state.proceed_to_checkout) {
      let path = "/checkout";
      return <Redirect to={path} />;
    }

    return (
      <div>
        <Masterhead />
        <SubHeader />
        <Card style={leftCard}>
          <CardContent>
            <div style={productImageStyle}>
              <img
                src={`${API_ROOT}public/assets/images/${
                  this.state.details.product_image
                }`}
                alt={this.state.details.product_name}
                style={imgStyle}
              />
            </div>
          </CardContent>
        </Card>
        <Card style={rightCard}>
          <CardContent>
            <div style={productImageStyle}>
              <div style={imgStyle}>
                <h1>{this.state.details.product_name}</h1>
              </div>
              <div style={productPrice}>
                ₹ {this.state.details.product_price}
              </div>
              <div style={productDesc}>
                {this.state.details.product_description}
              </div>
            </div>
            <div style={buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.addToCart}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={this.checkoutNow}
              >
                Buy Now
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    );
  }
}
