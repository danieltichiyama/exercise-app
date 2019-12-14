import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserEditPage extends Component {
  state = {};
  render() {
    return (
      <div>
        EDIT MY SHIZ
        <button>
          <Link to="/user">Cancel</Link>
        </button>
      </div>
    );
  }
}

export default UserEditPage;
