import React from "react";
import styles from "./Playground.module.scss";
import VideoPlayerComponent from "../../components/VideoPlayerComponent";

const Playground = props => {
  return (
    <div className={styles.Playground}>
      <p>Pushing and pulling encouraged. Have fun.</p>
      {/* insert playground equipment here. */}
      <VideoPlayerComponent></VideoPlayerComponent>
    </div>
  );
};

export default Playground;
