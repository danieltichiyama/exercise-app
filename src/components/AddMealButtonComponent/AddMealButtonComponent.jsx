import React from "react";
import { Link } from "react-router-dom";
import styles from "../AddMealButtonComponent/AddMealButtonComponent.module.scss";

import addBreakfast from "../../imgs/addBreakfast.png";
import addLunch from "../../imgs/addLunch.png";
import addDinner from "../../imgs/addDinner.png";
import addSnack from "../../imgs/addSnack.png";

const AddMealButtonComponent = props => {
  return (
    <div className={styles.mealNavigation}>
      <div>
        <Link to="/nutrition/add_breakfast">
          <button className={styles.mealButton}>
            <img src={addBreakfast} alt="breakfast" />
          </button>
        </Link>
      </div>
      <div>
        <Link to="/nutrition/add_lunch">
          <button className={styles.mealButton}>
            <img src={addLunch} alt="lunch" />
          </button>
        </Link>
      </div>
      <div>
        <Link to="/nutrition/add_dinner">
          <button className={styles.mealButton} value="3">
            <img src={addDinner} alt="dinner" />
          </button>
        </Link>
      </div>
      <div>
        <Link to="/nutrition/add_snack">
          <button className={styles.mealButton} value="4">
            <img src={addSnack} alt="snack" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddMealButtonComponent;
