import React from "react";
import ReactPlayer from "react-player";
import styles from "./VideoPlayerComponent.module.scss";

const VideoPlayerComponent = props => {
  const PlayIcon = () => {
    return (
      <div className={styles.PlayIcon}>
        <div className={styles.triangle}></div>
      </div>
    );
  };

  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ScMzIvxBSi4"
        controls
        light={true}
        playIcon={PlayIcon()}
        width="100%"
        height="100%"
        className={styles.reactPlayer}
        config={{
          youtube: {
            playerVars: {
              autoplay: 1,
              fs: 0,
              modestbranding: 1
            }
          }
        }}
      />

      {/* Due to various restrictions, ReactPlayer is not guaranteed to function properly on mobile devices. The YouTube player documentation, for example, explains that certain mobile browsers require user interaction before playing:

The HTML5 <video> element, in certain mobile browsers (such as Chrome and Safari), only allows playback to take place if it’s initiated by a user interaction (such as tapping on the player). */}
    </div>
  );
};

export default VideoPlayerComponent;
