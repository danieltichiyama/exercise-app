import React, { Component } from "react"; 
class LabelComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <button onClick={this.handleClick}>
        <h3>{this.props.label}</h3>
      </button>
    );
  }
}
 
export default LabelComponent;