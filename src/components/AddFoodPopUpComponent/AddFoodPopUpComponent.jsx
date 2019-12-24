import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./AddFoodPopUpComponent.module.scss";
import FatSecretSearchComponent from "../FatSecretSearchComponent";

class AddFoodPopUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.foodPopUp}>
        <div className={styles.foodPopUpInner}>
          <button onClick={this.props.handleFoodPopUp}>x</button>
          <FatSecretSearchComponent />
          {/* <h1>Breakfast</h1> */}{" "}
          {/* <FoodSearchComponent meal_type_id={"1"} /> //breakfast
        // <FoodSearchComponent meal_type_id={"2"} /> //lunch
        // <FoodSearchComponent meal_type_id={"3"} /> //dinner
        // <FoodSearchComponent meal_type_id={"4"} /> //snack */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

AddFoodPopUpComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFoodPopUpComponent);

export default AddFoodPopUpComponent;
