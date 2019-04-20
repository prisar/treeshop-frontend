import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/Login';
import { NavLink } from 'react-router-dom';

import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/login" component={Login}></Route>
      </BrowserRouter>
    );
  }
}

export default App;
