import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { actionsLoadWorkouts } from "../../actions";
import WorkoutCardComponent from "../../components/WorkoutCardComponent/WorkoutCardComponent";
import * as moment from "moment";
import styles from "./WorkoutLogComponent.module.scss";

class WorkoutLogComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let userID = JSON.parse(localStorage.getItem("session")).id;
    this.props.dispatchLoadWorkouts(userID);
  }

  handleBackClick = () => {
    this.props.history.push("/exercise");
  };

  render() {
    const workoutObj = this.props.workouts.reduce((acc, workout) => {
      let newTime = moment(workout.created_at).format("MM-DD-YYYY");
      return { ...acc, [newTime]: [...(acc[newTime] || []), workout] };
    }, {});

    return (
      <div className={styles.WorkoutLog}>
        <h1>Workouts</h1>
        {Object.keys(workoutObj).map(key => {
          return (
            <WorkoutCardComponent
              key={key}
              date={key}
              exercises={workoutObj[key]}
            />
          );
        })}
        <button className={styles.backButton} onClick={this.handleBackClick}>
          Back to Exercises
        </button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    workouts: store.workouts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadWorkouts: data => {
      return dispatch(actionsLoadWorkouts(data));
    }
  };
};

WorkoutLogComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutLogComponent);

export default WorkoutLogComponent;
