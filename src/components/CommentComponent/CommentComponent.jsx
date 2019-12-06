import React from "react";
import styles from "./CommentComponent.module.scss";

const CommentComponent = function (props) {
    return (
        < div className={styles.comments}>
            {props.body} || By: {props.user} || User's goal: {props.user_goal}
        </div >
    )
}

export default CommentComponent;