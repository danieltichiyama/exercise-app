import React from "react";
import styles from "./MealComponent.module.scss";
import DeleteFoodButtonComponent from "../DeleteFoodButtonComponent/DeleteFoodButtonComponent";

const MealComponent = props => {
  return (
    <div className={styles.MealComponent}>
      <div className={styles.mealHeader}>
        <h3>{props.meal}</h3>
        <h3>
          {props.foods.reduce((total, food) => {
            return total + food.calories;
          }, 0)}
        </h3>
      </div>
      <hr />
      <ul>
        {props.foods.length >= 1 ? (
          props.foods.map(food => {
            return (
              <li key={food.description}>
                <div className={styles.foodDesc}>{food.description}</div>
                <div className={styles.foodCal}>{food.calories}</div>
                <DeleteFoodButtonComponent id={food.id} />
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
