import React, { Component } from "react";
import "./App.css";
import SmokeButton from "../components/SmokeButton";

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
        <button onClick={this.handleHidePlayground}>Hide Playground</button>
        {this.state.playground ? (
          <div className="component_playground">
            <SmokeButton></SmokeButton>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
