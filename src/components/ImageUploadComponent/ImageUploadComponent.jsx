import React, { Component } from "react";
import { connect } from "react-redux";
import { actionFoodVision } from "../../actions";

class ImageUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleUpload = (e) => {
    const formData = new FormData();
    formData.append('foodImage', e.target.files[0]);
    this.props.dispatchFoodVision(formData);
    // console.log(formData, e.target.files[0]);
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
    imgData: store
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFoodVision: data => {
      return dispatch(actionFoodVision(data))
    }
  }
}

ImageUploadComponent = connect(mapStateToProps, mapDispatchToProps)(ImageUploadComponent);
 
export default ImageUploadComponent;