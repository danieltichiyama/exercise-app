import React, { Component } from "react";
import { connect } from "react-redux";
import { actionImageUpload } from "../../actions";

class ImageUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleUpload = (e) => {
    console.log(e.target.files)
    const formData = new FormData();
    formData.append('imageUpload', e.target.files[0]);
    this.props.dispatchImageUpload(formData);
  }

  render() { 
    return ( 
      <div>
          <input
            type="file"
            name="imageUpload"
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchImageUpload: data => {
      return dispatch(actionImageUpload(data))
    }
  }
}

ImageUploadComponent = connect(mapStateToProps, mapDispatchToProps)(ImageUploadComponent);
 
export default ImageUploadComponent;