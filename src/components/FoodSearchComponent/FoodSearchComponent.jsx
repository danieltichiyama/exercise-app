import React, { Component } from "react";
import { connect } from "react-redux";
import { actionFoodSearch } from "../../actions";
import FoodComponent from "../FoodComponent"
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

  searchKeyword(e){
    this.setState({ data: e.target.value });
    // UNCOMMENT FOR LIVE SEARCHBAR
    // this.props.dispatchFoodSearch(this.state);
  }

  mapFoods = data => {
    if (data.length < 1){
      console.log('11111111');
      console.log(this.props.searchData.foods)
      return '';
    } else {
      console.log("22222222222");
      console.log(this.props.searchData.foods)
      return data.map(food => {
        return (
          <FoodComponent
          // onClick={console.log('LOOOOLLL')}
          fdcId={food.fdcId}
          key={food.fdcId}
          description={food.description}
          />
        )
      })
    }
  }
    
  render(){
    return (
      <>  
        <div>
          <form
            autoComplete="off"
            onSubmit={this.searchDataOnClick}
            >
          <input
            onChange={this.searchKeyword}
            type="text"
            name="name"
            placeholder="search"
            />
          <button>
            Submit
          </button>
          </form>
        </div>

        {Object.keys((this.props.searchData.foods) && (this.props.searchData.foods.length > 1)) ? (
          <div>{this.mapFoods(this.props.searchData.foods)}</div>
        ) : ( "" )}
      </>
    )
  }
}

const mapStateToProps = store => {
  return {
    searchData: store
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFoodSearch: data => {
      return dispatch(actionFoodSearch(data))
    }
  }
}

FoodSearchComponent = connect(mapStateToProps, mapDispatchToProps)(FoodSearchComponent);

export default FoodSearchComponent;