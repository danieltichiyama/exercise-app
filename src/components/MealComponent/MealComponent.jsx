import React from "react";
import styles from "./MealComponent.module.scss";

const MealComponent = props => {
  console.log("MealComponent", props.meal, props);

  return (
    <div className={styles.MealComponent}>
      <h1>Meal Component</h1>
      <h2>{props.foods}</h2>
    </div>
  );
};

export default MealComponent;
