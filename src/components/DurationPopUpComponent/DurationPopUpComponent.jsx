import React, { Component } from 'react';
import styles from "./DurationPopUpComponent.module.scss";

class DurationPopUpComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //info needed for exercises_users_workouts table
            calories_burned: 0,
            duration: 0,
            user_id: JSON.parse(localStorage.getItem("session")).id,
            exercise_id: this.props.id,
            workout_id: 1,
            //stuff for calorie burned
            exercise_multiplier: this.props.exercise_multiplier,
            user_weight: this.props.user_weight
        }
    }

    changeDuration = (e) => {
        this.setState({ duration: parseInt(e.target.value) })
    }

    handleCalorieCount = (e) => {
        let caloriesBurned = (.0175 * this.state.exercise_multiplier * this.state.user_weight) * this.state.duration;
        this.setState({ calories_burned: caloriesBurned })
        console.log("AFTER CALCULATIONS: ", this.state)
    }

    render() {
        console.log("pop up state::::::::::::::::", this.state)
        return (<div className={styles.popup}>
            <div className={styles.popup_inner}>
                <h2>{this.props.exerciseName}</h2>
                <h3>Duration:</h3>
                <input
                    type="number"
                    placeholder="minutes"
                    onChange={this.changeDuration}
                />
                <button
                    onClick={this.handleCalorieCount}
                >
                    Submit
                    </button>
                <br /><button onClick={this.props.handlePopup}>Close</button>
            </div>
        </div >);
    }
}

export default DurationPopUpComponent;