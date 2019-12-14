import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { withRouter } from "react-router";
import NavigationComponent from "../components/NavigationComponent";
import MainBodyPage from "../pages/MainBodyPage";
import { actionsLogout } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playground: true
    };
  }

  handleLogout = () => {
    return this.props.dispatchLogout();
  };

  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <button onClick={this.handleLogout}>Log out</button>
        ) : null}
        <MainBodyPage {...this.props}></MainBodyPage>
        <NavigationComponent></NavigationComponent>
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

export default withRouter(App);
