import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsToggle } from "../../actions";
import styles from "../NutritionPage/NutritionPage.module.scss";

class NutritionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // all clicks will lead to same meals toggle page that has search bar
  handleMealClick = () => {
    this.props.toggle("meal");
  };

  render() {
    return (
      <div className={styles.mealNavigation}>
        <div>
          <button className={styles.mealButton} value="breakfast">
            <img
              // className="mealImage"
              src="https://image.flaticon.com/icons/svg/926/926292.svg"
              alt="breakfast"
            />
            <span className={styles.mealDescription}>Add breakfast +</span>
            {/* Add breakfast + */}
          </button>
        </div>
        <div>
          <button className={styles.mealButton} value="lunch">
            <img
              src="https://image.flaticon.com/icons/svg/926/926305.svg"
              alt="lunch"
            />
            <span className={styles.mealDescription}>Add lunch +</span>
          </button>
        </div>
        <div>
          <button className={styles.mealButton} value="dinner">
            <img
              src="https://image.flaticon.com/icons/svg/2243/2243651.svg"
              alt="dinner"
            />
            <span className={styles.mealDescription}>Add dinner +</span>
          </button>
        </div>
        <div>
          <button className={styles.mealButton} value="snack">
            <img
              src="https://image.flaticon.com/icons/svg/601/601933.svg"
              alt="snack"
            />
            <span className={styles.mealDescription}>Add snack +</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: link => {
      return dispatch(actionsToggle(link));
    }
  };
};

NutritionPage = connect(mapStateToProps, mapDispatchToProps)(NutritionPage);

export default NutritionPage;
