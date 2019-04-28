import axios from 'axios';
import React, { Component } from "react";
import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';
import ProductCard from "../../components/ProductCard";
import SubHeader from '../../components/SubHeader';
import { API_URL } from "../../config";
import './styles.scss';

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
    axios.get(`${API_URL}products`)
    .then(response => {
          let products = response.data.results;
          this.setState({ products: products });
    })
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
