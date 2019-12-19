import React from "react";
import styles from "./MealComponent.module.scss";

const MealComponent = props => {
  return (
    <div className={styles.MealComponent}>
      <h1>Meal Component</h1>
      <h2>{props.meal}</h2>
      <ul>
        {props.foods.map(food => {
          return (
            <li key={food.description}>
              {food.description} Calories: {food.calories} Fat: {food.fat}{" "}
              Carbs: {food.carbs} Protein: {food.protein}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MealComponent;
