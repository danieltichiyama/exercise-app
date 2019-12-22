import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsFatSecretFoodSearch } from "../../actions"
import FatSecretFoodComponent from "../FatSecretFoodComponent/FatSecretFoodComponent";
import FatSecretFoodNutrientsComponent from "../FatSecretFoodNutrientsComponent/FatSecretFoodNutrientsComponent";

class FatSecretSearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fatSearchData: ''
    }
  }

  handleChange = (e) => {
    this.setState({ fatSearchData: e.target.value });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.dispatchFatSecretFoodSearch({ data: this.state.fatSearchData });
  }

  render() { 
    return ( 
      <>
        <form autoComplete="off" onSubmit={this.handleClick}>
          <input 
            autoComplete="off"
            onChange={this.handleChange}
            placeholder="Fat Secret Search"
          />
          <button>Submit</button>
        </form>
        {(this.props.foods[0] && !this.props.foodNutrients.servings) ? (
          this.props.foods.map(food => {
            return (
              <FatSecretFoodComponent
                key={food.food_id}
                foodID={food.food_id}
                name={food.food_name}
                food_description={food.food_description}
              />
            )
          })
        ) : ('')}

        {(this.props.foodNutrients.servings) ? (
          
          this.props.foodNutrients.servings.serving.map(serving => {
            // console.log(serving);
            // console.log(this.props.foodNutrients.servings.indexOf(serving));
            return(
              <FatSecretFoodNutrientsComponent
                key={serving.serving_id}
                description={serving.serving_description}
                index={this.props.foodNutrients.servings.serving.indexOf(serving)}
              />
            )
          })
        ) : ('')}
      </>
    )
  }
}

const mapStateToProps = store => {
  console.log(store.fat_secret_nutrients);
  console.log((store.fat_secret_foods[0] && !store.fat_secret_nutrients.servings));

  return {
    foods: store.fat_secret_foods,
    foodNutrients: store.fat_secret_nutrients
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFatSecretFoodSearch: (data) => {
      return dispatch(actionsFatSecretFoodSearch(data))
    }
  }
}

FatSecretSearchComponent = connect(mapStateToProps, mapDispatchToProps)(FatSecretSearchComponent);

export default FatSecretSearchComponent;