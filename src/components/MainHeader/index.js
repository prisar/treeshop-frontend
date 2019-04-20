import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';


class Masterhead extends Component {
  constructor(props) {
    super(props);
    this.showSearchPopup = this.showSearchPopup.bind(this);
    this.hideSearchPopup = this.hideSearchPopup.bind(this);

    this.state = {
      isSearchFocused: false
    };
  }

  //show searchpop
  showSearchPopup() {
    this.setState({ 'isSearchFocused': true });

    document.addEventListener('click', this.handleOutsideClickHandler(this));
  }

  //hides searchpop
  hideSearchPopup() {
    this.setState({ 'isSearchFocused': false });
    document.querySelector('.search-modal').removeEventListener('click', this.handleOutsideClick);
  }

  // handleOutsideClick
  handleOutsideClickHandler(nodeEl) {
    return function (e) {
      // ignore clicks on the component itself
      if (e.toElement.classList.contains('search-input') || document.querySelector('.search-modal').contains(e.target)) {
        return;
      }

      nodeEl.hideSearchPopup();
    }
  }

  render() {
    const { type, formType } = { ...this.props };

    return (
      <header className='header'>
        {
          type !== 'Admin' &&
          (
            <div className='search-boxs'>
              <div className='inputs'>
                <a href='javascript:;' className='icons btn-search'></a>
                <input type='search' placeholder={`Search${type === 'CustomerProducts' ? ' SellerProducts' : ''}`} />
              </div>
            </div>
          )
        }

        {
          <div className='right-area'>
            <div className='notification-boxs'>
              <a href='javascript:;' className='icons btn-ring'><i></i></a>
            </div>
            <div className='user-boxs'>
              <div className='rights'>
                {

                  <div>
                    <a href='javascript:;' className='user-name'>First Customer</a>
                    <span className='txt'>Customer</span>
                  </div>

                }
              </div>
            </div>
            <div className='login-out'>
              <NavLink className='icons btn-logout' to='/'></NavLink>
            </div>
          </div>
          
        }
      </header>
    );
  }
}

Masterhead.propTypes = {
  attr: PropTypes.object
}



export default Masterhead;
