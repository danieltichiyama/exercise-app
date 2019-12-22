import React, { Component } from 'react';
import { actionsLoadSingleExercise, actionLoadUser } from "../../actions";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import DurationPopUpComponent from "../DurationPopUpComponent/index";

class ExerciseInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: JSON.parse(localStorage.getItem("session")).id,
            showPopup: false
        }
    }

    componentDidMount() {
        this.props.dispatchLoadSingleExercise(this.props.match.params.id);
        this.props.dispatchLoadUser(this.state.user_id);
    }

    handlePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        })
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
                    <button onClick={this.handlePopup}>Add to Workout</button>
                </div>
                {this.state.showPopup ? (
                    <DurationPopUpComponent
                        handlePopup={this.handlePopup}
                        id={singleExercise.id}
                        exercise_name={singleExercise.name}
                        exercise_multiplier={singleExercise.exercise_difficulty_id.exercise_multiplier}
                        user_weight={this.props.user.weight}
                    />
                ) : null}
            </>
        );
    }
}

const mapStateToProps = store => {
    return {
        exerciseInfo: store.exerciseInfo,
        user: store.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLoadSingleExercise: (data) => {
            return dispatch(actionsLoadSingleExercise(data));
        },
        dispatchLoadUser: (id) => {
            return dispatch(actionLoadUser(id));
        }
    }
}

ExerciseInfoComponent = connect(mapStateToProps, mapDispatchToProps)(ExerciseInfoComponent);

export default withRouter(ExerciseInfoComponent);