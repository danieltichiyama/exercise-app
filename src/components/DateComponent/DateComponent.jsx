import React, { Component } from "react";
import styles from "./DateComponent.module.scss";
import { connect } from "react-redux";
import { actionsChangeDate } from "../../actions";
import moment from "moment";

class DateComponent extends Component {
  //can this be a functional component?
  constructor(props) {
    super(props);
    this.state = {};
  }

  getPreviousDate = () => {
    console.log("getPreviousDate running");
    let previousDate = this.props.diaryDate.subtract(1, "days");
    return this.props.dispatchChangeDate(previousDate);
  };

  getNextDate = () => {
    //this needs to change a value in the global store
    let nextDate = this.props.diaryDate.add(1, "days");
    return this.props.dispatchChangeDate(nextDate);
  };

  // componentDidMount = () => {
  //   return this.props.dispatchChangeDate();
  // };

  render() {
    return (
      <div className={styles.DateComponent}>
        <button onClick={this.getPreviousDate}>Yesterday</button>
        <h3>{this.props.diaryDate.format("MMMM D")}</h3>
        {/* what if this ^ returned the results a function, that basically got the date from the reducer??? maybe that'd be enough to kick it into gear... */}
        <button onClick={this.getNextDate}>Tomorrow</button>
        <div>{this.props.diaryDate.format("YYYY-MM-DD")}</div>
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
      console.log("dispatchChangeDate running");
      return dispatch(actionsChangeDate(date));
    }
  };
};
DateComponent = connect(mapStateToProps, mapDispatchToProps)(DateComponent);

export default DateComponent;
