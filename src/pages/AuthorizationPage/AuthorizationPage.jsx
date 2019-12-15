import React, { Component } from "react";
import styles from "./AuthorizationPage.module.scss";
import LoginComponent from "../../components/LoginComponent";
import RegisterComponent from "../../components/RegisterComponent";
import RegisterSurveyComponent from "../../components/RegisterSurveyComponent";

class AuthorizationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
      takingSurvey: false,
      obj: {}
    };
  }

  takingSurvey = (data) => {
    return this.setState({ 
      takingSurvey: !this.state.takingSurvey,
      obj: data,
    });
  }

  isRegistered = () => {
    return this.setState({ isRegistered: !this.state.isRegistered });
  };


  render() {
    return (
      <div className={styles.AuthorizationPage}>
        {!this.state.isRegistered ? (
          !this.state.takingSurvey ? (
            <RegisterComponent 
              isRegistered={this.isRegistered}
              takingSurvey={this.takingSurvey}
            >  
            </RegisterComponent>
          ) : (<RegisterSurveyComponent 
                obj={this.state.obj}
                isRegistered={this.isRegistered}
              >   
              </RegisterSurveyComponent>)
        ) : (
          <LoginComponent isRegistered={this.isRegistered}></LoginComponent>
        )}
      </div>
    );
  }
}

export default AuthorizationPage;
