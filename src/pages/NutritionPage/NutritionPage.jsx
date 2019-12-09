import React, { Component } from "react";
import DateComponent from "../../components/DateComponent/DateComponent";
import DiaryComponent from "../../components/DiaryComponent/DiaryComponent";

class NutritionPage extends Component {
  render() {
    return (
      <div>
        Nutrition Page
        <DateComponent></DateComponent>
        <DiaryComponent></DiaryComponent>
      </div>
    );
  }
}

export default NutritionPage;
