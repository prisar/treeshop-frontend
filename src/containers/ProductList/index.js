import React, { Component } from "react";
import ProductCard from "../../components/ProductCard";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    fetch("http://localhost:8000/api/products", {
      method: "GET"
    })
      .then(result => {
        return result.json();
      })
      .then(response => {
        let products = response.results;
        this.setState({ products: products });
      })
      .catch(err => {});
  };

  render() {
    return (
      <div>
        <h1>Products</h1>
        <div>
          {this.state.products.map(product => (
            <ProductCard card={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  }
}
