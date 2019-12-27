import React from "react";

const Wave = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    width="100%"
    height="350px"
    style={{ position: "absolute", zIndex: -1 }}
  >
    <path
      fill="#04c9b5"
      fillOpacity="1"
      d="M0,224L60,234.7C120,245,240,267,360,256C480,245,600,203,720,192C840,181,960,203,1080,218.7C1200,235,1320,245,1380,250.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    ></path>
  </svg>
);

export default Wave;
