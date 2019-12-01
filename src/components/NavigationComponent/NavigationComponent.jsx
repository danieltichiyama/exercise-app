import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionsToggle } from "../../actions";
import styles from "../NavigationComponent/NavigationComponent.module.scss";

class NavigationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className={styles.navigation}>
        {/* home */}
        <Link to="/" className={styles.navButton}>
          <img
            src="https://image.flaticon.com/icons/svg/846/846449.svg"
            alt="home button"
          />
        </Link>

        {/* nutrition */}
        <Link to="/nutrition" className={styles.navButton}>
          <img
            src="https://image.flaticon.com/icons/svg/1536/1536211.svg"
            alt="nutrition button"
          />
        </Link>

        {/* exercise */}
        <Link to="/exercise" className={styles.navButton}>
          <img
            src="https://image.flaticon.com/icons/svg/1025/1025929.svg"
            alt="exercise button"
          />
        </Link>

        {/* community */}
        <Link to="/community" className={styles.navButton}>
          <img
            src="https://image.flaticon.com/icons/svg/1159/1159603.svg"
            alt="community button"
          />
        </Link>

        {/* user profile */}
        <Link to="/user" className={styles.navButton}>
          <img
            src="https://image.flaticon.com/icons/svg/222/222299.svg"
            alt="user profile button"
          />
        </Link>

        {/* authorization */}
        <Link to="/authorization" className={styles.navButton}>
          <img
            src="https://image.flaticon.com/icons/svg/983/983886.svg"
            alt="register / login button"
          />
        </Link>
      </nav>
    );
  }
}

const mapStateToProps = stores => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: link => {
      return dispatch(actionsToggle(link));
    }
  };
};

NavigationComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationComponent);

export default NavigationComponent;
