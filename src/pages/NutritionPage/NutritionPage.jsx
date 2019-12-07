import React, { Component } from "react";
// import { connect } from "react-redux";
// import { actionsToggle } from "../../actions";
import styles from "../NutritionPage/NutritionPage.module.scss";
// import FoodSearchComponent from "../../components/FoodSearchComponent";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "../../Routes";

class NutritionPage extends Component {
  constructor(props) {
    super(props);
    // this.state = { isEmptyState: true };
    this.state = {};
  }

  // all clicks will lead to same meals toggle page that has search bar
  // handleMealClick = () => {
  //   // this.setState({...this.state, isEmptyState: false, is})
  //   // this.props.toggle("meal");
  // };

  render() {
    return (
      <div className={styles.mealNavigation}>
        <Routes></Routes>
        <div>
          <button
            className={styles.mealButton}
            value="breakfast"
            // onClick={this.handleMealClick}
          >
            <Link to="/nutrition/add_food">
              <img
                src="https://image.flaticon.com/icons/svg/926/926292.svg"
                alt="breakfast"
              />
              <span className={styles.mealDescription}>Add breakfast +</span>
            </Link>
          </button>
        </div>
        <div>
          <button
            className={styles.mealButton}
            value="lunch"
            onClick={this.handleMealClick}
          >
            <img
              src="https://image.flaticon.com/icons/svg/926/926305.svg"
              alt="lunch"
            />
            <span className={styles.mealDescription}>Add lunch +</span>
          </button>
        </div>
        <div>
          <button
            className={styles.mealButton}
            value="dinner"
            onClick={this.handleMealClick}
          >
            <img
              src="https://image.flaticon.com/icons/svg/2243/2243651.svg"
              alt="dinner"
            />
            <span className={styles.mealDescription}>Add dinner +</span>
          </button>
        </div>
        <div>
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
        </div>
      </div>
      // </Router>
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
