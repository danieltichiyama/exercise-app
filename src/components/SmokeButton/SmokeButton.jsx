import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsGetSmoke } from "../../actions";
// import styles from "./SmokeButton.module.scss";

class SmokeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleButtonClick = () => {
    return this.props.dispatchGetSmoke();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>
          Query database for smoke
        </button>
        <div>{JSON.stringify(this.props.smoke.message)}</div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    smoke: store.smoke
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetSmoke: () => {
      return dispatch(actionsGetSmoke());
    }
  };
};

SmokeButton = connect(mapStateToProps, mapDispatchToProps)(SmokeButton);

export default SmokeButton;
