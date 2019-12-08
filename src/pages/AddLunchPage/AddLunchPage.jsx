import React, { Component } from "react";
import { connect } from "react-redux";
import FoodSearchComponent from "../../components/FoodSearchComponent";

class AddLunchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Lunch</h1>
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

AddLunchPage = connect(mapStateToProps, mapDispatchToProps)(AddLunchPage);

export default AddLunchPage;
