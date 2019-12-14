import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../AddFoodButtonComponent/AddFoodButtonComponent.module.scss";
import { actionsAddProduct } from "../../actions";
import { convertToObject } from "typescript";

class AddFoodButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  compileFoodData = () => {
    let id = localStorage.getItem("session");
    let stringToId = JSON.parse(id);

    return {
      date: new Date(),
      api_id: this.props.api_id,
      meal_type_id: this.props.meal_type_id,
      user_id: stringToId.id,
      calories: this.props.calories,
      serving_size: this.props.serving_size
    };
  };

  handleAddClick = () => {
    let apiFood = this.compileFoodData();
    this.props.dispatchAddFood(apiFood);
  };

  render() {
    return (
      <div className={styles.addFoodButton}>
        <p className={styles.description}>ADD TO DIARY</p>
        <img
          className="addFoodButton"
          src="https://image.flaticon.com/icons/svg/1237/1237946.svg"
          alt="add button"
          onClick={this.handleAddClick}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    addFood: store.addFood,
    api_id: store.foods.fdcId,
    calories: store.foods.foodNutrients[3].amount,
    serving_size: store.foods.foodPortions[0].portionDescription
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchAddFood: foodObject => {
      return dispatch(actionsAddFood(foodObject));
    }
  };
};

AddFoodButtonComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFoodButtonComponent);

export default AddFoodButtonComponent;
