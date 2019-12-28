import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actionsFatSecretFoodSearch,
  actionsClearFoodNutrients
} from "../../actions";
import FatSecretFoodComponent from "../FatSecretFoodComponent";
import FatSecretFoodNutrientsComponent from "../FatSecretFoodNutrientsComponent";
import styles from "../FatSecretSearchComponent/FatSecretSearchComponent.module.scss";
import AddFoodButtonComponent from "../../components/AddFoodButtonComponent";
import LabelComponent from "../LabelComponent";
import FoodVisionComponent from "../FoodVisionComponent";
import searchIcon from "../../imgs/magnifying_glass.png";
import ReactLoading from "react-loading";

class FatSecretSearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fatSearchData: "",
      servingIndex: 0,
      servingMultiplier: 1,
      isLoading: false
    };
  }

  componentDidMount = () => {
    return this.handleLoading();
  };

  componentDidUpdate = prevProps => {
    if (this.props.imgData !== prevProps.imgData) {
      return this.handleLoading();
    }
  };

  handleChange = e => {
    this.setState({ fatSearchData: e.target.value });
  };

  handleSelectChange = e => {
    this.setState({ servingIndex: e.target.value });
  };

  handleMultiplier = e => {
    this.setState({ servingMultiplier: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({
      servingMultiplier: 1,
      servingIndex: 1
    });
    this.props.dispatchFatSecretFoodSearch({ data: this.state.fatSearchData });
  };

  resetServingMultiplier = e => {
    this.setState({
      servingMultiplier: 1,
      servingIndex: 1
    });
  };

  handleLeftArrowClick = () => {
    let count = this.state.servingMultiplier;
    if (count > 1) {
      count--;
      return this.setState({ servingMultiplier: count });
    } else {
      return;
    }
  };

  handleRightArrowClick = () => {
    let count = this.state.servingMultiplier;
    count++;
    return this.setState({ servingMultiplier: count });
  };

  handleBackButtonClick = () => {
    return this.props.dispatchClearFoodNutrients();
  };

  handleLoading = () => {
    let bool = this.state.isLoading;
    return this.setState({ isLoading: !bool });
  };

  render() {
    const loading = this.state.isLoading;

    return (
      <div className={styles.fatSecretSearch}>
        <div className={styles.searchDiv}>
          <div
            className={styles.backButton}
            onClick={this.handleBackButtonClick}
          ></div>
          <form autoComplete="off" onSubmit={this.handleClick}>
            <input
              autoComplete="off"
              onChange={this.handleChange}
              placeholder="Search for a food..."
              className={styles.foodInput}
            />

            <button className={styles.searchButton}>
              <img
                src={searchIcon}
                className={styles.searchIcon}
                alt="search button"
              />
            </button>
          </form>

          <FoodVisionComponent handleLoading={this.handleLoading} />
        </div>

        <div className={styles.LabelContainer}>
          {loading ? (
            <div className={styles.loader}>
              <ReactLoading type={"spin"} color={"#04c9b5"} />
            </div>
          ) : null}

          {this.props.imgData.length !== 0
            ? this.props.imgData.map(imgData => {
                return (
                  <LabelComponent
                    key={imgData.description}
                    label={imgData.description}
                  />
                );
              })
            : null}
        </div>

        {/* list results for fat_secret api */}

        {this.props.foods &&
        this.props.foods.length > 0 &&
        !this.props.foodNutrients.servings
          ? this.props.foods.map(food => {
              return (
                <FatSecretFoodComponent
                  key={food.food_id}
                  foodID={food.food_id}
                  name={food.food_name}
                  food_description={food.food_description}
                  resetServingMultiplier={this.resetServingMultiplier}
                  meal_type_id={this.props.meal_type_id}
                />
              );
            })
          : null}

        {/* list results end */}

        {/* food details, if multiple servings are present */}

        {this.props.foodNutrients.servings &&
        Array.isArray(this.props.foodNutrients.servings.serving) ? (
          <FatSecretFoodNutrientsComponent
            key={this.state.servingIndex}
            name={this.props.foodNutrients.food_name}
            meal_type_id={this.props.meal_type_id}
            servingSize={`${
              this.props.foodNutrients.servings.serving[this.state.servingIndex]
                .serving_description
            }`}
            calories={`${Math.round(
              (this.props.foodNutrients.servings.serving[
                this.state.servingIndex
              ].calories *
                this.state.servingMultiplier +
                Number.EPSILON) *
                100
            ) / 100}kcal`}
            fat={`${Math.round(
              (this.props.foodNutrients.servings.serving[
                this.state.servingIndex
              ].fat *
                this.state.servingMultiplier +
                Number.EPSILON) *
                100
            ) / 100}g`}
            carbohydrate={`${Math.round(
              (this.props.foodNutrients.servings.serving[
                this.state.servingIndex
              ].carbohydrate *
                this.state.servingMultiplier +
                Number.EPSILON) *
                100
            ) / 100}g`}
            protein={`${Math.round(
              (this.props.foodNutrients.servings.serving[
                this.state.servingIndex
              ].protein *
                this.state.servingMultiplier +
                Number.EPSILON) *
                100
            ) / 100}g`}
          />
        ) : null}

        {this.props.foodNutrients.servings &&
        Array.isArray(this.props.foodNutrients.servings.serving) ? (
          <div className={styles.servingsAndAddButton}>
            <div className={styles.servings}>
              Servings:{" "}
              <div
                className={styles.leftArrow}
                onClick={this.handleLeftArrowClick}
              ></div>
              <input
                type="number"
                name="multiplier"
                min="1"
                max="99"
                value={this.state.servingMultiplier}
                className={styles.servingMultiplier}
                onChange={this.handleMultiplier}
              />
              <div
                className={styles.rightArrow}
                onClick={this.handleRightArrowClick}
              ></div>
            </div>
            <select
              onChange={this.handleSelectChange}
              className={styles.servingSize}
            >
              {this.props.foodNutrients.servings.serving.map(
                (serving, index) => {
                  return (
                    <option key={index} value={index}>
                      {serving.serving_description}
                    </option>
                  );
                }
              )}
            </select>
            <AddFoodButtonComponent
              meal_type_id={this.props.meal_type_id}
              handleFoodPopUp={this.props.handleFoodPopUp}
            />
          </div>
        ) : null}

        {/* food details, if multiple end */}

        {/* food details, if only one serving size is found */}
        {this.props.foodNutrients.servings &&
        !Array.isArray(this.props.foodNutrients.servings.serving) &&
        typeof this.props.foodNutrients.servings.serving === "object" ? (
          <>
            <FatSecretFoodNutrientsComponent
              key={this.props.foodNutrients.food_name}
              name={this.props.foodNutrients.food_name}
              meal_type_id={this.props.meal_type_id}
              calories={`${Math.round(
                (this.props.foodNutrients.servings.serving.calories *
                  this.state.servingMultiplier +
                  Number.EPSILON) *
                  100
              ) / 100}kcal`}
              fat={`${Math.round(
                (this.props.foodNutrients.servings.serving.fat *
                  this.state.servingMultiplier +
                  Number.EPSILON) *
                  100
              ) / 100}g`}
              carbohydrate={`${Math.round(
                (this.props.foodNutrients.servings.serving.carbohydrate *
                  this.state.servingMultiplier +
                  Number.EPSILON) *
                  100
              ) / 100}g`}
              protein={`${Math.round(
                (this.props.foodNutrients.servings.serving.protein *
                  this.state.servingMultiplier +
                  Number.EPSILON) *
                  100
              ) / 100}g`}
            />
            <div className={styles.servingsAndAddButton}>
              <div className={styles.servings}>
                Servings:{" "}
                <div
                  className={styles.leftArrow}
                  onClick={this.handleLeftArrowClick}
                ></div>
                <input
                  type="number"
                  name="multiplier"
                  min="1"
                  max="99"
                  value={this.state.servingMultiplier}
                  className={styles.servingMultiplier}
                  onChange={this.handleMultiplier}
                />
                <div
                  className={styles.rightArrow}
                  onClick={this.handleRightArrowClick}
                ></div>
              </div>
              <div className={styles.servingSize}>
                {`${this.props.foodNutrients.servings.serving.serving_description}`}
              </div>
              <AddFoodButtonComponent
                meal_type_id={this.props.meal_type_id}
                handleFoodPopUp={this.props.handleFoodPopUp}
              />
            </div>
          </>
        ) : null}

        {/* food details, if only one found end */}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    foods: store.fat_secret_foods,
    foodNutrients: store.fat_secret_nutrients,
    imgData: store.food_labels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchFatSecretFoodSearch: data => {
      return dispatch(actionsFatSecretFoodSearch(data));
    },
    dispatchClearFoodNutrients: () => {
      return dispatch(actionsClearFoodNutrients());
    }
  };
};

FatSecretSearchComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FatSecretSearchComponent);

export default FatSecretSearchComponent;
