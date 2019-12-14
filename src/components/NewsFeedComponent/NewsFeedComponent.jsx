import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsLoadPosts } from "../../actions";
import CommunityPostComponent from "../CommunityPostComponent";

class NewsFeedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatchLoadPosts();
  }
  render() {
    return (
      <ul>
        {this.props.community_posts.map(post => {
          return (
            <CommunityPostComponent
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              community_comment_id={post.community_comment_id}
              exercise_id={post.exercise_id}
              user_id={post.user_id}
            />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = store => {
  return {
    community_posts: store.community_posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadPosts: () => {
      return dispatch(actionsLoadPosts());
    }
  };
};

NewsFeedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeedComponent);

export default NewsFeedComponent;
