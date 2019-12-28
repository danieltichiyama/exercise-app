import React, { Component } from 'react';
import styles from "./DurationPopUpComponent.module.scss";
import { connect } from "react-redux";
import { actionsAddWorkout } from "../../actions";
import exitButton from "../../imgs/exitButton.png"

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
        e.preventDefault();
        let caloriesBurned = Math.round((.0175 * this.state.exercise_multiplier * this.state.user_weight) * this.state.duration);
        this.setState({ calories_burned: caloriesBurned }, this.props.handlePopup);
    }

    componentDidUpdate(_prevProps, prevState) {
        if (this.state.calories_burned !== prevState.calories_burned) {
            this.props.dispatchAddWorkout(this.state)
        }
    }

    render() {
        return (
            <div className={styles.popup}>
                <div className={styles.popup_inner}>
                    <button className={styles.cancelButton} onClick={this.props.handlePopup}>
                        <img src={exitButton} alt="cancel" /></button>
                    <div className={styles.exerciseTitle}>
                        <h4>{this.props.exercise_name}</h4>
                    </div>
                    <div className={styles.inputContainer}>
                        <input className={styles.durationBar}
                            type="number"
                            placeholder="minutes"
                            onChange={this.changeDuration}
                        />
                        <button className={styles.addToWorkout} onClick={this.handleCalorieCount}>
                            + Add to Workout
                    </button>
                    </div>
                </div>
            </div >);
    }
}

const mapStateToProps = store => {
    return {
        workout: store.workout
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchAddWorkout: data => {
            return dispatch(actionsAddWorkout(data));
        }
    }
}

DurationPopUpComponent = connect(mapStateToProps, mapDispatchToProps)(DurationPopUpComponent);

export default DurationPopUpComponent;