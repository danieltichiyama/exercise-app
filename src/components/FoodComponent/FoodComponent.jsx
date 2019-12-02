import React, { Component } from "react";
// import { connect } from "react-redux";
// import styles from "./Food.module.scss";
import { Link } from "react-router-dom";
import { parseConfigFileTextToJson } from "typescript";

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return (
      <Link to ="/view" id={parseConfigFileTextToJson.props.id}>
        <div onClick={this.handleClick}>
          <h3>{this.props}</h3>
        </div>
      </Link>
    );
  }
}
 
export default Class;
