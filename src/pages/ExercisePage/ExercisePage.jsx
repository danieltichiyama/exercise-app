import React, { Component } from "react";
import styles from "./ExercisePage.module.scss";
import BodyPartComponent from "../../components/BodyPartComponent/BodyPartComponent";
import ExerciseListComponent from "../../components/ExerciseListComponent/ExerciseListComponent";
import { Link } from "react-router-dom";
import MenuButton from "../../imgs/menuButton.png";
import LogButton from "../../imgs/log.png";

class ExercisePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      searchTerm: ""
    };
  }

  handleMenuClick = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  handleSearchInput = e => {
    return this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className={styles.ExercisePage}>
        <div className={styles.exerciseMenu}>
          <input
            className={styles.exerciseSearchPH}
            type="text"
            placeholder="Search for an exercise..."
            value={this.state.searchTerm}
            onChange={this.handleSearchInput}
          />
          {this.state.openMenu ? null : (
            <img
              src={MenuButton}
              alt="menu"
              className={styles.menuButton}
              onClick={this.handleMenuClick}
            />
          )}
          <Link
            to="/workout"
            style={{ textDecoration: "none" }}
            className={styles.menuButton}
          >
            <img
              src={LogButton}
              alt="workout log"
              className={styles.menuButton}
            />
          </Link>
        </div>
        {this.state.openMenu ? (
          <BodyPartComponent menuClick={this.handleMenuClick} />
        ) : null}

        <ExerciseListComponent searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default ExercisePage;
