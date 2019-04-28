import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";

const cardStyle = {
    width: '100%',
  }; 

const imageStyle = {
    paddingTop: '18%',
    backgroundSize: 'contain'
  };  

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card style={cardStyle}>
        <CardHeader
          title={this.props.card.product_name}
        //   subheader={this.props.card.product_description}
        />
        <CardMedia
          image={
            "http://localhost:8000/public/assets/images/" +
            this.props.card.product_image
          }
          title="Paella dish"
          style={imageStyle}
        />
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
            >
              {this.props.card.product_description}
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button variant="contained" color="primary" size="small">Add to Cart</Button> */}
          </CardActions>
        </Card>
      </div>
    );
  }
}
