import React, { Component } from 'react'
import MainFooter from '../../components/MainFooter';
import Masterhead from '../../components/MainHeader';
import SubHeader from '../../components/SubHeader';

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Masterhead />
        <SubHeader /> 
        <h1>My Cart</h1>
        <MainFooter />
      </div>
    )
  }
}
