import React, { Component } from "react";

class FoodNutrientComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() { 
    return (
      <div>
        <h3>{this.props.description}</h3>
        <p>Calories: {this.props.calories}</p>
        <p>Protien: {this.props.protien}</p>
        <p>Carbohydrates: {this.props.carbohydrates}</p>
        <p>Sugars: {this.props.sugars}</p>
        <p>Fats: {this.props.fats}</p>
        <p>Calcium: {this.props.calcium}</p>
        <p>Iron: {this.props.iron}</p>
        <p>Sodium: {this.props.sodium}</p>
        <p>Zinc: {this.props.zinc}</p>
      </div>
    );
  }
}
 
export default FoodNutrientComponent;
