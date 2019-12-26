import React, { Component } from "react";
import { actionsLoadExerciseList } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ExerciseListComponent.module.scss";

class ExerciseListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
    this.props.dispatchLoadExerciseList();
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      let { exercises, searchTerm } = this.props;

      let filteredExercises = exercises.filter(exercise => {
        return exercise.name.toLowerCase().includes(searchTerm.toLowerCase());
      });

      return this.setState({ exercises: filteredExercises });
    }

    if (this.props.bodypartID !== prevProps.bodypartID) {
      let { exercises, bodypartID } = this.props;

      let filteredExercises = exercises.filter(exercise => {
        console.log("filtering", exercise.primary_bodypart_id.id, bodypartID);
        return exercise.primary_bodypart_id.id === parseInt(bodypartID);
      });

      console.log(filteredExercises);

      return this.setState({ exercises: filteredExercises });
    }

    if (this.props.exercises !== prevProps.exercises) {
      return this.setState({ exercises: this.props.exercises });
    }
  }

  render() {
    let { exercises } = this.state;

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
