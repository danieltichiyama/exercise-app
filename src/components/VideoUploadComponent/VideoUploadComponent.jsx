import React, { Component } from "react";
import { connect } from "react-redux";
import { actionVideoUpload } from "../../actions";

class VideoUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleUpload = (e) => {
    const formData = new FormData();
    formData.append('videoUpload', e.target.files[0]);
    this.props.dispatchVideoUpload(formData);
  }

  render() { 
    return ( 
      <div>
          <input
            type="file"
            name="videoUpload"
            accept="video/*"
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
    dispatchVideoUpload: data => {
      return dispatch(actionVideoUpload(data))
    }
  }
}

VideoUploadComponent = connect(mapStateToProps, mapDispatchToProps)(VideoUploadComponent);
 
export default VideoUploadComponent;