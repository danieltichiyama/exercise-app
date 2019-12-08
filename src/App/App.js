import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ExercisePage from "../pages/ExercisePage";
import NutritionPage from "../pages/NutritionPage";
import CommunityPage from "../pages/CommunityPage";
import UserPage from "../pages/UserPage";
import AuthorizationPage from "../pages/AuthorizationPage";
import NavigationComponent from "../components/NavigationComponent";
import DiaryComponent from "../components/DiaryComponent";
import FoodSearchComponent from "../components/FoodSearchComponent/FoodSearchComponent";

import { actionsLogout } from "../actions";

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
      <Router>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route path="/exercise" component={ExercisePage} />
          <Route path="/nutrition" component={NutritionPage} />
          <Route path="/community" component={CommunityPage} />
          <Route path="/user" component={UserPage} />
          <Route path="/authorization" component={AuthorizationPage} />
        </Switch>

        <div>
          <FoodSearchComponent></FoodSearchComponent>
          {this.props.isLoggedIn ? (
            <button onClick={this.handleLogout}>Log out</button>
          ) : null}
          <NavigationComponent></NavigationComponent>
          {/* Below is a section for playing with new components, that can be hidden or shown by clicking the button below in the App.  I thought it might help to have it separate until new components are ready to be added to their appropriate place? idk... Daniel */}
          <button onClick={this.handleHidePlayground}>
            {this.state.playground ? "Hide Playground" : "Show Playground"}
          </button>
          {this.state.playground ? (
            <div className="component_playground">
              <DiaryComponent></DiaryComponent>
            </div>
          ) : null}
        </div>
      </Router>
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
