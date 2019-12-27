import React, { Component } from "react";
import styles from "./Playground.module.scss";
// import SmokeButton from "../../components/SmokeButton";
// import FoodVisionComponent from "../../components/FoodVisionComponent";
import FatSecretSearchComponent from "../../components/FatSecretSearchComponent";
// import ImageUploadComponent from "../../components/ImageUploadComponent";

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
        <FatSecretSearchComponent></FatSecretSearchComponent>
      </div>
    );
  }
}

export default Playground;
