import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsLoadActivity } from "../../actions";
// import styles from "./SmokeButton.module.scss";

class SmokeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleButtonClick = () => {
    return this.props.dispatchLoadActivities();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Return Activity Levels</button>
        <div>{JSON.stringify(this.props.activity_levels)}</div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    activity_levels: store.activity_levels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadActivities: () => {
      console.log("dispatchLoadActivities");
      return dispatch(actionsLoadActivity());
    }
  };
};

SmokeButton = connect(mapStateToProps, mapDispatchToProps)(SmokeButton);

export default SmokeButton;
