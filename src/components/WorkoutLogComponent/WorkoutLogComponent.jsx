import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionsLoadWorkouts } from "../../actions";
import WorkoutCardComponent from "../../components/WorkoutCardComponent/WorkoutCardComponent";
import * as moment from "moment";

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
        // Hardcoding new date and pushing to workouts array to check if workoutObj sorts it into new day
        // this.props.workouts.push({ created_at: "2019-12-23T03:50:18.592Z" })

        const workoutObj = this.props.workouts.reduce((acc, workout) => {
            let newTime = moment(workout.created_at).format("MM-DD-YYYY");
            console.log('newtime', newTime)
            return { ...acc, [newTime]: [...(acc[newTime] || []), workout] };
        }, {});

        return (
            <div>
                {Object.keys(workoutObj).map(key => {
                    console.log(workoutObj[key])
                    return (
                        <WorkoutCardComponent
                            key={key}
                            date={key}
                            exercises={workoutObj[key]}
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