import React, { Component } from "react";
import styles from "./Playground.module.scss";
import SmokeButton from "../../components/SmokeButton";

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

        <SmokeButton></SmokeButton>
      </div>
    );
  }
}

export default Playground;
