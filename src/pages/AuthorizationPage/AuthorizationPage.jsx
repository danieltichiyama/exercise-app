import React, { Component } from "react";
import styles from "./AuthorizationPage.module.scss";

class AuthorizationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className={styles.authorizationPage}>Hello World!</div>;
  }
}

export default AuthorizationPage;
