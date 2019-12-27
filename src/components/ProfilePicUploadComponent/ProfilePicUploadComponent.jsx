import React, { PureComponent } from "react";
import ReactCrop from "react-image-crop";
import { connect } from "react-redux";
import { actionUploadProfilePic, actionImageUpload } from "../../actions"
import "react-image-crop/dist/ReactCrop.css";

class ProfilePicUploadComponent extends PureComponent {
  state = {
    user_id: JSON.parse(localStorage.getItem("session")).id,
    src: null,
    crop: {
      unit: "%",
      width: 40,
      aspect: 1 / 1
    },
    imageName: ''
  };

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      this.setState({ imageName: e.target.files[0].name });
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        "newFile.jpeg"
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = 170;
    canvas.height = 170;
    const ctx = canvas.getContext("2d");

    ctx.save();
    ctx.beginPath();
    ctx.arc(
      Math.floor(canvas.width / 2),
      Math.floor(canvas.height / 2),
      canvas.width / 2 - 1,
      0,
      Math.PI * 2,
      true
    );
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      canvas.width * scaleX,
      canvas.height * scaleY
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, "image/jpeg");
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const file = new File([this.fileUrl], this.state.imageName, {type: "image/jpeg"});
    const formData = new FormData();
    formData.append('imageUpload', file);
    await this.props.dispatchImageUpload(formData, this.state.user_id);
    this.props.dispatchUploadProfilePic(this.props.imgData, this.state.user_id);
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;

    return (
      <div className="ProfilePicUploadComponent">
        <div>
          <input type="file" accept="image/*" onChange={this.onSelectFile} />
        </div>
        {src && (
          <ReactCrop
          src={src}
          crop={crop}
          ruleOfThirds
          onImageLoaded={this.onImageLoaded}
          onComplete={this.onCropComplete}
          onChange={this.onCropChange}
          />
        )}
        {croppedImageUrl && (
        <form action="post" onSubmit={this.handleSubmit}>
          <img alt="Crop" name="imageUpload" style={{ maxWidth: "100%" }} src={croppedImageUrl} />
          <input type="submit"/>
        </form> 
        )}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    imgData: store.images
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchImageUpload: data => {
      return dispatch(actionImageUpload(data));
    },
    dispatchUploadProfilePic: (data, user_id) => {
      return dispatch(actionUploadProfilePic(data, user_id));
    }
  }
}

ProfilePicUploadComponent = connect(mapStateToProps, mapDispatchToProps)(ProfilePicUploadComponent);

export default ProfilePicUploadComponent;