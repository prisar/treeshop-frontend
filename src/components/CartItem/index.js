import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router-dom";
import { API_ROOT } from "../../config";

const priceStyle = {
  fontSize: "30px"
};

const imageStyle = {
    paddingTop: "18%",
    backgroundSize: "contain"
  };

export default class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
        redirect_to_product_details: false
    }
  }

  showProductDetails = () => {
    this.setState({
        redirect_to_product_details: true
    });
  };

  render() {
      if (this.state.redirect_to_product_details) {
        let path = `/product_details/${this.props.item.product_id}`;
        return <Redirect to={path} />;
      }
    return (
      <div>
        <Card>
          <CardHeader
            title={this.props.item.product_name}
            subheader={this.props.item.product_description}
          />
          <CardMedia
            image={
              `${API_ROOT}public/assets/images/` + this.props.item.product_image
            }
            title={this.props.item.product_name}
            style={imageStyle}
            onClick={this.showProductDetails}
          />
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Quantity: {this.props.item.product_quantity}
            </Typography>
            <Typography color="textSecondary" gutterBottom style={priceStyle}>
              ₹ {this.props.item.product_price}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}
