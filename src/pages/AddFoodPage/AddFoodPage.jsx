import React, { Component } from "react";
import { connect } from "react-redux";
import { actionFoodSearch } from "../../actions";
import FoodSearchComponent from "../../components/FoodSearchComponent";
// import FoodComponent from "../../components/FoodComponent";
// import FoodNutrientsComponent from "../../components/FoodNutrientsComponent";

class AddFoodPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1></h1>
        <FoodSearchComponent />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

AddFoodPage = connect(mapStateToProps, mapDispatchToProps)(AddFoodPage);

export default AddFoodPage;
