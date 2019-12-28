import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./AddFoodPopUpComponent.module.scss";
import FatSecretSearchComponent from "../FatSecretSearchComponent";
import exitButton from "../../imgs/exitButton.png";
import { actionsClearFoodSearch } from "../../actions";

class AddFoodPopUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: ["Breakfast", "Lunch", "Dinner", "Snack"],
      meal: ""
    };
  }

  componentDidMount = () => {
    this.props.dispatchClearFoodSearch();
    let { meal_type_id } = this.props;

    let currentMeal = this.state.meals[parseInt(meal_type_id) - 1];

    return this.setState({ meal: currentMeal });
  };

  render() {
    return (
      <div className={styles.foodPopUp}>
        <div className={styles.foodPopUpInner}>
          <div className={styles.header}>
            <h1>{this.state.meal}</h1>
            <button
              className={styles.exitButton}
              onClick={this.props.handleFoodPopUp}
            >
              <img src={exitButton} alt="exit button" className={styles.exit} />
            </button>
          </div>

          <FatSecretSearchComponent
            meal_type_id={this.props.meal_type_id}
            handleFoodPopUp={this.props.handleFoodPopUp}
          />
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
    dispatchClearFoodSearch: () => {
      return dispatch(actionsClearFoodSearch());
    }
  };
};

AddFoodPopUpComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFoodPopUpComponent);

export default AddFoodPopUpComponent;
