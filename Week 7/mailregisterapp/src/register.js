import React, { Component } from "react";
import "./register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      errors: {}
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validateForm = () => {
    let errors = {};
    let isValid = true;

    // Name validation
    if (this.state.fullName.trim().length < 5) {
      isValid = false;
      errors.fullName = "Full Name must be 5 characters long!";
    }

    // Email validation
    if (!this.state.email.includes("@") || !this.state.email.includes(".")) {
      isValid = false;
      errors.email = "Email must contain @ and .";
    }

    // Password validation
    if (this.state.password.length < 8) {
      isValid = false;
      errors.password = "Password must be at least 8 characters long!";
    }

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      alert("Valid Form");
    } else {
      const { errors } = this.state;
      if (errors.fullName) alert(errors.fullName);
      if (errors.email) alert(errors.email);
      if (errors.password) alert(errors.password);
    }
  };

  render() {
    return (
      <div className="container">
        <h2>Register Here!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
