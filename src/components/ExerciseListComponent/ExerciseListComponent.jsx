import React, { Component } from 'react';
import { actionsLoadExerciseList } from '../../actions';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ExerciseListComponent.module.scss";

class ExerciseListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.dispatchLoadExerciseList();
    }

    render() {
        let thisExercise = this.props.exercises;
        return (
            <div className={styles.exerciseList}>
                {thisExercise.map(exercise => {
                    return (
                        <Link
                            style={{ textDecoration: 'none' }}
                            key={exercise.id}
                            to={location => ({
                                ...location, pathname: `/exercise/${exercise.id}`
                            })}>
                            <h2 className={styles.exercisebutton}>
                                {exercise.name}
                            </h2>
                        </Link>
                    )
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