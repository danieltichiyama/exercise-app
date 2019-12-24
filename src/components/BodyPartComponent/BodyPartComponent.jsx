import React, { Component } from "react";
import styles from "./BodyPartComponent.module.scss";
import { connect } from "react-redux";
import {
  actionsLoadBodyParts,
  actionsFilterBodyParts,
  actionsLoadExerciseList
} from "../../actions";

class BodyPartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodypartID: ""
    };
  }

  componentDidMount() {
    this.props.dispatchLoadBodyParts();
  }

  handleBodyPartClick = e => {
    e.preventDefault();
    this.props.dispatchFilterBodyParts(e.target.id);
  };

  handleShowAllBodyParts = e => {
    e.preventDefault();
    this.props.dispatchLoadExerciseList();
  };

  render() {
    return (
      <div className={styles.BodyParts}>
        <button
          onClick={this.handleShowAllBodyParts}
          className={styles.bodypartbutton}
        >
          Show all
        </button>
        {this.props.bodyparts.map(bodypart => {
          return (
            <button
              className={styles.bodypartbutton}
              id={bodypart.id}
              onClick={this.handleBodyPartClick}
              key={bodypart.id}
            >
              {bodypart.bodypart}
            </button>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    bodyparts: store.bodyparts,
    exercise: store.exercise
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadBodyParts: () => {
      return dispatch(actionsLoadBodyParts());
    },
    dispatchFilterBodyParts: data => {
      return dispatch(actionsFilterBodyParts(data));
    },
    dispatchLoadExerciseList: () => {
      return dispatch(actionsLoadExerciseList());
    }
  };
};

BodyPartComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyPartComponent);

export default BodyPartComponent;
