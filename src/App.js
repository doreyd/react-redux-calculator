import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React/Redux Calculator</p>
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;
