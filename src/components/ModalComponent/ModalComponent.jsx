import React, { Component }from "react";
export default class Modal extends Component {
  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <>
        <div>Hello!</div>
        <div>{this.props.children}</div>
        <button onClick={this.props.closeModal}>Close Modal</button>
      </>
    )
  }
}