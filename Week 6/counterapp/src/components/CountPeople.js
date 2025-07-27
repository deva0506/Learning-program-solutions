import React, { Component } from "react";

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0,
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1,
    }));
  };

  updateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1,
    }));
  };

  render() {
    return (
      <div className="container">
        <h2>Mall Visitor Counter</h2>
        <p>
          <strong>Number of People Entered:</strong> {this.state.entryCount}
        </p>
        <p>
          <strong>Number of People Exited:</strong> {this.state.exitCount}
        </p>

        <button className="entry" onClick={this.updateEntry}>
          Login
        </button>
        <button className="exit" onClick={this.updateExit}>
          Exit
        </button>
      </div>
    );
  }
}

export default CountPeople;
