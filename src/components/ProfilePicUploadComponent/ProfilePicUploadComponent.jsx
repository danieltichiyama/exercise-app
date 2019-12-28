import React, { PureComponent } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { connect } from "react-redux";
import { actionCheckProfilePic, actionImageUpload } from "../../actions";
import styles from "./ProfilePicUploadComponent.module.scss";
import placeHolder from "../../imgs/placeholder.png";

class ProfilePicUploadComponent extends PureComponent {
  state = {
    src: null,
    crop: {
      unit: "%",
      width: 40,
      aspect: 1 / 1
    },
    imageName: ''
  };

  componentDidMount = () => {
    this.props.dispatchCheckProfilePic(JSON.parse(localStorage.getItem("session")).id);
  }

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      this.props.openModal();
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
    canvas.width = 100;
    canvas.height = 100;
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
      canvas.width,
      canvas.height
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
    await formData.append('imageUpload', file);
    this.props.closeModal();
    this.props.getImg(formData);
    this.props.dispatchImageUpload(formData);
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;


    return (
      <div className={styles.ProfilePicUploadComponent}>
        <label htmlFor="srcImg">
          {/* <img className={styles.placeHolder} src={this.props.hasProfilePic ? (placeHolder) : (this.props.profilePic.url)} alt=""/> */}
          <img src="https://fitworks-images.s3.us-west-2.amazonaws.com/burger-1576491976667-1577523344982.jpg" alt=""/>

        </label>
          <input className={styles.srcImg} id="srcImg" name="srcImg" type="file" accept="image/*" onChange={this.onSelectFile} />
        <div className={styles.Modal} style={{display: this.props.show ? "block" : "none"}}>
        {this.props.show ? (
            croppedImageUrl && (
              <form action="post" onSubmit={this.handleSubmit}>
                <img alt="Crop" className={styles.croppedImg} name="imageUpload" style={{ maxWidth: "100%" }} src={croppedImageUrl} />
              <input className={styles.backButton} type="submit"/>
              <button className={styles.backButton} onClick={this.props.closeModal} onMouseDown={() => {document.querySelector("#srcImg").value = ""}}>Back</button>
            </form> 
          )) : null} 
          {this.props.show ? (
            src && (
              <ReactCrop
                className={styles.srcImg}
                src={src}
                crop={crop}
                ruleOfThirds
                onImageLoaded={this.onImageLoaded}
                onComplete={this.onCropComplete}
                onChange={this.onCropChange}
              /> 
            )
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    profilePic: store.profilePic,
    hasProfilePic: store.hasProfilePic
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchCheckProfilePic: (id) => {
      return dispatch(actionCheckProfilePic(id))
    },
    dispatchImageUpload: (data) => {
      return dispatch(actionImageUpload(data))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicUploadComponent);