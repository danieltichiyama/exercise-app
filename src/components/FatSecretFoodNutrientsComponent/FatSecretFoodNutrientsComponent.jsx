import React, { Component } from "react";
import styles from "./FatSecretFoodNutrientsComponent.module.scss";

class FatSecretFoodNutrientsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.FatSecretFoodNutrients}>
        <div className={styles.header}>
          <h1>{this.props.name}</h1>
          <h1 className={styles.calories}>{this.props.calories}</h1>
        </div>
        <div className={styles.nutritionalInfo}>
          <div>
            <h1>{this.props.fat}</h1>
            <h3 className={styles.fat}>Fat</h3>
          </div>
          <div>
            <h1>{this.props.carbohydrate}</h1>
            <h3 className={styles.carbs}>Carbs</h3>
          </div>
          <div>
            <h1>{this.props.protein}</h1>
            <h3 className={styles.protein}>Protein</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default FatSecretFoodNutrientsComponent;
