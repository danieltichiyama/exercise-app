import React, { Component } from "react";
import DateComponent from "../../components/DateComponent";
import DiaryComponent from "../../components/DiaryComponent";
import AddMealButtonComponent from "../../components/AddMealButtonComponent";

class NutritionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Nutrition Page
        <DateComponent></DateComponent>
        <DiaryComponent></DiaryComponent>
        <AddMealButtonComponent />
      </div>
    );
  }
}

export default NutritionPage;
