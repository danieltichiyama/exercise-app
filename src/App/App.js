import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { actionsLogout } from "../actions";

import SmokeButton from "../components/SmokeButton";
import AuthorizationPage from "../pages/AuthorizationPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playground: true
    };
  }

  handleHidePlayground = () => {
    let toggle = this.state.playground;
    return this.setState({ playground: !toggle });
  };

  handleLogout = () => {
    return this.props.dispatchLogout();
  };

  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <button onClick={this.handleLogout}>Log out</button>
        ) : null}
        <AuthorizationPage></AuthorizationPage>

        {/* Below is a section for playing with new components, that can be hidden or shown by clicking the button below in the App.  I thought it might help to have it separate until new components are ready to be added to their appropriate place? idk... Daniel */}
        <button onClick={this.handleHidePlayground}>
          {this.state.playground ? "Hide Playground" : "Show Playground"}
        </button>
        {this.state.playground ? (
          <div className="component_playground">
            <SmokeButton></SmokeButton>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    isLoggedIn: store.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogout: () => {
      return dispatch(actionsLogout());
    }
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;