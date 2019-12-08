import React, { Component } from 'react';
import CommentComponent from "../CommentComponent/CommentComponent";
import AddCommentComponent from "../AddCommentComponent/AddCommentComponent";
import styles from './CommunityPostComponent.module.scss';

class CommunityPostComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonValue: "<3",
            showComments: false,
        };
    };

    handleLoadComments = (e) => {
        e.preventDefault();
        if (this.state.showComments === false) {
            return this.setState({ buttonValue: "< / 3", showComments: true });
        } else {
            return this.setState({ buttonValue: "<3", showComments: false });
        };
    };

    render() {
        let { title, body, exercise_id, user_id } = this.props.post
        return (
            < div className={styles.post}>
                <h3>Title: {title}</h3>
                <h4>Body: {body}</h4>
                <h4>Exercise: {exercise_id.name}</h4>
                <h4>Posted by: {user_id.name}</h4>￼
                <button onClick={this.handleLoadComments}>{this.state.buttonValue}</button>
                <AddCommentComponent />

                {this.state.showComments ?
                    <ul>
                        {this.props.post.community_comment_id.map(comment => {
                            return (
                                <CommentComponent
                                    key={comment.id}
                                    user={comment.user_id.name}
                                    body={comment.comment_body}
                                    user_goal={comment.user_id.goal_id.goal}
                                />
                            )
                        })}
                    </ul> : null}
            </div >
        );
    }
};

export default CommunityPostComponent;