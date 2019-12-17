import React, { Component } from 'react';
import styles from "./BodyPartComponent.module.scss";
import { connect } from "react-redux";
import { actionsLoadBodyParts, actionsFilterBodyParts, actionsLoadExerciseList } from '../../actions';

class BodyPartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bodypartID: ''
        }
    }

    componentDidMount() {
        this.props.dispatchLoadBodyParts();
    }

    handleBodyPartClick = (e) => {
        e.preventDefault();
        this.props.dispatchFilterBodyParts(e.target.id);
    }

    handleShowAllBodyParts = (e) => {
        e.preventDefault();
        this.props.dispatchLoadExerciseList();
    }

    render() {
        return (
            <>
                < button
                    onClick={this.handleShowAllBodyParts}
                    className={styles.bodypartbutton}
                >ALL</button >
                {this.props.bodyparts.map(bodypart => {
                    return (
                        <div
                            className={styles.bodypart}
                            key={bodypart.id}
                        >
                            <button
                                className={styles.bodypartbutton}
                                id={bodypart.id}
                                onClick={this.handleBodyPartClick}>{bodypart.bodypart}</button>
                        </div>
                    )
                })}
            </>
        )
    }
}

const mapStateToProps = store => {
    return {
        bodyparts: store.bodyparts,
        exercise: store.exercise
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLoadBodyParts: () => {
            return dispatch(actionsLoadBodyParts());
        },
        dispatchFilterBodyParts: (data) => {
            return dispatch(actionsFilterBodyParts(data));
        },
        dispatchLoadExerciseList: () => {
            return dispatch(actionsLoadExerciseList());
        }
    }
}

BodyPartComponent = connect(mapStateToProps, mapDispatchToProps)(BodyPartComponent);

export default BodyPartComponent;