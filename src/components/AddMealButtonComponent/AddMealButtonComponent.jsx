import React, { Component } from "react";
import styles from "../AddMealButtonComponent/AddMealButtonComponent.module.scss";
import AddFoodPopUpComponent from "../AddFoodPopUpComponent";

import addBreakfast from "../../icons/addBreakfast.png";
import addLunch from "../../icons/addLunch.png";
import addDinner from "../../icons/addDinner.png";
import addSnack from "../../icons/addSnack.png";

class AddMealButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false,
      meal_type: 0
    };
  }

  handleFoodPopUp = e => {
    console.log("e.target", e.target);
    let { id } = e.target;

    console.log("id:", id);
    // let { meal_type } = e.target.dataset;

    this.setState({
      meal_type: id,
      showPopUp: !this.state.showPopUp
    });
  };

  render() {
    return (
      <div className={styles.mealNavigation}>
        {this.state.showPopUp ? (
          <AddFoodPopUpComponent meal_type={this.state.meal_type} />
        ) : null}

        <div>
          <button
            className={styles.mealButton}
            id="1"
            onClick={this.handleFoodPopUp}
          >
            <img src={addBreakfast} id="1" alt="breakfast" />
          </button>
        </div>

        <div>
          <button
            className={styles.mealButton}
            value="2"
            onClick={this.handleFoodPopUp}
          >
            <img src={addLunch} alt="lunch" />
          </button>
        </div>

        <div>
          <button
            className={styles.mealButton}
            value="3"
            onClick={this.handleFoodPopUp}
          >
            <img src={addDinner} alt="dinner" />
          </button>
        </div>

        <div>
          <button
            className={styles.mealButton}
            value="4"
            onClick={this.handleFoodPopUp}
          >
            <img src={addSnack} alt="snack" />
          </button>
        </div>
      </div>
    );
  }
}

export default AddMealButtonComponent;
