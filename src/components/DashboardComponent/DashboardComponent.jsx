import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsLoadUser } from "../../actions";
import styles from "./DashboardComponent.module.scss";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);

    const getId = localStorage.getItem("session");
    const id = JSON.parse(getId);

    this.state = {
      id
    };
  }
  componentDidMount() {
    this.props.dispatchLoadUser(this.state.id.id);
  }

  render() {
    const goal = this.props.users && this.props.users.recommended_calories;
    return (
      <>
        <div className={styles.dashboard}>
          <div className={styles.remainingCaloriesNumbers}>
            <p>{goal}</p>
          </div>

          <div className={styles.remainingCaloriesText}>
            <p>Goal</p>
            <p>-</p>
            <p>Food</p>
            <p>+</p>
            <p>Exercise</p>
            <p>=</p>
            <p>Remaining</p>
          </div>

          <div className={styles.caloriesConsumedText}>
            <p>Calories consumed:</p>
            <p>/{goal} kcal</p>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    users: store.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadUser: id => {
      return dispatch(actionsLoadUser(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
