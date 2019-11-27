import React, { Component } from "react";
import "./App.css";
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

  render() {
    return (
      <div>
        {/* Below is a section for playing with new components, that can be hidden or shown by clicking the button below in the App.  I thought it might help to have it separate until new components are ready to be added to their appropriate place? idk... Daniel */}
        <button onClick={this.handleHidePlayground}>
          {this.state.playground ? "Hide Playground" : "Show Playground"}
        </button>
        {this.state.playground ? (
          <div className="component_playground">
            <SmokeButton></SmokeButton>
            <AuthorizationPage></AuthorizationPage>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
