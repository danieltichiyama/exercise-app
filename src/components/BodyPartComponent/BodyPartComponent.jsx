import React, { Component } from 'react';
import styles from "./BodyPartComponent.module.scss";
// import { Link } from "react-router-dom";

class BodyPartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.props)
        return (
            <button className={styles.bodypart}>
                {this.props.bodypart_name}
            </button>
        );
    }
}

export default BodyPartComponent;