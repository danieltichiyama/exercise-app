import React, { Component } from "react";
import { actionsLoadExerciseList } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ExerciseListComponent.module.scss";

class ExerciseListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatchLoadExerciseList();
  }

  render() {
    let { exercises } = this.props;

    return (
      <div className={styles.ExerciseList}>
        {exercises.map(exercise => {
          let { exercise_difficulty } = exercise.exercise_difficulty_id;
          let difficultyStyle = { color: "#04c9b5" };

          if (exercise_difficulty === "Moderate") {
            difficultyStyle = { color: "#fac611" };
          }

          if (exercise_difficulty === "Vigorous") {
            difficultyStyle = { color: "#fc4a1a" };
          }

          return (
            <>
              <Link
                style={{ textDecoration: "none" }}
                className={styles.exercise}
                key={exercise.id}
                to={location => ({
                  ...location,
                  pathname: `/exercise/${exercise.id}`
                })}
              >
                <div className={styles.info}>
                  <p>{exercise.name}</p>
                  <p className={styles.difficulty} style={difficultyStyle}>
                    {exercise_difficulty}
                  </p>
                </div>
                <div>
                  <h3>></h3>
                </div>
              </Link>
              <hr />
            </>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    exercises: store.exercises
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadExerciseList: () => {
      return dispatch(actionsLoadExerciseList());
    }
  };
};

ExerciseListComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseListComponent);

export default ExerciseListComponent;
