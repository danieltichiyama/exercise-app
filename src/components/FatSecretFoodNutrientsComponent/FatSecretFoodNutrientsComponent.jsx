import React, { Component } from "react";
import AddFoodButtonComponent from "../../components/AddFoodButtonComponent";
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
          <h3>{this.props.name}</h3>
          <h3 className={styles.calories}>{this.props.calories}</h3>
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
        <div className={styles.servingsAndAddButton}>
          <div className={styles.servings}>
            Servings: <div className={styles.leftArrow}></div>
            <div clasName={styles.servingMultiplier}>3</div>
            <div className={styles.rightArrow}></div>
          </div>
          <AddFoodButtonComponent meal_type_id={this.props.meal_type_id} />
        </div>
      </div>
    );
  }
}

export default FatSecretFoodNutrientsComponent;
