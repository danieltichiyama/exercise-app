import React, { Component } from "react";
// import { connect } from "react-redux";
import styles from "../NutritionPage/NutritionPage.module.scss";
import { Link } from "react-router-dom";

class NutritionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.mealNavigation}>
        <div>
          <Link to="/nutrition/add_food">
            <button className={styles.mealButton} value="breakfast">
              <img
                src="https://image.flaticon.com/icons/svg/926/926292.svg"
                alt="breakfast"
              />
              <span className={styles.mealDescription}>Add breakfast +</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/nutrition/add_food">
            <button className={styles.mealButton} value="lunch">
              <img
                src="https://image.flaticon.com/icons/svg/926/926305.svg"
                alt="lunch"
              />
              <span className={styles.mealDescription}>Add lunch +</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/nutrition/add_food">
            <button className={styles.mealButton} value="dinner">
              <img
                src="https://image.flaticon.com/icons/svg/2243/2243651.svg"
                alt="dinner"
              />
              <span className={styles.mealDescription}>Add dinner +</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/nutrition/add_food">
            <button
              className={styles.mealButton}
              value="snack"
              onClick={this.handleMealClick}
            >
              <img
                src="https://image.flaticon.com/icons/svg/601/601933.svg"
                alt="snack"
              />
              <span className={styles.mealDescription}>Add snack +</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = store => {
//   return {};
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     // loadFoodSearch: id => {
//     //   return dispatch(loadFoodSearch)(id);
//   };
// };
// // };

// NutritionPage = connect(mapStateToProps, mapDispatchToProps)(NutritionPage);

export default NutritionPage;
