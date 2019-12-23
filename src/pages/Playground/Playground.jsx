import React, { Component } from "react";
import styles from "./Playground.module.scss";
import FatSecretSearchComponent from "../../components/FatSecretSearchComponent";
import SmokeButton from "../../components/SmokeButton";
import FoodVisionComponent from "../../components/FoodVisionComponent/FoodVisionComponent";

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.Playground}>
        <p>Pushing and pulling encouraged. Have fun.</p>
        {/* insert playground equipment here. */}
        <FoodVisionComponent/>
        <FatSecretSearchComponent/>
        <SmokeButton></SmokeButton>
      </div>
    );
  }
}

export default Playground;
