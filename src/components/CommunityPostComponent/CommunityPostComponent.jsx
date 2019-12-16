import React, { Component } from "react";
import CommentComponent from "../CommentComponent/CommentComponent";
import AddCommentComponent from "../AddCommentComponent/AddCommentComponent";
import styles from "./CommunityPostComponent.module.scss";

class CommunityPostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: "<3",
      showComments: false
    };
  }

  handleLoadComments = e => {
    e.preventDefault();
    if (this.state.showComments === false) {
      return this.setState({ buttonValue: "< / 3", showComments: true });
    } else {
      return this.setState({ buttonValue: "<3", showComments: false });
    }
  };

  render() {
    let { title, body, exercise_id, user_id } = this.props;

    return (
      <div className={styles.post}>
        <div className={styles.postHeader}>{title}</div>
        <div className={styles.postedBy}>{user_id.name}</div>
        <div>{body}</div>
        <button onClick={this.handleLoadComments}>
          {this.state.buttonValue}
        </button>
        <AddCommentComponent id={this.props.id} />
        {this.state.showComments ? (
          <ul>
            {this.props.community_comment_id.map(comment => {
              return (
                <CommentComponent
                  key={comment.id}
                  id={comment.id}
                  user={comment.user_id.name}
                  userID={comment.user_id.id}
                  body={comment.comment_body}
                  user_goal={comment.user_id.goal_id.goal}
                />
              );
            })}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default CommunityPostComponent;
