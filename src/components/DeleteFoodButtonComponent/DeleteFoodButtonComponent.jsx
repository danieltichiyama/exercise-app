import React, { Component } from "react";
import styles from "../DeleteFoodButtonComponent/DeleteFoodButtonComponent.module.scss";

class DeleteFoodButtonComponent extends Component {
  render() {
    return (
      <div>
        <button className={styles.deleteButton}>x</button>
      </div>
    );
  }
}

export default DeleteFoodButtonComponent;
