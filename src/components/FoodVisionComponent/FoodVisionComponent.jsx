import React, { Component } from "react";
import { connect } from "react-redux";
import { actionFoodVision } from "../../actions";
import LabelComponent from "../LabelComponent";
import FoodComponent from "../FoodComponent";

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
          {(this.props.imgData.length !== 0) ? (
            this.props.imgData.map(imgData => {
              return (
                <LabelComponent
                  key={imgData.description}
                  label={imgData.description}
                />
              )
            })
          ) : ('')}
          {(this.props.imgData.length === 0 && this.props.searchData[0]) ? (
            this.props.searchData.map(food => {
              return (
                <FoodComponent
                  fdcId={food.fdcId}
                  key={food.fdcId}
                  description={food.description}
                />
              )
            })
          ) : (
            'CRAP'
          )}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    imgData: store.food_labels,
    searchData: store.foods
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFoodVision: data => {
      return dispatch(actionFoodVision(data))
    }
  }
}

FoodVisionComponent = connect(mapStateToProps, mapDispatchToProps)(FoodVisionComponent);
 
export default FoodVisionComponent;