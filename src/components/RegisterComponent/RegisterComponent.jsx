import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./RegisterComponent.module.scss";
import { actionsRegister } from "../../actions";

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      "confirm password": "",
      height: 200,
      weight: 75,
      activity_level_id: 1,
      birth_date: "1999-01-01",
      gender_id: 1,
      user_tier_id: 1,
      goal_id: 1,
      formErrors: {
        name: "",
        email: "",
        password: "",
        "confirm password": "",
        height: "",
        weight: "",
        activity_level: "",
        birth_date: ""
      }
    };
  }

  handleInput = event => {
    const { value, name } = event.target;
    const state = { ...this.state };
    state[name] = value;
    this.setState(state);
  };

  handleRegister = e => {
    e.preventDefault();

    let formData = { ...this.state };
    delete formData.formErrors;
    delete formData["confirm password"];
    this.props.dispatchRegister(formData);
    return this.props.isRegistered();
  };

  handleLoginClick = () => {
    return this.props.isRegistered();
  };

  render() {
    return (
      <div className={styles.RegisterComponent}>
        <form>
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
                name="confirm password"
                value={this.state["confirm password"]}
                onChange={this.handleInput}
                placeholder="Confirm your password"
                className={styles.form_input}
              />
            </li>
          </ul>

          <button onClick={this.handleRegister} className={styles.login_button}>
            Register
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

const mapDispatchToProps = dispatch => {
  return {
    dispatchRegister: data => {
      return dispatch(actionsRegister(data));
    }
  };
};

RegisterComponent = connect(null, mapDispatchToProps)(RegisterComponent);

export default RegisterComponent;
