import React, { Component } from "react";
// import AddFoodButtonComponent from "../../components/AddFoodButtonComponent";

class FatSecretFoodNutrientsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h3>{this.props.name}</h3>
        <ul>
          {/* <li>Serving Size: {this.props.servingSize}</li> */}
          <li>Calories: {this.props.calories}</li>
          <li>Fats: {this.props.fat}</li>
          <li>Carbohydrates: {this.props.carbohydrate}</li>
          <li>Protein: {this.props.protein}</li>
        </ul>
      </>
    );
  }
}

export default FatSecretFoodNutrientsComponent;
