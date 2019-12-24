import React from "react";
import Routes from "../../Routes";
import styles from "./MainBodyPage.module.scss";

const MainBodyPage = () => {
  return (
    <div className={styles.MainBodyPage}>
      <Routes></Routes>
    </div>
  );
};

// const MainBodyPage = routes => <Route path={Route.path} />;

export default MainBodyPage;
