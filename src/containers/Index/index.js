import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      
    return (
      <ul>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/orders'>Orders</NavLink></li>
      </ul>
    )
  }
}

export default Index;
