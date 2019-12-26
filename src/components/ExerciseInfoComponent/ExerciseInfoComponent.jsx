import React, { Component } from "react";
import { actionsLoadSingleExercise, actionLoadUser } from "../../actions";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import DurationPopUpComponent from "../DurationPopUpComponent/index";
import styles from "./ExerciseInfoComponent.module.scss";
import VideoPlayerComponent from "../VideoPlayerComponent";

class ExerciseInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: JSON.parse(localStorage.getItem("session")).id,
      showPopup: false
    };
  }

  componentDidMount() {
    this.props.dispatchLoadSingleExercise(this.props.match.params.id);
    this.props.dispatchLoadUser(this.state.user_id);
  }

  handlePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    let singleExercise = this.props.exerciseInfo;
    let description;

    if (singleExercise.length !== 0) {
      description = singleExercise.description.split(". ");
    }

    return (
      <div className={styles.ExerciseInfo}>
        {/* <div className={styles.videoPH}>Placeholder for video</div> */}
        <VideoPlayerComponent></VideoPlayerComponent>
        <div className={styles.belowVideo}>
          <div className={styles.header}>
            <h1>{singleExercise.name}</h1>
            <div className={styles.horizontalFlexBox}>
              <div className={styles.exerciseDetails}>
                Muscle:{" "}
                {singleExercise.primary_bodypart_id
                  ? singleExercise.primary_bodypart_id.bodypart
                  : null}
                <br />
                Exercise type:{" "}
                {singleExercise.exercise_type_id
                  ? singleExercise.exercise_type_id.exercise_type
                  : null}
                <br />
                Equipment:{" "}
                {singleExercise.exercise_equipment_id
                  ? singleExercise.exercise_equipment_id.exercise_equipment
                  : null}
              </div>
              <div className={styles.exerciseDifficulty}>
                <h3>
                  {singleExercise.exercise_difficulty_id
                    ? singleExercise.exercise_difficulty_id.exercise_difficulty
                    : null}
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.howTo}>
            <h2>How to</h2>
            <ol start="1">
              {description && description.length !== 0
                ? description.map((step, index) => {
                    if (step === "") {
                      return null;
                    }
                    return <li key={index + 1}>{step}.</li>;
                  })
                : null}
            </ol>
          </div>
          <div className={styles.linksAndOptions}>
            <button>
              <Link to="/exercise">Back to list </Link>
            </button>

            <button onClick={this.handlePopup} className={styles.addToWorkout}>
              <span>+ </span> Add to Workout
            </button>
          </div>
          {this.state.showPopup ? (
            <DurationPopUpComponent
              handlePopup={this.handlePopup}
              id={singleExercise.id}
              exercise_name={singleExercise.name}
              exercise_multiplier={
                singleExercise.exercise_difficulty_id.exercise_multiplier
              }
              user_weight={this.props.user.weight}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    exerciseInfo: store.exerciseInfo,
    user: store.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadSingleExercise: data => {
      return dispatch(actionsLoadSingleExercise(data));
    },
    dispatchLoadUser: id => {
      return dispatch(actionLoadUser(id));
    }
  };
};

ExerciseInfoComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseInfoComponent);

export default withRouter(ExerciseInfoComponent);
