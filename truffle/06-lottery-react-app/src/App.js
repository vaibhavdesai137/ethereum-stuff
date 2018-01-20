import React, { Component } from 'react';
import web3 from './web3';
import logo from './logo.svg';
import './App.css';

// 0x75e115A5E24d346045B4f123bd73ea1EBbD02e3f

class App extends Component {
  render() {

    console.log(web3.version);

    web3.eth.getAccounts().then(console.log);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
