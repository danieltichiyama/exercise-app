import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionsAddComment, actionsLoadPosts } from "../../actions";
// import styles from "./AddCommentComponent.module.scss";

class AddCommentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment_field: "",
        }
    }

    handleCommentInput = (e) => {
        e.preventDefault();
        const { value } = e.target;
        this.setState({ comment_field: value });
    };

    handleSubmitComment = (e) => {
        e.preventDefault();
        if (this.state.comment_field !== "") {
            this.props.dispatchAddComment({
                comment_body: this.state.comment_field,
                user_id: 1,
                community_post_id: 1
            });
            this.props.dispatchLoadPosts();
            this.setState({ comment_field: "" });
        }
    };

    render() {
        return (
            <form action="">
                <input type="text"
                    placeholder="Comment"
                    value={this.state.comment_field}
                    onChange={this.handleCommentInput}
                />
                <button onClick={this.handleSubmitComment}>Submit</button>
            </form>
        );
    };
};


const mapDispatchToProps = dispatch => {
    return {
        dispatchAddComment: (comment) => {
            return dispatch(actionsAddComment(comment));
        },
        dispatchLoadPosts: () => {
            return dispatch(actionsLoadPosts());
        }
    }
}

AddCommentComponent = connect(null, mapDispatchToProps)(AddCommentComponent);

export default AddCommentComponent;