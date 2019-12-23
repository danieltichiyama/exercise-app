import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsFoodVision } from "../../actions";

class FoodVisionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleUpload = (e) => {
    const formData = new FormData();
    formData.append('foodImage', e.target.files[0]);
    this.props.dispatchFoodVision(formData);
  }

  render() { 
    return ( 
      <div>
          <input
            type="file"
            name="foodImage"
            accept="image/*"
            // className={styles.upload}
            onChange={this.handleUpload}
          />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    imgData: store.food_labels,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFoodVision: data => {
      return dispatch(actionsFoodVision(data))
    }
  }
}

FoodVisionComponent = connect(mapStateToProps, mapDispatchToProps)(FoodVisionComponent);
 
export default FoodVisionComponent;