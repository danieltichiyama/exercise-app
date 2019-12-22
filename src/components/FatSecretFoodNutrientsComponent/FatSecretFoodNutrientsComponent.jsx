import React, { Component } from "react";
// import AddFoodButtonComponent from "../../components/AddFoodButtonComponent";

class FatSecretFoodNutrientsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <h1>{this.props.index}</h1>
    );
  }
}

export default FatSecretFoodNutrientsComponent;