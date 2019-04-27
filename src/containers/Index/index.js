import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';

import './styles.scss';

const initialstate = {
  authenticated: false,
};

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        {/* <MainHeader type='customer'/> */}
        <div className="menul">
          <ul>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            <li><NavLink to='/orders'>Orders</NavLink></li>
          </ul>
        </div>
        
        <MainFooter />
      </div>

    )
  }
}

export default Index;
