import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../AddMealButtonComponent/AddMealButtonComponent.module.scss";

import addBreakfast from "../../icons/addBreakfast.png";
import addLunch from "../../icons/addLunch.png";
import addDinner from "../../icons/addDinner.png";
import addSnack from "../../icons/addSnack.png";

class AddMealButtonComponent extends Component {
  render() {
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
  }
}

export default AddMealButtonComponent;
