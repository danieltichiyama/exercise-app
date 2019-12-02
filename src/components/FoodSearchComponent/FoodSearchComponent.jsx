import React, { Component } from "react";
import { connect } from "react-redux";
import { actionFoodSearch } from "../../actions";
import FoodComponent from "../FoodComponent"
// import styles from "./FoodSearchComponent.module.scss";

class FoodSearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.searchKeyword = this.searchKeyword.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.dispatchFoodSearch(this.state)
  }

  searchKeyword(e){
    this.setState({ data: e.target.value })
  }

  mapFoods = data => {
    console.log("DATA", data);
    return data.map(food => {
      return (
        <FoodComponent
          id={food.id}
          key={food.id}
          description={food.description}
          
        />
      )
    })
  }
    
  render(){
    return (
      <>
        <form
          autoComplete="off"
          onSubmit={this.handleClick}
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