import React from "react";
import { Link } from "react-router-dom";
import styles from "../NavigationComponent/NavigationComponent.module.scss";
// import Routes from "../../Routes";

const NavigationComponent = props => {
  let session = localStorage.getItem("session");
  return (
    <nav className={styles.navigation}>
      {/* home */}
      <Link to="/home" className={styles.navButton}>
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

      {session ? (
        <Link to="/user" className={styles.navButton}>
          <img
            src="https://image.flaticon.com/icons/svg/222/222299.svg"
            alt="user profile button"
          />
        </Link>
      ) : (
        <Link to="/authorization" className={styles.navButton}>
          <img
            src="https://image.flaticon.com/icons/svg/983/983886.svg"
            alt="register / login button"
          />
        </Link>
      )}
    </nav>
  );
};

export default NavigationComponent;
