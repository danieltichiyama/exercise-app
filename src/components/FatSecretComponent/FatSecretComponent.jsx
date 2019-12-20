import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsFatSecretGetOauth2 } from "../../actions"

class FatSecretComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleClick = () => {
    this.props.dispatchFatSecretGetOauth2()
  }

  render() { 
    return ( 
      <>
        <button onClick={this.handleClick}>click</button>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFatSecretGetOauth2: () => {
      return dispatch(actionsFatSecretGetOauth2())
    }
  }
}

FatSecretComponent = connect(null, mapDispatchToProps)(FatSecretComponent);

export default FatSecretComponent;