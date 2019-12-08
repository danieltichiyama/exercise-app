import React, { Component } from "react";
import AddMealButtonComponent from "../../components/AddMealButtonComponent";

class NutritionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <AddMealButtonComponent />
      </div>
    );
  }
}

export default NutritionPage;
