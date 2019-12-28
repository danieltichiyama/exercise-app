import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsAddComment, actionsLoadPosts } from "../../actions";
import styles from "../AddCommentComponent/AddCommentComponent.module.scss";

class AddCommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment_field: ""
    };
  }

  handleCommentInput = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ comment_field: value });
  };

  handleSubmitComment = e => {
    e.preventDefault();
    if (this.state.comment_field !== "") {
      let user_id = JSON.parse(localStorage.getItem("session")).id;
      this.props.dispatchAddComment({
        comment_body: this.state.comment_field,
        user_id: user_id,
        community_post_id: this.props.id
      });
    }
    this.props.dispatchLoadPosts();
    this.setState({ comment_field: "" });
  };

  render() {
    return (
      <form className={styles.AddComment} onSubmit={this.handleSubmitComment}>
        <input
          className={styles.inputBar}
          type="text"
          placeholder="Comment"
          value={this.state.comment_field}
          onChange={this.handleCommentInput}
        />
        <button style={{ borderRadius: "50%" }}>+</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchAddComment: comment => {
      return dispatch(actionsAddComment(comment));
    },
    dispatchLoadPosts: () => {
      return dispatch(actionsLoadPosts());
    }
  };
};

AddCommentComponent = connect(null, mapDispatchToProps)(AddCommentComponent);

export default AddCommentComponent;
