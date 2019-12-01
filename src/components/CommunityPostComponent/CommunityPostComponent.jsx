import React from 'react';

const CommunityPostComponent = function (props) {
    console.log("Props from CommunnityPost: ", props)
    return (
        < div >
            <h3>Title: {props.title}</h3>
            <h4>Body: {props.body}</h4>
            <h4>Exercise: {props.exercise_id.name}</h4>
            <h4>Posted by: {props.user_id.name}</h4>
        </div >
    )
}

export default CommunityPostComponent;