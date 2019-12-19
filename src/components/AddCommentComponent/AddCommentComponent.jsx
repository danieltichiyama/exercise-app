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
    //form validation as long as the comment is not an empty string it is successful
    if (this.state.comment_field !== "") {
      //add comment needs user authentication so only a logged in user can post a comment
      //right now user with an id of 1 is posting all comments

      let user_id = JSON.parse(localStorage.getItem("session")).id;

      console.log("AddCommentComponent, user_id", user_id);
      this.props.dispatchAddComment({
        comment_body: this.state.comment_field,
        user_id: user_id,
        community_post_id: this.props.id
      });
      this.props.dispatchLoadPosts();
      this.setState({ comment_field: "" });
    }
  };

  render() {
    return (
      <form action="">
        <input
          className={styles.inputBar}
          type="text"
          placeholder="Comment"
          value={this.state.comment_field}
          onChange={this.handleCommentInput}
        />
        <button onClick={this.handleSubmitComment}>Submit</button>
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
