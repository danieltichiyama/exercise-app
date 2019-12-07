import React, { Component } from "react";
import { connect } from "react-redux";
// import { actionsLoadComments } from "../../actions";
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

const mapStateToProps = store => {
    return {
        community_comments: store.community_comments
    };
};

CommentComponent = connect(mapStateToProps, null)(CommentComponent);

export default CommentComponent;