import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../NavigationComponent/NavigationComponent.module.scss";
import communityIcon from "../../navIcons/community.png";
import homeIcon from "../../navIcons/home.png";
import nutritionIcon from "../../navIcons/nutrition.png";
import registerIcon from "../../navIcons/register.png";
import userProfileIcon from "../../navIcons/user_profile.png";
import exerciseIcon from "../../navIcons/workout.png";

// import Routes from "../../Routes";

class NavigationComponent extends Component {
  render() {
    return (
      <nav className={styles.navigation}>
        {/* home */}
        <Link to="/home" className={styles.navButton}>
          <img src={homeIcon} alt="home button" />
        </Link>

        {/* nutrition */}
        <Link to="/nutrition" className={styles.navButton}>
          <img src={nutritionIcon} alt="nutrition button" />
        </Link>

        {/* exercise */}
        <Link to="/exercise" className={styles.navButton}>
          <img src={exerciseIcon} alt="exercise button" />
        </Link>

        {/* community */}
        <Link to="/community" className={styles.navButton}>
          <img src={communityIcon} alt="community button" />
        </Link>

        {/* user profile */}
        <Link to="/user" className={styles.navButton}>
          <img src={userProfileIcon} alt="user profile button" />
        </Link>

        {/* authorization */}
        <Link to="/authorization" className={styles.navButton}>
          <img src={registerIcon} alt="register / login button" />
        </Link>
      </nav>
    );
  }
}

export default NavigationComponent;
