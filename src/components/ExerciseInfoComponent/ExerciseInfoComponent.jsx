import React, { Component } from 'react';
import { actionsLoadSingleExercise } from "../../actions";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";


class ExerciseInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.dispatchLoadSingleExercise(this.props.match.params.id);
    }

    handleAddWorkout = () => {
        console.log('test')

    }

    render() {
        let singleExercise = this.props.exerciseInfo;
        return (
            <>
                <Link to="/exercise" >Back to Exercises</Link>
                <div>
                    <h2>{singleExercise.name}</h2>
                    <h3>Bodypart: {singleExercise.primary_bodypart_id ? singleExercise.primary_bodypart_id.bodypart : null}</h3>
                    <h3>Level: {singleExercise.exercise_difficulty_id ? singleExercise.exercise_difficulty_id.exercise_difficulty : null}</h3>
                    <h3>Exercise Type: {singleExercise.exercise_type_id ? singleExercise.exercise_type_id.exercise_type : null}</h3>
                    <h3>Equipment: {singleExercise.exercise_equipment_id ? singleExercise.exercise_equipment_id.exercise_equipment : null}</h3>
                    <p>{singleExercise.description}</p>
                    <button onClick={this.handleAddWorkout}>Add to Workout</button>
                </div>
            </>
        );
    }
}

const mapStateToProps = store => {
    return {
        exerciseInfo: store.exerciseInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLoadSingleExercise: (data) => {
            return dispatch(actionsLoadSingleExercise(data));
        }
    }
}

ExerciseInfoComponent = connect(mapStateToProps, mapDispatchToProps)(ExerciseInfoComponent);

export default withRouter(ExerciseInfoComponent);