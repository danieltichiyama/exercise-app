import React, { Component } from "react";
import styles from "./BodyPartComponent.module.scss";
import { connect } from "react-redux";
import {
  actionsLoadBodyParts,
  actionsFilterBodyParts,
  actionsLoadExerciseList
} from "../../actions";

import BodyParts from "../../imgs/bodyparts";

class BodyPartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodypartID: "",
      style: {}
    };
  }

  componentDidMount() {
    this.props.dispatchLoadBodyParts();
  }

  handleBodyPartClick = e => {
    e.preventDefault();
    this.changeBackground(e.target.dataset.bodypart);
    this.props.dispatchFilterBodyParts(e.target.id);
  };

  handleShowAllBodyParts = e => {
    e.preventDefault();
    this.props.dispatchLoadExerciseList();
  };

  changeBackground = bodypart => {
    for (let key in BodyParts) {
      if (bodypart === key) {
        return this.setState({
          style: {
            backgroundImage: `url(${BodyParts[key]})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }
        });
      }
    }
  };

  render() {
    return (
      <div className={styles.BodyPartsPopUp} style={this.state.style}>
        <div className={styles.BodyPartsPopUpInner}>
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
                data-bodypart={bodypart.bodypart}
              >
                {bodypart.bodypart}
              </button>
            );
          })}
        </div>
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
