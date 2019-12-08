import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../AddMealButtonComponent/AddMealButtonComponent.module.scss";

class AddMealButtonComponent extends Component {
  render() {
    return (
      <div className={styles.mealNavigation}>
        <div>
          <Link to="/nutrition/add_breakfast">
            <button className={styles.mealButton} value="breakfast">
              <img
                src="https://image.flaticon.com/icons/svg/926/926292.svg"
                alt="breakfast"
              />
              <span className={styles.mealDescription}>Breakfast +</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/nutrition/add_lunch">
            <button className={styles.mealButton} value="lunch">
              <img
                src="https://image.flaticon.com/icons/svg/926/926305.svg"
                alt="lunch"
              />
              <span className={styles.mealDescription}>Lunch +</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/nutrition/add_dinner">
            <button className={styles.mealButton} value="dinner">
              <img
                src="https://image.flaticon.com/icons/svg/2243/2243651.svg"
                alt="dinner"
              />
              <span className={styles.mealDescription}>Dinner +</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/nutrition/add_snack">
            <button className={styles.mealButton} value="snack">
              <img
                src="https://image.flaticon.com/icons/svg/601/601933.svg"
                alt="snack"
              />
              <span className={styles.mealDescription}>Snack +</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AddMealButtonComponent;