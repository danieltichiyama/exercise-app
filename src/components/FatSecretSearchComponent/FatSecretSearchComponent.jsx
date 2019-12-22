import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsFatSecretGetOauth2 } from "../../actions"

class FatSecretSearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fatSearchData: ''
    }
  }

  handleChange = (e) => {
    this.setState({ fatSearchData: e.target.value });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.dispatchFatSecretGetOauth2({ data: this.state.fatSearchData });
  }

  render() { 
    return ( 
      <>
        <form autoComplete="off" onSubmit={this.handleClick}>
          <input 
            autoComplete="off"
            onChange={this.handleChange}
            placeholder="Fat Secret Search"
          />
          <button>Submit</button>
        </form>
        {(this.props.foods[0]) ? (
          'foods here'
        ) : ('foods not here')}
      </>
    )
  }
}

const mapStateToProps = store => {
  console.log(store.fat_secret_foods);
  return {
    foods: store.fat_secret_foods
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFatSecretGetOauth2: (data) => {
      return dispatch(actionsFatSecretGetOauth2(data))
    }
  }
}

FatSecretSearchComponent = connect(mapStateToProps, mapDispatchToProps)(FatSecretSearchComponent);

export default FatSecretSearchComponent;