import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsFatSecretFoodSearch } from "../../actions"
import FatSecretFoodComponent from "../FatSecretFoodComponent";
import FatSecretFoodNutrientsComponent from "../FatSecretFoodNutrientsComponent";
import LabelComponent from "../LabelComponent"

class FatSecretSearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fatSearchData: '',
      servingIndex: 0,
      servingMultiplier: 1
    }
  }

  handleChange = (e) => {
    this.setState({ fatSearchData: e.target.value });
  }

  handleSelectChange = (e) => {
    this.setState({ servingIndex: e.target.value })
  }

  handleMultiplier = (e) => {
    this.setState({ servingMultiplier: e.target.value });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      servingMultiplier: 1,
      servingIndex: 1
    })
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
        {(this.props.imgData.length !== 0) ? (
            this.props.imgData.map(imgData => {
              return (
                <LabelComponent
                  key={imgData.description}
                  label={imgData.description}
                />
              )
            })
          ) : ('')}

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
            Servings: 
            <input type="number" name="multiplier" min="1" max="99" onChange={this.handleMultiplier}/>
          </div>
        ) : ('')}

        {(this.props.foodNutrients.servings && !Array.isArray(this.props.foodNutrients.servings.serving) && typeof this.props.foodNutrients.servings.serving === 'object') ? (
          <>  
            <div>
              Serving Size: {`${this.props.foodNutrients.servings.serving.serving_description}  `}
              Servings:
              <input type="number" min="1" max="99" onChange={this.handleMultiplier}/>
            </div>
            <FatSecretFoodNutrientsComponent
              key={this.props.foodNutrients.food_name}
              name={this.props.foodNutrients.food_name}
              calories={`${Math.round(((this.props.foodNutrients.servings.serving.calories * this.state.servingMultiplier) + Number.EPSILON) * 100) / 100}kcal`}
              fat={`${Math.round(((this.props.foodNutrients.servings.serving.fat * this.state.servingMultiplier) + Number.EPSILON) * 100) / 100}g`}
              carbohydrate={`${Math.round(((this.props.foodNutrients.servings.serving.carbohydrate * this.state.servingMultiplier) + Number.EPSILON) * 100) / 100}g`}
              protein={`${Math.round(((this.props.foodNutrients.servings.serving.protein * this.state.servingMultiplier) + Number.EPSILON) * 100) / 100}g`}
            />
          </>
        ) : ('')}

        {(this.props.foodNutrients.servings && Array.isArray(this.props.foodNutrients.servings.serving)) ? (
          <FatSecretFoodNutrientsComponent
            key={this.state.servingIndex}
            name={this.props.foodNutrients.food_name}
            servingSize={`${this.props.foodNutrients.servings.serving[this.state.servingIndex].serving_description}`}
            calories={`${Math.round(((this.props.foodNutrients.servings.serving[this.state.servingIndex].calories * this.state.servingMultiplier) + Number.EPSILON) * 100) / 100}kcal`}
            fat={`${Math.round(((this.props.foodNutrients.servings.serving[this.state.servingIndex].fat * this.state.servingMultiplier) + Number.EPSILON) * 100) / 100}g`}
            carbohydrate={`${Math.round(((this.props.foodNutrients.servings.serving[this.state.servingIndex].carbohydrate * this.state.servingMultiplier) + Number.EPSILON) * 100) / 100}g`}
            protein={`${Math.round(((this.props.foodNutrients.servings.serving[this.state.servingIndex].protein * this.state.servingMultiplier) + Number.EPSILON) * 100) / 100}g`}
          />
        ) : ('')}
      </>
    )
  }
}

const mapStateToProps = store => {  
  return {
    foods: store.fat_secret_foods,
    foodNutrients: store.fat_secret_nutrients,
    imgData: store.food_labels
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