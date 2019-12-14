import React, { Component } from "react";
import styles from "./Playground.module.scss";
import ImageUploadComponent from "../../components/ImageUploadComponent";
import FoodSearchComponent from "../../components/FoodSearchComponent";


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
        <ImageUploadComponent></ImageUploadComponent>
        <FoodSearchComponent></FoodSearchComponent>
      </div>
    );
  }
}

export default Playground;
