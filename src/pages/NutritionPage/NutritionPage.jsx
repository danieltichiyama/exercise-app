import React, { Component } from "react";
import DateComponent from "../../components/DateComponent";
import DiaryComponent from "../../components/DiaryComponent";
import AddMealButtonComponent from "../../components/AddMealButtonComponent";
import DashboardComponent from "../../components/DashboardComponent";
import styles from "./NutritionPage.module.scss";

class NutritionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.NutritionPage}>
        <DateComponent></DateComponent>
        <DashboardComponent></DashboardComponent>

        <AddMealButtonComponent />
        <DiaryComponent></DiaryComponent>
      </div>
    );
  }
}

export default NutritionPage;
