import React, { Component } from "react";
import styles from "./ExercisePage.module.scss";
import BodyPartComponent from "../../components/BodyPartComponent/BodyPartComponent";
import ExerciseListComponent from "../../components/ExerciseListComponent/ExerciseListComponent";
import { Link } from "react-router-dom";

class ExercisePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.ExercisePage}>
        <input className={styles.exerciseSearchPH} type="text" />
        <Link to="/workout" style={{ textDecoration: "none" }}>
          <h2>Workout Log</h2>
        </Link>

        <BodyPartComponent />
        <ExerciseListComponent />
      </div>
    );
  }
}

export default ExercisePage;
