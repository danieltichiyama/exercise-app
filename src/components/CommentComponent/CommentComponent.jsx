import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsDeleteComment, actionsLoadPosts } from "../../actions";
import styles from "./CommentComponent.module.scss";
import moment from "moment";

class CommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDeleteComment = e => {
    e.preventDefault();
    this.props.dispatchDeleteComment(this.props.id);
    this.props.dispatchLoadPosts();
  };

  render() {
    if (this.props.userID === JSON.parse(localStorage.getItem("session")).id) {
      return (
        <div className={styles.comments}>
          <div className={styles.deleteButton}>
            <button className={styles.xButton} onClick={this.handleDeleteComment}>x</button>
          </div>
          <div className={styles.title}>
            <span className={styles.userName}>{this.props.user}</span>
            <span className={styles.timestamp}>{moment(this.props.timestamp).fromNow()}</span>
          </div>
          <div className={styles.commentBody}>{this.props.body}</div>
        </div>
      );
    } else {
      return (
        <div className={styles.comments}>
          <div className={styles.title}>
            <span className={styles.userName}>{this.props.user}</span>
            <span className={styles.timestamp}>{moment(this.props.timestamp).fromNow()}</span>
          </div>
          <div className={styles.commentBody}>{this.props.body}</div>
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
