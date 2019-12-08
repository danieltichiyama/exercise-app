import React, { Component } from "react";
import { connect } from "react-redux";
import FoodSearchComponent from "../../components/FoodSearchComponent";

class AddSnackPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Snack</h1>
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

AddSnackPage = connect(mapStateToProps, mapDispatchToProps)(AddSnackPage);

export default AddSnackPage;
