import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./DiaryComponent.module.scss";
import { actionsGetDiaryData } from "../../actions";
import MealComponent from "../MealComponent";
import moment from "moment";

class DiaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: ["Breakfast", "Lunch", "Dinner", "Snack"]
    };
  }

  handleNewDate = () => {
    let UTCdate = moment.utc(this.props.diaryDate).format();
    console.log(UTCdate);
    return this.props.dispatchGetDiaryData(UTCdate);
  };

  componentDidMount = () => {
    return this.handleNewDate();
  };

  componentDidUpdate = prevProps => {
    if (
      this.props.diaryDate !== prevProps.diaryDate ||
      this.props.deletedFood !== prevProps.deletedFood
    ) {
      console.log("newDate found, running handleNewDate()");
      return this.handleNewDate();
    } else if (this.props.addFood !== prevProps.addFood) {
      return this.handleNewDate();
    }
  };

  filterFoodsIntoMeals = (arr, str) => {
    return arr.filter(data => {
      return data.meal_type_id.meal_type === str;
    });
  };

  render() {
    return (
      <div className={styles.DiaryComponent}>
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
  return {
    diaryData: store.diaryData,
    diaryDate: store.diaryDate,
    addFood: store.addFood,
    deletedFood: store.deletedFood
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetDiaryData: date => {
      dispatch(actionsGetDiaryData(date));
    }
  };
};

DiaryComponent = connect(mapStateToProps, mapDispatchToProps)(DiaryComponent);

export default DiaryComponent;
