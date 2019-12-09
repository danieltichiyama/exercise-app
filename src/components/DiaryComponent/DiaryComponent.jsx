import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./DiaryComponent.module.scss";
import { actionsGetDiaryData } from "../../actions";
import MealComponent from "../MealComponent";
// import moment from "moment";

class DiaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentDate: moment(),
      meals: ["Breakfast", "Lunch", "Dinner", "Snack"]
    };
  }

  handleNewDate = () => {
    //this can stay here but needs to use the data saved in the store
    //this function needs to be put into a componentDidUpdate instead, based on whether or not the date value in the store is changed, it will activate

    let UTCdate = this.props.diaryDate
      .parseZone(this.props.diaryDate.format())
      .utc()
      .format();
    return this.props.dispatchGetDiaryData(UTCdate);
  };

  componentDidMount = () => {
    console.log("componentDidMount");
    return this.handleNewDate();
  };

  componentDidUpdate = prevProps => {
    console.log("componentDidUpdate");
    console.log("current props.diaryDate", this.props.diaryDate);
    console.log("previous props.diaryDate", prevProps.diaryDate);
    if (this.props.diaryDate !== prevProps.diaryDate) {
      console.log("conditions passed, running code");
      return this.handleNewDate();
    }
  };

  // getPreviousDate = () => {
  //   //does it still need to be a cb?YES BECAUSE it's calling MOMENT() and that takes time...
  //   let previousDate = this.state.currentDate.subtract(1, "days");
  //   return this.setState(
  //     {
  //       currentDate: previousDate
  //     },
  //     () => {
  //       return this.handleNewDate();
  //     }
  //   );
  // };

  // getNextDate = () => {
  //   let nextDate = this.state.currentDate.add(1, "days");
  //   return this.setState({ currentDate: nextDate }, () => {
  //     return this.handleNewDate();
  //   });
  // };

  filterFoodsIntoMeals = (arr, str) => {
    return arr.filter(data => {
      return data.meal_type_id.meal_type === str;
    });
  };

  render() {
    return (
      <div className={styles.DiaryComponent}>
        {/* <h1>Diary Component</h1>
        <button onClick={this.getPreviousDate}>Yesterday</button>
        <h3>{this.state.currentDate.format("MMMM D")}</h3>
        <button onClick={this.getNextDate}>Tomorrow</button>
        <div>{this.state.currentDate.format("YYYY-MM-DD")}</div> */}

        <ul>
          {this.state.meals.map(meal => {
            return (
              <MealComponent
                key={meal}
                meal={meal}
                foods={this.filterFoodsIntoMeals(this.props.diaryData, meal)}
              ></MealComponent>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => {
  //this needs to pull in the date data saved in the store
  return {
    diaryData: store.diaryData,
    diaryDate: store.diaryDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetDiaryData: date => {
      console.log("dispatchGetDiaryData", date);
      dispatch(actionsGetDiaryData(date));
    }
  };
};

DiaryComponent = connect(mapStateToProps, mapDispatchToProps)(DiaryComponent);

export default DiaryComponent;
