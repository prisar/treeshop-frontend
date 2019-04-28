import React, { Component } from 'react';
import MainFooter from '../../components/MainFooter';
import MainHeader from '../../components/MainHeader';

import './styles.scss';
import SubHeader from '../../components/SubHeader';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <MainHeader />
        <SubHeader />
        <MainFooter />
      </div>

    )
  }
}

export default Index;
