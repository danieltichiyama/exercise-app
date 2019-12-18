import React, { Component } from "react";
import { actionClear, actionFoodNutrients } from "../../actions";
import { connect } from "react-redux";

class FoodComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.props.dispatchClear();
    this.props.dispatchFoodNutrients(this.props.fdcId);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        <h3>{this.props.description}</h3>
        <p>fdcID: {this.props.fdcId}</p>
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchClear: () => {
      return dispatch(actionClear());
    },
    dispatchFoodNutrients: fdcId => {
      return dispatch(actionFoodNutrients(fdcId));
    }
  };
};

FoodComponent = connect(null, mapDispatchToProps)(FoodComponent);

export default FoodComponent;
