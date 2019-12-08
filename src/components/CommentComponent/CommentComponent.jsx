import React, { Component } from "react";
import styles from "./CommentComponent.module.scss";

class CommentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return (
            < div className={styles.comments}>
                {this.props.body} || By: {this.props.user} || User's goal: {this.props.user_goal}
            </div >
        );
    };
};

export default CommentComponent;