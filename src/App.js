import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Orders from './Orders';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Tree Shop</div>
          <Login></Login>
          <Orders></Orders>
        </header>
      </div>
    );
  }
}

export default App;
