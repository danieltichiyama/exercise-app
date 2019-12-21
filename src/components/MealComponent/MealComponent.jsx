import React from "react";
import styles from "./MealComponent.module.scss";

const MealComponent = props => {
  return (
    <div className={styles.MealComponent}>
      <h3>{props.meal}</h3>
      <hr />
      <ul>
        {props.foods.length >= 1 ? (
          props.foods.map(food => {
            return (
              <li key={food.description}>
                <div className={styles.foodDesc}>{food.description}</div>
                <div className={styles.foodCal}>{food.calories}</div>
              </li>
            );
          })
        ) : (
          <div className={styles.recommendedCal}>Recommended calories: 500</div>
        )}
      </ul>
    </div>
  );
};

export default MealComponent;
