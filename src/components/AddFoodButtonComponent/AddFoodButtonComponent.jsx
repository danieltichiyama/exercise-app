import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../AddFoodButtonComponent/AddFoodButtonComponent.module.scss";
import { actionsAddFood } from "../../actions";

class AddFoodButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: ["Breakfast", "Lunch", "Dinner", "Snacks"],
      meal: ""
    };
  }

  componentDidMount = () => {
    let currentMeal = this.state.meals[parseInt(this.props.meal_type_id) - 1];

    return this.setState({
      meal: currentMeal
    });
  };

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
    let apiFood = this.compileFoodData();
    this.props.dispatchAddFood(apiFood);
  };

  render() {
    return (
      <button className={styles.addFoodButton} onClick={this.handleAddClick}>
        <span>+ </span> Add to {this.state.meal}
      </button>
    );
  }
}

const mapStateToProps = store => {
  if (Array.isArray(store.fat_secret_nutrients.servings.serving)) {
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
  } else if (!Array.isArray(store.fat_secret_nutrients.servings.serving)) {
    return {
      addFood: store.addFood,
      api_id: store.fat_secret_nutrients.food_id,
      calories: store.fat_secret_nutrients.servings.serving.calories,
      serving_size:
        store.fat_secret_nutrients.servings.serving.serving_description,
      description: store.fat_secret_nutrients.food_name,
      fat: store.fat_secret_nutrients.servings.serving.fat,
      carbs: store.fat_secret_nutrients.servings.serving.carbohydrate,
      protein: store.fat_secret_nutrients.servings.serving.protein,
      date: store.diaryDate
    };
  }
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
