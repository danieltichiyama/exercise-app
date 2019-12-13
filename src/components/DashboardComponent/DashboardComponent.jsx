import React, { Component } from "react";
import { connect } from "react-redux";
import { actionLoadUser } from "../../actions";
import { actionsGetDiaryData } from "../../actions";
import styles from "./DashboardComponent.module.scss";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);

    const getId = localStorage.getItem("session");
    const id = JSON.parse(getId);
    let date = new Date();

    this.state = {
      id,
      date
    };
  }
  componentDidMount() {
    this.props.dispatchLoadUser(this.state.id.id);
    this.props.dispatchGetDiaryData(this.state.date);
  }

  render() {
    let goal = this.props.users && this.props.users.recommended_calories;
    let food =
      this.props.diaryData &&
      this.props.diaryData.reduce((total, data) => {
        return total + data.calories;
      }, 0);
    let remaining = JSON.stringify(goal - food);
    let consumed = JSON.stringify(food);

    return (
      <>
        <div className={styles.dashboard}>
          <div className={styles.remainingCalories}>
            <div className={styles.column}>
              <h2>{goal}</h2>
              <p>Goal</p>
            </div>

            <p>-</p>

            <div className={styles.column}>
              <h2>{food}</h2>
              <p>Food</p>
            </div>

            <p>+</p>

            <div className={styles.column}>
              <h2>0</h2>
              <p>Exercise</p>
            </div>

            <p>=</p>

            <div className={styles.column}>
              <h2>{remaining}</h2>
              <p>Remaining</p>
            </div>
          </div>

          <div className={styles.caloriesConsumedText}>
            <p>Calories consumed:</p>
            <p className={styles.consumedP}>{consumed}</p>
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
    diaryData: store.diaryData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadUser: id => {
      return dispatch(actionLoadUser(id));
    },
    dispatchGetDiaryData: date => {
      return dispatch(actionsGetDiaryData(date));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
