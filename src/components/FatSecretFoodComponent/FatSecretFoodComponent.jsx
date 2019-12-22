import React, { Component } from "react";
import{ connect } from "react-redux";
import { actionsFatSecretFoodNutrientSearch } from "../../actions";

class FatSecretFoodComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleClick = (e) => {
    this.props.dispatchFatSecretFoodNutrientSearch(this.props.foodID)
  }

  render() { 
    return ( 
      <button onClick={this.handleClick}>
        <h3>{this.props.name}</h3>
        <p>{this.props.food_description}</p>
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFatSecretFoodNutrientSearch: (data) => {
      return dispatch(actionsFatSecretFoodNutrientSearch(data))
    }
  }
}

FatSecretFoodComponent = connect(null, mapDispatchToProps)(FatSecretFoodComponent)
export default FatSecretFoodComponent;