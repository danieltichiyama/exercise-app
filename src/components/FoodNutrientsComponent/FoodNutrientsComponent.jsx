import React, { Component } from "react";
import AddFoodButtonComponent from "../../components/AddFoodButtonComponent";

class FoodNutrientComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <AddFoodButtonComponent meal_type_id={this.props.meal_type_id} />
        <h3>{this.props.description}</h3>
        <p>Calories: {this.props.calories}</p>
        <p>Fat: {this.props.fat}</p>
        <p>Protein: {this.props.protein}</p>
        <p>Carbohydrates: {this.props.carbohydrates}</p>
        <p>Sugars: {this.props.sugars}</p>
        <p>Fiber: {this.props.fiber}</p>
        <p>Calcium: {this.props.calcium}</p>
        <p>Iron: {this.props.iron}</p>
        <p>Sodium: {this.props.sodium}</p>
        <p>Zinc: {this.props.zinc}</p>
      </div>
    );
  }
}

export default FoodNutrientComponent;
