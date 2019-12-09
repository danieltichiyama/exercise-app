import React, { Component } from "react";
import styles from "./DateComponent.module.scss";
import { connect } from "react-redux";
import { actionsChangeDate } from "../../actions";
import moment from "moment";

class DateComponent extends Component {
  //can this be a functional component?
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };
  }

  getPreviousDate = () => {
    //this needs to change a value in the global store
    //works but then doesn't work the second time you click it, why?
    console.log("getPreviousDate running");
    let previousDate = this.state.date.subtract(1, "days");
    return this.setState(
      {
        date: previousDate
      },
      () => {
        return this.props.dispatchChangeDate(this.state.date);
      }
    );
  };

  getNextDate = () => {
    //this needs to change a value in the global store
    let nextDate = this.state.date.add(1, "days");
    return this.setState(
      {
        date: nextDate
      },
      () => {
        return this.props.dispatchChangeDate(this.state.date);
      }
    );
  };

  componentDidMount = () => {
    return this.props.dispatchChangeDate(this.state.date);
  };

  render() {
    return (
      <div className={styles.DateComponent}>
        <button onClick={this.getPreviousDate}>Yesterday</button>
        <h3>{this.state.date.format("MMMM D")}</h3>
        <button onClick={this.getNextDate}>Tomorrow</button>
        <div>{this.state.date.format("YYYY-MM-DD")}</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchChangeDate: date => {
      console.log("dispatchChangeDate running");
      return dispatch(actionsChangeDate(date));
    }
  };
};
DateComponent = connect(null, mapDispatchToProps)(DateComponent);

export default DateComponent;
