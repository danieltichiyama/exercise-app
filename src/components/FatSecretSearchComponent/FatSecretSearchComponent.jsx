import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsFatSecretFoodSearch } from "../../actions"
import FatSecretFoodComponent from "../FatSecretFoodComponent/FatSecretFoodComponent";
import FatSecretFoodNutrientsComponent from "../FatSecretFoodNutrientsComponent/FatSecretFoodNutrientsComponent";

class FatSecretSearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fatSearchData: '',
      servingIndex: 0
    }
  }

  handleChange = (e) => {
    this.setState({ fatSearchData: e.target.value });
  }

  handleSelectChange = (e) => {
    this.setState({ servingIndex: e.target.value });
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
        {(this.props.foods.length > 0 && !this.props.foodNutrients.servings) ? (
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

        {(this.props.foodNutrients.servings && Array.isArray(this.props.foodNutrients.servings.serving)) ? (
          <div>
            Serving Size: 
            <select onChange={this.handleSelectChange}>
              {this.props.foodNutrients.servings.serving.map((serving, index) => {
                return(
                  <option
                    key={index}
                    value={index}
                  >
                    {serving.serving_description}
                  </option>
                )
              })}
            </select>
          </div>
        ) : ('')}

        {(this.props.foodNutrients.servings && !Array.isArray(this.props.foodNutrients.servings.serving) && typeof this.props.foodNutrients.servings.serving === 'object') ? (
          <FatSecretFoodNutrientsComponent
            key={this.props.foodNutrients.food_name}
            name={this.props.foodNutrients.food_name}
            servingSize={this.props.foodNutrients.servings.serving.serving_description}
            calories={`${this.props.foodNutrients.servings.serving.calories}kcal`}
            fat={`${this.props.foodNutrients.servings.serving.fat}g`}
            carbohydrate={`${this.props.foodNutrients.servings.serving.carbohydrate}g`}
            protein={`${this.props.foodNutrients.servings.serving.protein}g`}
          />
        ) : ('')}

        {(this.props.foodNutrients.servings && Array.isArray(this.props.foodNutrients.servings.serving)) ? (
          <FatSecretFoodNutrientsComponent
            key={this.state.servingIndex}
            name={this.props.foodNutrients.food_name}
            servingSize={`${this.props.foodNutrients.servings.serving[this.state.servingIndex].serving_description}`}
            calories={`${this.props.foodNutrients.servings.serving[this.state.servingIndex].calories}kcal`}
            fat={`${this.props.foodNutrients.servings.serving[this.state.servingIndex].fat}g`}
            carbohydrate={`${this.props.foodNutrients.servings.serving[this.state.servingIndex].carbohydrate}g`}
            protein={`${this.props.foodNutrients.servings.serving[this.state.servingIndex].protein}g`}
          />
        ) : ('')}
      </>
    )
  }
}

const mapStateToProps = store => {  
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