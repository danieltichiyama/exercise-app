import React, { Component } from 'react';
import * as moment from "moment";
import styles from "./WorkoutCardComponent.module.scss";

class WorkoutCardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {

        return (
            <div className={styles.workout}>
                <h3>
                    Date: {moment(this.props.created_at).format("MM/DD/YYYY")}
                </h3>
                <h4>
                    Exercise: {this.props.name}
                </h4>
                <h5>
                    Calories burned: {this.props.calories_burned || 0}
                </h5>
                <h5>
                    Length of exercise: {this.props.duration || 0} minutes
            </h5>
            </div>
        );
    }
}

export default WorkoutCardComponent;