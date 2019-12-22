import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionsLoadWorkouts } from "../../actions";
import WorkoutCardComponent from "../../components/WorkoutCardComponent/WorkoutCardComponent";

class WorkoutLogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    componentDidMount() {
        let userID = JSON.parse(localStorage.getItem("session")).id;
        this.props.dispatchLoadWorkouts(userID);
    };

    render() {
        console.log("workout component: ", this.props)
        return (
            <div>
                {this.props.workouts.map(workout => {
                    return (
                        <WorkoutCardComponent
                            key={workout.id}
                            id={workout.workout_id}
                            name={workout.exercises_id.name}
                            calories_burned={workout.calories_burned}
                            duration={workout.exercise_duration}
                            created_at={workout.created_at}
                        />
                    )
                })}
            </div>
        );
    };
};

const mapStateToProps = store => {
    return {
        workouts: store.workouts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchLoadWorkouts: (data) => {
            return dispatch(actionsLoadWorkouts(data));
        }
    };
};

WorkoutLogComponent = connect(mapStateToProps, mapDispatchToProps)(WorkoutLogComponent);

export default WorkoutLogComponent;