import React, { Component } from "react";
import { Link } from "react-router-dom";
import { actionLoadUser } from "../../actions";

class UserEditPage extends Component {
  constructor(props) {
    super(props);

    let getId = localStorage.getItem("session");
    let id = JSON.parse(getId);

    this.state = {
      id,
      name: "",
      birth_date: "00/00/0000"
    };
  }

  handleSubmit() {}

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <input type="text" />
        </form>

        <div>
          EDIT MY SHIZ
          <button>
            <Link to="/user">Cancel</Link>
          </button>
        </div>
      </>
    );
  }
}

export default UserEditPage;
