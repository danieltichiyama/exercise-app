import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./RegisterComponent.module.scss";
import { actionsFilterEmails } from "../../actions";

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm_password: ""
    };
  }
  
  handleInput = event => {
    const { value, name } = event.target;
    const state = { ...this.state };
    state[name] = value;
    this.setState(state);
  };

  handleLoginClick = () => {
    return this.props.isRegistered();
  };

  handleContinueClick = async (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.password){
      alert("Please fill in all fields");
      return false;
    };

    let emailObj = { email: this.state.email };
    await this.props.dispatchFilterEmails(emailObj)
    if ((typeof this.props.filteredEmails) === "object"){
      alert("Email is already registered with us");
      return false;
    };
    
    if (!this.validateEmail(this.state.email)){
      alert("Please enter a valid email address");
      return false;
    };
    if (this.state.password !== this.state.confirm_password){
      alert("Passwords do not match.");
      return false;
    };
    if (this.state.password.length < 6){
      alert("Password must be at least 6 characters long.");
      return false;
    };
    return this.props.takingSurvey(this.state);
  };

  validateEmail = (email) => {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(email);
  }

  render() {
    return (
      <div className={styles.RegisterComponent}>
        <form onSubmit={this.handleContinueClick}> 
          <ul>
            {/* name */}
            <li className={styles.form_li}>
              <div className={styles.imgContainer}>
                <img
                  src="https://image.flaticon.com/icons/svg/74/74472.svg"
                  alt="name"
                  className={styles.login_icon_img}
                />
              </div>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInput}
                placeholder="Your name"
                className={styles.form_input}
              />
            </li>
            {/* email */}
            <li className={styles.form_li}>
              <div className={styles.imgContainer}>
                <img
                  src="https://image.flaticon.com/icons/svg/25/25236.svg"
                  alt="email"
                  className={styles.login_icon_img}
                />
              </div>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInput}
                placeholder="average.joe@fitness.com"
                className={styles.form_input}
              />
            </li>
            {/* password */}
            <li className={styles.form_li}>
              <div className={styles.imgContainer}>
                <img
                  src="https://image.flaticon.com/icons/svg/25/25239.svg"
                  alt="password"
                  className={styles.login_icon_img}
                />
              </div>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInput}
                placeholder="Password (must be 8-20 characters)"
                className={styles.form_input}
              />
            </li>
            {/* confirm password */}
            <li className={styles.form_li}>
              <div className={styles.imgContainer}>
                <img
                  src="https://image.flaticon.com/icons/svg/25/25239.svg"
                  alt="password"
                  className={styles.login_icon_img}
                />
              </div>
              <input
                type="password"
                name="confirm_password"
                value={this.state.confirm_password}
                onChange={this.handleInput}
                placeholder="Confirm your password"
                className={styles.form_input}
              />
            </li>
          </ul>

          <button onClick={() => this.handleContinueClick} className={styles.login_button}>
            Continue
          </button>
        </form>

        <div className={styles.options}>
          <div className={styles.additionalOptions}>
            <div className={styles.notAMember}>
              <p>
                Already a member?{" "}
                <span
                  className={styles.options_span}
                  onClick={this.handleLoginClick}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    filteredEmails: store.emails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFilterEmails: data => {
      return dispatch(actionsFilterEmails(data));
    }
  };
};

RegisterComponent = connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)

export default RegisterComponent;