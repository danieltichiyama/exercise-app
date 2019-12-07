import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionsAddComment } from "../../actions";
// import styles from "./AddCommentComponent.module.scss";

class AddCommentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment_field: ''
        }
    }

    handleCommentInput = (e) => {
        const { value } = e.target;
        this.setState({ comment_field: value });
    };

    handleSubmitComment = () => {
        this.props.dispatchAddComment({ comment_body: this.state.comment_field, user_id: 1, community_post_id: 1 })
    }

    render() {
        return (
            <form action="">
                <input type="text"
                    placeholder="Comments"
                    value={this.state.comment_field}
                    onChange={this.handleCommentInput}
                />
                <input
                    type="hidden"
                    placeholder="Hidden user_id"
                    value="1"
                />
                <input
                    type="hidden"
                    placeholder="Hidden community_post_id"
                    value="1"
                />
                <button onClick={this.handleSubmitComment}>Submit</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchAddComment: (comment) => {
            return dispatch(actionsAddComment(comment));
        }
    }
}

AddCommentComponent = connect(null, mapDispatchToProps)(AddCommentComponent);

export default AddCommentComponent;