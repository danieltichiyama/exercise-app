import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../AddFoodButtonComponent/AddFoodButtonComponent.module.scss";
import { actionsAddFood } from "../../actions";

class AddFoodButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  compileFoodData = () => {
    let id = localStorage.getItem("session");
    let stringToId = JSON.parse(id);

    return {
      api_id: this.props.api_id,
      meal_type_id: this.props.meal_type_id,
      user_id: stringToId.id,
      calories: this.props.calories,
      serving_size: this.props.serving_size,
      servings: 1,
      description: this.props.description,
      fat: this.props.fat,
      carbs: this.props.carbs,
      protein: this.props.protein,
      date: this.props.date
    };
  };

  handleAddClick = () => {
    console.log("handleAddClick works");
    let apiFood = this.compileFoodData();
    this.props.dispatchAddFood(apiFood);
  };

  render() {
    return (
      <div>
        <button className={styles.addFoodButton} onClick={this.handleAddClick}>
          <p className={styles.description}>ADD TO DIARY</p>
          <img
            className="addFoodButton"
            src="https://image.flaticon.com/icons/svg/1237/1237946.svg"
            alt="add button"
          />
        </button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    addFood: store.addFood,
    api_id: store.fat_secret_nutrients.food_id,
    calories: store.fat_secret_nutrients.servings.serving[0].calories,
    serving_size:
      store.fat_secret_nutrients.servings.serving[0].serving_description,
    description: store.fat_secret_nutrients.food_name,
    fat: store.fat_secret_nutrients.servings.serving[0].fat,
    carbs: store.fat_secret_nutrients.servings.serving[0].carbohydrate,
    protein: store.fat_secret_nutrients.servings.serving[0].protein,
    date: store.diaryDate
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
