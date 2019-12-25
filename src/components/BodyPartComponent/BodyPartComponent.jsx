import React, { Component } from "react";
import styles from "./BodyPartComponent.module.scss";
import { connect } from "react-redux";
import {
  actionsLoadBodyParts,
  actionsFilterBodyParts,
  actionsLoadExerciseList
} from "../../actions";
import ExitButton from "../../imgs/exitButton.png";
import BodyParts from "../../imgs/bodyparts";
import LogButton from "../../imgs/log.png";

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
    this.changeBackground(e.target.dataset.bodypart);
    this.props.dispatchFilterBodyParts(e.target.id);
  };

  handleShowAllBodyParts = e => {
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
      <div className={styles.BodyPartsPopUp}>
        <div className={styles.exerciseMenu}>
          <div className={styles.exerciseSearchPH}> </div>
          <img
            src={ExitButton}
            alt="exit button"
            className={styles.menuButton}
            onClick={this.props.menuClick}
          />
          <img
            src={LogButton}
            alt="workout log"
            className={styles.menuButton}
          />
        </div>
        <div className={styles.BodyPartsPopUpInner} style={this.state.style}>
          <div
            onClick={this.handleShowAllBodyParts}
            className={styles.bodypartbutton}
          >
            Show all
          </div>
          {this.props.bodyparts.map(bodypart => {
            return (
              <div
                className={styles.bodypartbutton}
                id={bodypart.id}
                onClick={this.handleBodyPartClick}
                key={bodypart.id}
                data-bodypart={bodypart.bodypart}
              >
                {bodypart.bodypart}
              </div>
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
