import React, { Component } from "react";
import ProductCard from "../../components/ProductCard";

import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';

import './styles.scss';
import SubHeader from '../../components/SubHeader';

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
        <MainHeader />
        <SubHeader />
        <h1>Products</h1>
        <div>
          {this.state.products.map(product => (
            <ProductCard card={product} key={product.id} />
          ))}
        </div>
        <MainFooter />
      </div>
    );
  }
}
