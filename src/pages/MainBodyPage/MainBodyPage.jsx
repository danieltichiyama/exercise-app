import React from "react";
import Routes from "../../Routes";
import styles from "./MainBodyPage.module.scss";

const MainBodyPage = () => {
  return (
    <div className={styles.routes}>
      <Routes></Routes>
    </div>
  );
};

export default MainBodyPage;
