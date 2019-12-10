import React, { Component } from "react";
import styles from "./DateComponent.module.scss";
import { connect } from "react-redux";
import { actionsChangeDate } from "../../actions";
import moment from "moment";

class DateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getPreviousDate = () => {
    let previousDate = moment(this.props.diaryDate).subtract(1, "days");
    return this.props.dispatchChangeDate(previousDate);
  };

  getNextDate = () => {
    let nextDate = moment(this.props.diaryDate).add(1, "days");
    return this.props.dispatchChangeDate(nextDate);
  };

  render() {
    let local = moment(this.props.diaryDate)
      .parseZone()
      .local()
      .format("MMMM D");

    return (
      <div className={styles.DateComponent}>
        <button onClick={this.getPreviousDate}>Yesterday</button>
        <h3>{local}</h3>
        <button onClick={this.getNextDate}>Tomorrow</button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    diaryDate: store.diaryDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchChangeDate: date => {
      return dispatch(actionsChangeDate(date));
    }
  };
};
DateComponent = connect(mapStateToProps, mapDispatchToProps)(DateComponent);

export default DateComponent;
