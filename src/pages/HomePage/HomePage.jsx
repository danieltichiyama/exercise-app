import React, { Component } from "react";

import DashboardComponent from "../../components/DashboardComponent";
import NewsFeedComponent from "../../components/NewsFeedComponent";
import styles from "../HomePage/HomePage.module.scss";

class HomePage extends Component {
  render() {
    return (
      <>
        <div className={styles.homePageHeader}>
          <span className={styles.fit}>fit</span>
          <span className={styles.works}>works</span>
        </div>
        <DashboardComponent></DashboardComponent>
        <NewsFeedComponent></NewsFeedComponent>
      </>
    );
  }
}

export default HomePage;
