import React from "react";

const Wave = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    width="100%"
    height="350"
    style={{ position: "absolute", zIndex: -1 }}
  >
    <path
      fill="#04c9b5"
      fillOpacity="1"
      d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
    ></path>
  </svg>
);

export default Wave;
