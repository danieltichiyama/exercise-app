import React, { Component } from "react";
import { connect } from "react-redux";
import { actionFoodVision } from "../../actions";
import LabelComponent from "../LabelComponent";

class ImageUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleUpload = (e) => {
    const formData = new FormData();
    formData.append('foodImage', e.target.files[0]);
    this.props.dispatchFoodVision(formData)
    .then(
      console.log(this.props.imgData)
    )
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
          {this.props.imgData.length !== 0 ? (
            this.props.imgData.map(imgData => {
              return (
                <LabelComponent
                  key={imgData.description}
                  label={imgData.description}
                />
              )
            })
          ) : (
            ''
          )}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    imgData: store.food_labels
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFoodVision: data => {
      console.log(data);
      return dispatch(actionFoodVision(data))
    }
  }
}

ImageUploadComponent = connect(mapStateToProps, mapDispatchToProps)(ImageUploadComponent);
 
export default ImageUploadComponent;