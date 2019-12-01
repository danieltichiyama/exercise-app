import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsToggle } from "../../actions";
import styles from "../NavigationComponent/NavigationComponent.module.css";

class NavigationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Home
  handleHomeClick = () => {
    this.props.toggle("home");
  };

  // Food
  handleFoodClick = () => {
    this.props.toggle("food");
  };

  // Fitness
  handleFitnessClick = () => {
    this.props.toggle("fitness");
  };

  // Community
  handleCommunityClick = () => {
    this.props.toggle("community");
  };

  // Profile
  handleProfileClick = () => {
    this.props.toggle("profile");
  };

  render() {
    return (
      <nav className={styles.navigation}>
        {/* home */}
        <img
          className={styles.navButton}
          src="https://image.flaticon.com/icons/svg/846/846449.svg"
          alt="home button"
          onClick={this.handleHomeClick}
        />

        {/* food */}
        <img
          className={styles.navButton}
          src="https://image.flaticon.com/icons/svg/1536/1536211.svg"
          alt="food button"
          onClick={this.handleFoodClick}
        />

        {/* fitness */}
        <img
          className={styles.navButton}
          src="https://image.flaticon.com/icons/svg/1025/1025929.svg"
          alt="fitness button"
          onClick={this.handleFitnessClick}
        />

        {/* community */}
        <img
          className={styles.navButton}
          src="https://image.flaticon.com/icons/svg/1159/1159603.svg"
          alt="community button"
          onClick={this.handleCommunityClick}
        />

        {/* profile */}
        <img
          className={styles.navButton}
          src="https://image.flaticon.com/icons/svg/222/222299.svg"
          alt="profile button"
          onClick={this.handleProfileClick}
        />

        {/* register */}
        <img
          className={styles.navButton}
          src="https://image.flaticon.com/icons/svg/983/983886.svg"
          alt="register button"
          onClick={this.handleRegisterClick}
        />

        {/* login */}
        <img
          className={styles.navButton}
          src="https://image.flaticon.com/icons/svg/1828/1828391.svg"
          alt="login button"
          onClick={this.handleRegisterClick}
        />
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
