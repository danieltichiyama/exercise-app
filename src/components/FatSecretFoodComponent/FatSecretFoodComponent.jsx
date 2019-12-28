import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsFatSecretFoodNutrientSearch } from "../../actions";
import styles from "./FatSecretFoodComponent.module.scss";

class FatSecretFoodComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = e => {
    this.props.resetServingMultiplier();
    this.props.dispatchFatSecretFoodNutrientSearch(this.props.foodID);
  };

  render() {
    let arr = this.props.food_description.split(" | ");

    let subArr = arr[0].split(" - ");

    let subArr2 = subArr[1].split("Calories: ");

    let calories = subArr2[1];

    return (
      <button className={styles.fatSecretFood} onClick={this.handleClick}>
        <h3>{this.props.name}</h3>
        <div className={styles.fatSecretFoodDetails}>
          <p className={styles.fatSecretFoodCal}>{calories}</p>
          <p className={styles.fatSecretFoodServing}>{subArr[0]}</p>
        </div>
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFatSecretFoodNutrientSearch: data => {
      return dispatch(actionsFatSecretFoodNutrientSearch(data));
    }
  };
};

FatSecretFoodComponent = connect(
  null,
  mapDispatchToProps
)(FatSecretFoodComponent);
export default FatSecretFoodComponent;
