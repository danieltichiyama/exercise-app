import React, { Component } from "react";
import styles from "./ExercisePage.module.scss"
import BodyPartComponent from "../../components/BodyPartComponent/BodyPartComponent";
import ExerciseListComponent from "../../components/ExerciseListComponent/ExerciseListComponent";
import { Link } from "react-router-dom";

class ExercisePage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1 className={styles.header}>EXERCISE LIST</h1>
        <Link to="/workout" style={{ textDecoration: 'none' }}>
          <h2>Workout Log</h2>
        </Link>
        <BodyPartComponent />
        <ExerciseListComponent />
      </div>
    )
  }
}

export default ExercisePage;
