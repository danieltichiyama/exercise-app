import React, { Component } from "react";
import * as moment from "moment";
import styles from "./WorkoutCardComponent.module.scss";

class WorkoutCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let thisDay = this.props.exercises;
    return (
      <div className={styles.workout}>
        <h2>Date: {moment(this.props.date).format("MMM D")}</h2>
        <ul>
          {thisDay.map(day => {
            return (
              <li key={day.id}>
                <h3>Exercise: {day.exercises_id.name}</h3>
                <h4>Calories burned: {day.calories_burned || 0}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default WorkoutCardComponent;
