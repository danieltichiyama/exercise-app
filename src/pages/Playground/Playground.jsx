import React, { Component } from "react";
import styles from "./Playground.module.scss";
import ProfilePicUploadComponent from "../../components/ProfilePicUploadComponent";
import ImageUploadComponent from "../../components/ImageUploadComponent/ImageUploadComponent";

class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.Playground}>
        <p>Pushing and pulling encouraged. Have fun.</p>
        <ProfilePicUploadComponent/>
        <ImageUploadComponent/>
      </div>
    );
  }
}

export default Playground;
