import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import { API_ROOT } from "../../config";
import { Redirect } from "react-router-dom";

const cardStyle = {
  width: "100%"
};

const imageStyle = {
  paddingTop: "18%",
  backgroundSize: "contain"
};

const priceStyle = {
  fontSize: "30px"
};

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_product_details: false
    };
  }

  showProductDetails = () => {
    this.setState({
      show_product_details: true
    });
  };

  render() {
    if (this.state.show_product_details === true) {
      let path = `/product_details/${this.props.card.id}`;
      return <Redirect to={path} />;
    }

    return (
      <div>
        <Card style={cardStyle}>
          <CardHeader
            action={
              <IconButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 16"
                >
                  <path
                    d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                    fill="#2874F0"
                    stroke="#FFF"
                    fillRule="evenodd"
                    opacity=".9"
                  />
                </svg>
              </IconButton>
            }
            title={this.props.card.product_name}
            //   subheader={this.props.card.product_price}
          />
          <CardMedia
            image={
              `${API_ROOT}public/assets/images/` + this.props.card.product_image
            }
            title={this.props.card.product_name}
            style={imageStyle}
            onClick={this.showProductDetails}
          />
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {this.props.card.product_description}
            </Typography>
            <Typography color="textSecondary" gutterBottom style={priceStyle}>
              ₹ {this.props.card.product_price}
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button variant="contained" color="primary" size="small">
              Add to Wishlist
            </Button> */}
          </CardActions>
        </Card>
      </div>
    );
  }
}
