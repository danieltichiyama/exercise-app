import React, { Component } from "react";
import styles from "./Playground.module.scss";
import FoodVisionComponent from "../../components/FoodVisionComponent"
import FoodSearchComponent from "../../components/FoodSearchComponent/FoodSearchComponent";

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.Playground}>
        <p>No Pushing. No jumping. Have fun.</p>
        {/* insert playground equipment here. */}
        <FoodVisionComponent/>
        <FoodSearchComponent/>
      </div>
    );
  }
}

export default Playground;
