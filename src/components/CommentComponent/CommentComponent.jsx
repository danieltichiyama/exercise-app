import React from "react";
import styles from "./CommentComponent.module.scss";

const CommentComponent = function (props) {
    console.log("props in comment component: ", props)
    return (
        < div className={styles.comments}>
            {/* {props.body} */}
            Comment access by using props.body by: {props.user}
        </div >
    )
}

export default CommentComponent;