import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: ""
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 0.011; // Example: ₹1 = €0.011
    const euro = this.state.rupees * conversionRate;
    alert(`Converted Value: €${euro.toFixed(2)}`);
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter amount in Rupees"
            value={this.state.rupees}
            onChange={this.handleChange}
          />
          <button type="submit">Convert</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
