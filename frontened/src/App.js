import React, { Component } from 'react';
import logo from './logo.svg';
import Checkout from './Checkout';
import './App.css';
import img from './img/pic1.jpg';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Checkout
           name={'The Payment Gateway'}
           description={'Please enter your details'}
           image={img}
           zipcode="True"
           amount={100}
          />
        </p>
      </div>
    );
  }
}

export default App;
