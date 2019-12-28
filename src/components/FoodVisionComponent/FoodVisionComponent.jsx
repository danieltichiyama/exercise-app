import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsFoodVision } from "../../actions";
import styles from "./FoodVisionComponent.module.scss";
import cameraIcon from "../../imgs/camera.png";

class FoodVisionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleUpload = e => {
    const formData = new FormData();
    formData.append("foodImage", e.target.files[0]);
    this.props.dispatchFoodVision(formData);
    this.props.handleLoading();
  };

  render() {
    return (
      <div className={styles.foodVisionDiv}>
        <label htmlFor="foodImage">
          <img src={cameraIcon} alt="camera button" />
        </label>
        <input
          type="file"
          name="foodImage"
          id="foodImage"
          accept="image/*"
          onChange={this.handleUpload}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    imgData: store.food_labels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchFoodVision: data => {
      return dispatch(actionsFoodVision(data));
    }
  };
};

FoodVisionComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodVisionComponent);

export default FoodVisionComponent;
