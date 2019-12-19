import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsFatSecretGetOauth2 } from "../../actions"

class FatSecretComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount = () => {

  }

  render() { 
    return ( 
      <>
        <div className="fatsecret_container" id="fatsecret_container"></div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFatSecretGetOauth2: data => {
      return dispatch(actionsFatSecretGetOauth2(data))
    }
  }
}

FatSecretComponent = connect(null, mapDispatchToProps)(FatSecretComponent);

export default FatSecretComponent;