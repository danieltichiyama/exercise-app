import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../AddFoodButtonComponent/AddFoodButtonComponent.module.scss";
import { ADD_FOOD } from "../../actions";

class AddFoodButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAddClick = () => {
    this.props.addFood(this.state);
  };

  render() {
    return (
      <div className={styles.addFoodButton}>
        <p className={styles.description}>ADD TO DIARY</p>
        <img
          className="addFoodButton"
          src="https://image.flaticon.com/icons/svg/1237/1237946.svg"
          alt="add button"
          onClick={this.handleAddClick}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    // let data = Object.assign({}, state.???)

    addFood: state => {
      return dispatch(actionsAddProduct(data));
    }
  };
};

AddFoodButtonComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFoodButtonComponent);

export default AddFoodButtonComponent;
