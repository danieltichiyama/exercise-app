import React, { Component } from "react";
import styles from "./Playground.module.scss";
import ProfilePicUploadComponent from "../../components/ProfilePicUploadComponent";

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
      </div>
    );
  }
}

export default Playground;
