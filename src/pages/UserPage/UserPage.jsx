import React, { Component } from "react";

class UserPage extends Component {
  constructor(props) {
    super(props);

    const getId = localStorage.getItem("session");
    const id = JSON.parse(getId);
  }
  render() {
    return <div>User Page</div>;
  }
}

export default UserPage;
