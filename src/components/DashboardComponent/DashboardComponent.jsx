import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsLoadUser } from "../../actions";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    const getId = localStorage.getItem("session");
    const id = JSON.parse(getId);
    console.log(id);
    this.state = {
      id
    };
  }
  componentDidMount() {
    this.props.dispatchLoadUser();
  }
  render() {
    console.log("Props in Dashboard Component", this.state.id);

    return (
      <div>
        <h1>This is the dashboard</h1>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    users: store.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadUser: () => {
      return dispatch(actionsLoadUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
