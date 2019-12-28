import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actionLoadUser,
  actionsGetDiaryData,
  actionsLoadWorkouts
} from "../../actions";
import styles from "./DashboardComponent.module.scss";
import moment from "moment";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: JSON.parse(localStorage.getItem("session")).id,
      overAte: false,
      style: { width: "0" }
    };
  }

  componentDidMount() {
    if (this.state.id) {
      //wrapped in a conditional for PWA
      this.props.dispatchLoadUser(this.state.id);
      this.props.dispatchGetDiaryData(this.props.diaryDate);
      this.props.dispatchLoadWorkouts(this.state.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.diaryData !== prevProps.diaryData ||
      this.props.workouts !== prevProps.workouts ||
      this.props.diaryDate !== prevProps.diaryDate
    ) {
      let goal = this.props.users && this.props.users.recommended_calories;

      let food =
        this.props.diaryData &&
        this.props.diaryData.reduce((total, data) => {
          return total + data.calories;
        }, 0);

      //gets calories burned by today's date
      let exercise =
        this.props.workouts &&
        this.props.workouts
          .filter(data => {
            let todaysDate = moment(this.props.diaryDate).format("YYYY-MM-DD");
            let getCreatedDate = moment(data.created_at).format("YYYY-MM-DD");
            return todaysDate === getCreatedDate;
          })
          .reduce((total, data) => {
            return total + data.calories_burned;
          }, 0);

      if (Math.sign(goal - food + exercise) === -1) {
        //if the total is a negative number
        this.setState({
          overAte: true,
          style: { width: "100%", backgroundColor: `orange` }
        });
      } else {
        let percent = ((food - exercise) / goal) * 100;
        this.setState({ overAte: false, style: { width: `${percent}%` } });
      }
    }
  }

  render() {
    let goal = this.props.users && this.props.users.recommended_calories;

    let food =
      this.props.diaryData &&
      this.props.diaryData.reduce((total, data) => {
        return total + data.calories;
      }, 0);

    //gets calories burned by today's date
    let exercise =
      this.props.workouts &&
      this.props.workouts
        .filter(data => {
          let todaysDate = moment(this.props.diaryDate).format("YYYY-MM-DD");
          let getCreatedDate = moment(data.created_at).format("YYYY-MM-DD");
          return todaysDate === getCreatedDate;
        })
        .reduce((total, data) => {
          return total + data.calories_burned;
        }, 0);

    let remaining = JSON.stringify(goal - food + exercise);

    return (
      <>
        <div className={styles.Dashboard}>
          <div className={styles.remainingCalories}>
            <div className={styles.column}>
              <h2>{goal}</h2>
              <p>Goal</p>
            </div>
            <div className={styles.column}>
              <h2 className={styles.spaceFiller}> </h2>
              <p>-</p>
            </div>

            <div className={styles.column}>
              <h2>{food}</h2>
              <p>Food</p>
            </div>

            <div className={styles.column}>
              <h2 className={styles.spaceFiller}> </h2>
              <p>+</p>
            </div>
            <div className={styles.column}>
              <h2>{exercise}</h2>
              <p>Exercise</p>
            </div>

            <div className={styles.column}>
              <h2 className={styles.spaceFiller}> </h2>
              <p>=</p>
            </div>
            <div className={styles.column}>
              <h2>{remaining}</h2>
              <p>Remaining</p>
            </div>
          </div>

          <div className={styles.statusBar}>
            <div className={styles.redBar} style={this.state.style}></div>
          </div>

          <div className={styles.caloriesConsumedText}>
            <p>Calories consumed: </p>
            <p className={styles.remainingP}>{food - exercise}</p>
            <p>/{goal} kcal</p>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    users: store.users,
    diaryData: store.diaryData,
    workouts: store.workouts,
    diaryDate: store.diaryDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadUser: id => {
      return dispatch(actionLoadUser(id));
    },
    dispatchGetDiaryData: date => {
      return dispatch(actionsGetDiaryData(date));
    },
    dispatchLoadWorkouts: data => {
      return dispatch(actionsLoadWorkouts(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
