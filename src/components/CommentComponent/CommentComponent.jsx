import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsDeleteComment, actionsLoadPosts } from "../../actions";
import styles from "./CommentComponent.module.scss";

class CommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDeleteComment = e => {
    e.preventDefault();
    //delete comment needs user authentication so a user can ONLY delete their post (dispatchDeleteComment will need more paramter passed in)
    //right now anyone can delete any comment
    this.props.dispatchDeleteComment(this.props.id);
    this.props.dispatchLoadPosts();
  };

  render() {
    if (this.props.userID === JSON.parse(localStorage.getItem("session")).id) {
      return (
        <div className={styles.comments}>
          <div className={styles.deleteButton}>
            <button onClick={this.handleDeleteComment}>x</button>
          </div>
          <span className={styles.userName}>{this.props.user}</span> |{" "}
          <span>Goal: {this.props.user_goal}</span>
          <div className={styles.commentBody}>{this.props.body}</div>
        </div>
      );
    } else {
      return (
        <div className={styles.comments}>
          <div>
            <span className={styles.userName}>{this.props.user}</span> | Goal:{" "}
            <span>{this.props.user_goal}</span>
          </div>
          <div className={styles.commentBody}>{this.props.body}</div>
          {/* {this.props.body} || By: {this.props.user} || User's goal:{" "}
          {this.props.user_goal} */}
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchDeleteComment: data => {
      return dispatch(actionsDeleteComment(data));
    },
    dispatchLoadPosts: () => {
      return dispatch(actionsLoadPosts());
    }
  };
};

CommentComponent = connect(null, mapDispatchToProps)(CommentComponent);

export default CommentComponent;
