import React, { Component } from "react";
import { connect } from "react-redux";
import FoodSearchComponent from "../../components/FoodSearchComponent";

class AddDinnerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Dinner</h1>
        <FoodSearchComponent meal_type_id={"3"} />
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

AddDinnerPage = connect(mapStateToProps, mapDispatchToProps)(AddDinnerPage);

export default AddDinnerPage;
