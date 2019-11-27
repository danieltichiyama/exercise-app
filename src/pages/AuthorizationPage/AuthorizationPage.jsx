import React, { Component } from "react";
import styles from "./AuthorizationPage.module.scss";
import LoginComponent from "../../components/LoginComponent";

class AuthorizationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.authorizationPage}>
        <LoginComponent></LoginComponent>
      </div>
    );
  }
}

export default AuthorizationPage;
