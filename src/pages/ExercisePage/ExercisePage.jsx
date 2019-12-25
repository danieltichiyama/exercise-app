import React, { Component } from "react";
import styles from "./ExercisePage.module.scss";
import BodyPartComponent from "../../components/BodyPartComponent/BodyPartComponent";
import ExerciseListComponent from "../../components/ExerciseListComponent/ExerciseListComponent";
import { Link } from "react-router-dom";
import MenuButton from "../../imgs/menuButton.png";
import ExitButton from "../../imgs/exitButton.png";

class ExercisePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false
    };
  }

  handleMenuClick = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };
  render() {
    return (
      <div className={styles.ExercisePage}>
        <div className={styles.exerciseMenu}>
          <input className={styles.exerciseSearchPH} type="text" />
          {this.state.openMenu ? (
            <img
              src={ExitButton}
              alt="exit button"
              className={styles.menuButton}
              onClick={this.handleMenuClick}
            />
          ) : (
            <img
              src={MenuButton}
              alt="menu"
              className={styles.menuButton}
              onClick={this.handleMenuClick}
            />
          )}
        </div>
        {this.state.openMenu ? (
          <BodyPartComponent menuClick={this.handleMenuClick} />
        ) : null}

        {/* <Link to="/workout" style={{ textDecoration: "none" }}>
          <p>Workout Log</p>
        </Link> */}

        <ExerciseListComponent />
      </div>
    );
  }
}

export default ExercisePage;
