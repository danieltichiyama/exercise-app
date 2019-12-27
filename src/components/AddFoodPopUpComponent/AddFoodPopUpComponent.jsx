import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./AddFoodPopUpComponent.module.scss";
import FatSecretSearchComponent from "../FatSecretSearchComponent";
import exitButton from "../../imgs/exitButton.png";
// import FoodVisionComponent from "../../components/FoodVisionComponent";

class AddFoodPopUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleFoodPopUp = e => {
    this.setState({
      showPopUp: !this.state.showPopUp
    });
  };

  // handleFoodVisionPopUp = e => {
  //   this.setState({
  //     showVisionPopUp: !this.state.showVisionPopUp
  //   });
  // };

  render() {
    return (
      <div className={styles.foodPopUp}>
        {/* onClick={this.props.handleFoodPopUp}> SAVE FOR LATER */}

        {/* {this.state.showPopUp ? (
          <FoodVisionComponent
            handleFoodVisionPopUp={this.handleFoodVisionPopUp}
          />
        ) : null} */}

        <div className={styles.foodPopUpInner}>
          <button
            className={styles.exitButton}
            onClick={this.props.handleFoodPopUp}
          >
            <img src={exitButton} alt="exit button" />
          </button>
          <FatSecretSearchComponent
            meal_type_id={this.props.meal_type_id}
            // handleFoodVisionPopUp={this.handleFoodVisionPopUp}
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
  return {};
};

AddFoodPopUpComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFoodPopUpComponent);

export default AddFoodPopUpComponent;
