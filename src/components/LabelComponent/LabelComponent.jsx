import React, { Component } from "react"; 
import { connect } from "react-redux";
import { actionFoodSearch } from "../../actions";

class LabelComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleClick = (e) => {
    this.props.dispatchFoodSearch({ data: this.props.label });
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
    dispatchFoodSearch: data => {
      return dispatch(actionFoodSearch(data))
    }
  }
}

LabelComponent = connect(null, mapDispatchToProps)(LabelComponent);

export default LabelComponent;