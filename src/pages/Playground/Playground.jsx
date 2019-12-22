import React, { Component } from "react";
import styles from "./Playground.module.scss";
import FatSecretSearchComponent from "../../components/FatSecretSearchComponent";

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
        <FatSecretSearchComponent/>
      </div>
    );
  }
}

export default Playground;
