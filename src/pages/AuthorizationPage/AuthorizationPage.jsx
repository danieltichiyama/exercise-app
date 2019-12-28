import React, { Component } from "react";
import styles from "./AuthorizationPage.module.scss";
import LoginComponent from "../../components/LoginComponent";
import RegisterComponent from "../../components/RegisterComponent";

class AuthorizationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: true,
      obj: {}
    };
  }

  takingSurvey = data => {
    return this.setState({
      takingSurvey: !this.state.takingSurvey,
      obj: data
    });
  };

  isRegistered = () => {
    return this.setState({ isRegistered: !this.state.isRegistered });
  };

  render() {
    return (
      <div className={styles.AuthorizationPage}>
        {!this.state.isRegistered ? (
          <RegisterComponent
            isRegistered={this.isRegistered}
          ></RegisterComponent>
        ) : (
          <LoginComponent
            isRegistered={this.isRegistered}
            history={this.props.history}
          ></LoginComponent>
        )}
      </div>
    );
  }
}

export default AuthorizationPage;
