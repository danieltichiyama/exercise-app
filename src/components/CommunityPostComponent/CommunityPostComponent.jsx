import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionsLoadComments } from "../../actions";
import CommentComponent from "../CommentComponent/CommentComponent";
import styles from './CommunityPostComponent.module.scss';

class CommunityPostComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComments: false,
        }
    }

    // componentDidUpdate(prevProps, prevState, snapShot) {
    //     this.setState({})
    // }

    handleLoadComments = () => {
        if (this.state.showComments === false) {
            this.props.dispatchLoadComments(this.props.id);
            return this.setState({ showComments: true });
        } else {
            return this.setState({ showComments: false });
        }
    };

    render() {
        console.log("PROPS in community post component: ", this.state)
        return (
            < div className={styles.post}>
                <h3>Title: {this.props.title}</h3>
                <h4>Body: {this.props.body}</h4>
                <h4>Exercise: {this.props.exercise_id.name}</h4>
                <h4>Posted by: {this.props.user_id.name}</h4>
                ￼
                <button onClick={this.handleLoadComments}>Comments</button>

                {this.state.showComments ?
                    <ul>
                        {this.props.community_comments.map(comment => {
                            return (
                                <CommentComponent
                                    key={comment.id}
                                    user={comment.user_id.name}
                                    body={comment.comment_body}
                                />
                            )
                        })}
                    </ul> : null}
            </div >
        );
    }
};

const mapStateToProps = store => {
    return {
        community_comments: store.community_comments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchLoadComments: (data) => {
            return dispatch(actionsLoadComments(data))
        }
    };
};

CommunityPostComponent = connect(mapStateToProps, mapDispatchToProps)(CommunityPostComponent);

export default CommunityPostComponent;