import React, { Component } from "react";
import styles from "../AddMealButtonComponent/AddMealButtonComponent.module.scss";
import AddFoodPopUpComponent from "../AddFoodPopUpComponent";

import addBreakfast from "../../imgs/addBreakfast.png";
import addLunch from "../../imgs/addLunch.png";
import addDinner from "../../imgs/addDinner.png";
import addSnack from "../../imgs/addSnack.png";

class AddMealButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false,
      meal_type_id: 0
    };
  }

  handleFoodPopUp = e => {
    // console.log("e.target: ", e.target);
    let { id } = e.target;

    // console.log("id: ", id);
    // let { meal_type } = e.target.dataset;

    this.setState({
      meal_type_id: id,
      showPopUp: !this.state.showPopUp
    });
  };

  render() {
    return (
      <div className={styles.mealNavigation}>
        {this.state.showPopUp ? (
          <AddFoodPopUpComponent meal_type_id={this.state.meal_type_id} />
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
            id="2"
            onClick={this.handleFoodPopUp}
          >
            <img src={addLunch} id="2" alt="lunch" />
          </button>
        </div>

        <div>
          <button
            className={styles.mealButton}
            id="3"
            onClick={this.handleFoodPopUp}
          >
            <img src={addDinner} id="3" alt="dinner" />
          </button>
        </div>

        <div>
          <button
            className={styles.mealButton}
            id="4"
            onClick={this.handleFoodPopUp}
          >
            <img src={addSnack} id="4" alt="snack" />
          </button>
        </div>
      </div>
    );
  }
}

export default AddMealButtonComponent;
