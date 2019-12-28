import React, { Component } from "react";
import { connect } from "react-redux";
import { actionImageUpload } from "../../actions";
import cameraIcon from "../../imgs/camera.png";
import styles from "./ImageUploadComponent.module.scss";

class ImageUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleUpload = e => {
    const formData = new FormData();
    formData.append("imageUpload", e.target.files[0]);
    this.props.dispatchImageUpload(formData);
  };

  render() {
    return (
      <div className={styles.ImageUload}>
        <label htmlFor="imageUpload">
          <img src={cameraIcon} alt="camera button" />
        </label>
        <input
          type="file"
          name="imageUpload"
          id="imageUpload"
          accept="image/*"
          onChange={this.handleUpload}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    imgData: store
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchImageUpload: data => {
      return dispatch(actionImageUpload(data));
    }
  };
};

ImageUploadComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageUploadComponent);

export default ImageUploadComponent;
