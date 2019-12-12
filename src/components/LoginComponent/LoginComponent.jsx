import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from "./LoginComponent.module.scss";
import { actionsLoginSubmit } from "../../actions";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false
    };
  }

  handleInput = event => {
    const { value, name } = event.target;
    const state = { ...this.state };
    state[name] = value;
    this.setState(state);
  };

  handleLoginSubmit = e => {
    e.preventDefault();

    let { email } = this.state;

    if (!email) {
      return this.setState({ error: true });
    } else if (email.length < 3) {
      return this.setState({ error: true });
    } else if (!email.includes("@")) {
      return this.setState({ error: true });
    } else {
      return this.props.dispatchLoginSubmit(this.state);
    }
  };

  handleRegisterClick = () => {
    return this.props.isRegistered();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.registeredUserEmail !== this.props.registeredUserEmail) {
      return this.setState({ email: this.props.registeredUserEmail });
    }
  }

  render() {
    if (this.props.isLoggedIn === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className={styles.LoginComponent}>
        <form>
          <ul>
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
                placeholder="Your email"
                className={styles.form_input}
              />
            </li>
            {this.state.error ? (
              <li className={styles.error}>* user not found</li>
            ) : null}
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
                placeholder="Your password"
                className={styles.form_input}
              />
            </li>
          </ul>

          <button
            onClick={this.handleLoginSubmit}
            className={styles.login_button}
          >
            Login
          </button>
        </form>

        <div className={styles.options}>
          <div className={styles.additionalOptions}>
            <div className={styles.notAMember}>
              <p>
                Not a member?{" "}
                <span
                  className={styles.options_span}
                  onClick={this.handleRegisterClick}
                >
                  Sign up
                </span>
              </p>
            </div>
            <div className={styles.notAMember}>
              <p>
                Forgot{" "}
                <span
                  className={styles.options_span}
                  onClick={this.handleRegisterClick}
                >
                  Password
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
    registeredUserEmail: store.registeredUserEmail,
    isLoggedIn: store.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoginSubmit: data => {
      return dispatch(actionsLoginSubmit(data));
    }
  };
};

LoginComponent = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default LoginComponent;
