import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleClick = (e) => {
    e.preventDefault(); // Synthetic event
    alert("I was clicked");
  };

  render() {
    return (
      <div className="App">
        <h1>Event Handling Example</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <hr />
        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>

        <hr />
        <button onClick={this.handleClick}>OnPress</button>

        <hr />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
