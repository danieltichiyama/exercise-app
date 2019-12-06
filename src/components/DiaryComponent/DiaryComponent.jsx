import React, { Component } from "react";
import styles from "./DiaryComponent.module.scss";

class DiaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className={styles.DiaryComponent}>Diary Component</div>;
  }
}

export default DiaryComponent;
