import React, { Component } from 'react';
import { actionsLoadExerciseList } from '../../actions';
import { connect } from "react-redux";

class ExerciseListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.dispatchLoadExerciseList();
    }

    render() {
        return (
            <div>
                {this.props.exercises.map(exercise => {
                    return (
                        <h3
                            key={exercise.id}
                            id={exercise.id}
                        >
                            {exercise.name}
                        </h3>)
                })}
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        exercises: store.exercises
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchLoadExerciseList: () => {
            return dispatch(actionsLoadExerciseList());
        }
    };
};

ExerciseListComponent = connect(mapStateToProps, mapDispatchToProps)(ExerciseListComponent);

export default ExerciseListComponent;