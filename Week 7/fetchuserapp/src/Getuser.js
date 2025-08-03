import React, { Component } from "react";

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.randomuser.me/");
      const data = await response.json();
      this.setState({ user: data.results[0], loading: false });
    } catch (error) {
      console.error("Error fetching user:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { user, loading } = this.state;

    if (loading) {
      return <h2>Loading user...</h2>;
    }

    if (!user) {
      return <h2>Failed to load user.</h2>;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>
          {user.name.title} {user.name.first}
        </h2>
        <img
          src={user.picture.large}
          alt="User"
          style={{ borderRadius: "50%", border: "2px solid #333" }}
        />
      </div>
    );
  }
}

export default Getuser;
