import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionsLoadWorkouts } from "../../actions";

class WorkoutLogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.dispatchLoadWorkouts();
    }

    render() {
        console.log("workout component: ", this.props)
        return (
            <div>
                {this.props.workouts.map(workout => {
                    return (
                        <div key={workout.id}>
                            <h1>
                                {workout.workouts_id.workout}
                                <div>
                                    {workout.exercises_id.name}
                                </div>
                            </h1>
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        workouts: store.workouts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLoadWorkouts: () => {
            return dispatch(actionsLoadWorkouts());
        }
    }
}

WorkoutLogComponent = connect(mapStateToProps, mapDispatchToProps)(WorkoutLogComponent);

export default WorkoutLogComponent;