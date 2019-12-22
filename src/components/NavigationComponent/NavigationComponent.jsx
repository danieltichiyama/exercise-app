import React from "react";
import { Link } from "react-router-dom";
import styles from "../NavigationComponent/NavigationComponent.module.scss";
import communityIcon from "../../imgs/community.png";
import homeIcon from "../../imgs/home.png";
import nutritionIcon from "../../imgs/nutrition.png";
import registerIcon from "../../imgs/register.png";
import userProfileIcon from "../../imgs/user_profile.png";
import exerciseIcon from "../../imgs/workout.png";

// import Routes from "../../Routes";

const NavigationComponent = props => {
  let session = localStorage.getItem("session");
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

      {session ? (
        <Link to="/user" className={styles.navButton}>
          <img src={userProfileIcon} alt="user profile button" />
        </Link>
      ) : (
        <Link to="/authorization" className={styles.navButton}>
          <img src={registerIcon} alt="register / login button" />
        </Link>
      )}
    </nav>
  );
};

export default NavigationComponent;
