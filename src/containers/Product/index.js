import React, { Component } from "react";
import MainFooter from "../../components/MainFooter";
import Masterhead from "../../components/MainHeader";
import SubHeader from "../../components/SubHeader";
import { Card, CardContent, Button } from "@material-ui/core";
import axios from "axios";
import { API_URL } from "../../config";
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
        details: details
      });
    });
  }

  render() {
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
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
              <Button variant="contained" color="primary">
                Buy Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* <MainFooter /> */}
      </div>
    );
  }
}
