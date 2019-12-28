import React, { Component } from "react";
import * as moment from "moment";
import styles from "./WorkoutCardComponent.module.scss";

class WorkoutCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  timeConverter = num => {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
  };

  render() {
    let thisDay = this.props.exercises;

    return (
      <div className={styles.WorkoutCard}>
        <div className={styles.header}>
          <h3>{moment(this.props.date).format("MMMM DD, YYYY")}</h3>
          <h3>
            {thisDay.reduce((acc, curr) => {
              return acc + curr.calories_burned;
            }, 0)}
          </h3>
        </div>
        <ul>
          {thisDay.map(day => {
            return (
              <li key={day.id}>
                <div className={styles.exerciseName}>
                  {day.exercises_id.name}
                </div>
                <div className={styles.caloriesBurned}>
                  {day.calories_burned || 0}
                </div>
              </li>
            );
          })}
        </ul>
        <div className={styles.duration}>
          Workout time:{"  "}
          {this.timeConverter(
            thisDay.reduce((acc, curr) => {
              return acc + curr.exercise_duration;
            }, 0)
          )}
          :00
        </div>
      </div>
    );
  }
}

export default WorkoutCardComponent;
