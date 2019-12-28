import React, { Component } from "react";
import CommentComponent from "../CommentComponent/CommentComponent";
import AddCommentComponent from "../AddCommentComponent/AddCommentComponent";
import styles from "./CommunityPostComponent.module.scss";
import moment from "moment";

import defaultPicture from "../../imgs/default-profile-icon.png";

class CommunityPostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: `${this.props.community_comment_id.length} comments`,
      showComments: false
    };
  }

  handleLoadComments = e => {
    e.preventDefault();
    if (this.state.showComments === false) {
      return this.setState({ buttonValue: "hide", showComments: true });
    } else {
      return this.setState({
        buttonValue: `${this.props.community_comment_id.length} comments`,
        showComments: false
      });
    }
  };

  render() {
    let { title, body, user_id } = this.props;
    return (
      <div className={styles.CommunityPost}>
        <div className={styles.top}>
          <div className={styles.profilePic}>
            <img
              className={styles.profilePicImage}
              src={defaultPicture}
              alt="profile"
            />
          </div>
          <div className={styles.postInfo}>
            <div className={styles.postHeader}>{title}</div>
            <div className={styles.postedBy}>
              {user_id.name}{" "}
              <span className={styles.timestamp}>
                {" "}
                posted {moment(this.props.timestamp).fromNow()}
              </span>
            </div>
            <div className={styles.postBody}>{body}</div>
          </div>
        </div>
        <div className={styles.commentButton}>
          <button
            className={styles.showComments}
            onClick={this.handleLoadComments}
          >
            {this.state.buttonValue}
          </button>
        </div>
        {this.state.showComments ? (
          <ul className={styles.commentSection}>
            {this.props.community_comment_id.map(comment => {
              return (
                <CommentComponent
                  key={comment.id}
                  id={comment.id}
                  user={comment.user_id.name}
                  userID={comment.user_id.id}
                  body={comment.comment_body}
                  user_goal={comment.user_id.goal_id.goal}
                  timestamp={comment.created_at}
                />
              );
            })}
            <AddCommentComponent id={this.props.id} />
          </ul>
        ) : null}
      </div>
    );
  }
}

export default CommunityPostComponent;
