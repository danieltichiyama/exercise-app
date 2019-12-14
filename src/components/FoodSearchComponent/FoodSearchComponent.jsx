import React, { Component } from "react";
import { connect } from "react-redux";
import { actionFoodSearch } from "../../actions";
import FoodComponent from "../FoodComponent";
import FoodNutrientComponent from "../FoodNutrientsComponent";
// import styles from "./FoodSearchComponent.module.scss";

class FoodSearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.searchDataOnClick = this.searchDataOnClick.bind(this);
    this.searchKeyword = this.searchKeyword.bind(this);
  }

  searchDataOnClick(e) {
    e.preventDefault();
    this.props.dispatchFoodSearch(this.state);
  }

  searchKeyword(e) {
    this.setState({ data: e.target.value });
    // UNCOMMENT FOR LIVE SEARCHBAR
    // this.props.dispatchFoodSearch(this.state);
  }

  mapFoods = data => {
    if (data[0]) {
      return data.map(food => {
        return (
          <FoodComponent
            fdcId={food.fdcId}
            key={food.fdcId}
            description={food.description}
          />
        );
      });
    } else if (data.foodNutrients) {
      return (
        <FoodNutrientComponent
          meal_type_id={this.props.meal_type_id}
          key={data.description}
          description={data.description}
          calories={`${data.foodNutrients[3].amount} ${data.foodNutrients[3].nutrient.unitName}`}
          protien={`${data.foodNutrients[1].amount} ${data.foodNutrients[1].nutrient.unitName}`}
          carbohydrates={`${data.foodNutrients[2].amount} ${data.foodNutrients[2].nutrient.unitName}`}
          sugars={`${data.foodNutrients[8].amount} ${data.foodNutrients[8].nutrient.unitName}`}
          fiber={`${data.foodNutrients[9].amount} ${data.foodNutrients[9].nutrient.unitName}`}
          calcium={`${data.foodNutrients[10].amount} ${data.foodNutrients[10].nutrient.unitName}`}
          iron={`${data.foodNutrients[11].amount} ${data.foodNutrients[11].nutrient.unitName}`}
          sodium={`${data.foodNutrients[15].amount} ${data.foodNutrients[15].nutrient.unitName}`}
          zinc={`${data.foodNutrients[16].amount} ${data.foodNutrients[16].nutrient.unitName}`}
        />
      );
    }
  };

  render() {
    return (
      <>
        <div>
          <form autoComplete="off" onSubmit={this.searchDataOnClick}>
            <input
              onChange={this.searchKeyword}
              type="text"
              name="name"
              placeholder="search"
            />
            <button>Submit</button>
          </form>
        </div>
        <div>{this.mapFoods(this.props.searchData.foods)}</div>
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    searchData: store
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchFoodSearch: data => {
      return dispatch(actionFoodSearch(data));
    }
  };
};

FoodSearchComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodSearchComponent);

export default FoodSearchComponent;
