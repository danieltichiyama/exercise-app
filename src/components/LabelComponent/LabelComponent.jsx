import React, { Component } from "react"; 
import { connect } from "react-redux";
import { actionsFatSecretFoodSearch } from "../../actions";

class LabelComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleClick = (e) => {
    this.props.dispatchFatSecretFoodSearch({ data: this.props.label });
  }

  render() { 
    return ( 
      <button name="label" onClick={this.handleClick}>
        <h3>{this.props.label}</h3>
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFatSecretFoodSearch: data => {
      return dispatch(actionsFatSecretFoodSearch(data))
    }
  }
}

LabelComponent = connect(null, mapDispatchToProps)(LabelComponent);

export default LabelComponent;