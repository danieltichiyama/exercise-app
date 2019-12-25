import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./AddFoodPopUpComponent.module.scss";
import FatSecretSearchComponent from "../FatSecretSearchComponent";

class AddFoodPopUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // meal_type_id: id,
      showPopUp: false
    };
  }

  handleFoodPopUp = e => {
    // let { id } = e.target;

    this.setState({
      // meal_type_id: id,
      showPopUp: !this.state.showPopUp
    });
  };

  render() {
    return (
      <div className={styles.foodPopUp}>
        <div className={styles.foodPopUpInner}>
          <button onClick={this.props.handleFoodPopUp}>x</button>
          <FatSecretSearchComponent meal_type_id={this.props.meal_type_id} />
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
