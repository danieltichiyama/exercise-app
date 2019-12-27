import React, { Component } from "react";
import DateComponent from "../../components/DateComponent";
import DiaryComponent from "../../components/DiaryComponent";
import AddMealButtonComponent from "../../components/AddMealButtonComponent";
import DashboardComponent from "../../components/DashboardComponent";
import styles from "./NutritionPage.module.scss";

class NutritionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { overflow: "hidden" }
    };
  }

  handleModalOpen = () => {
    let { overflow } = this.state.style;

    if (overflow === "hidden") {
      return this.setState({ style: { overflow: "auto" } });
    } else if (overflow === "auto") {
      return this.setState({ style: { overflow: "hidden" } });
    }
  };

  render() {
    return (
      <div className={styles.NutritionPage} style={this.state.style}>
        <DateComponent></DateComponent>
        <DashboardComponent></DashboardComponent>
        <AddMealButtonComponent handleModalOpen={this.handleModalOpen} />
        <DiaryComponent></DiaryComponent>
      </div>
    );
  }
}

export default NutritionPage;
