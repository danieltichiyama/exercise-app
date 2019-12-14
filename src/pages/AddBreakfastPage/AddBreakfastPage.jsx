import React, { Component } from "react";
import { connect } from "react-redux";
import FoodSearchComponent from "../../components/FoodSearchComponent";

class AddBreakfastPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Breakfast</h1>
        <FoodSearchComponent meal_type_id={"1"} />
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

AddBreakfastPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBreakfastPage);

export default AddBreakfastPage;
