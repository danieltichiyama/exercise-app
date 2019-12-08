import React, { Component } from "react";

import DashboardComponent from "../../components/DashboardComponent";
import NewsFeedComponent from "../../components/NewsFeedComponent";

class HomePage extends Component {
  render() {
    return (
      <>
        <DashboardComponent></DashboardComponent>
        <NewsFeedComponent></NewsFeedComponent>
      </>
    );
  }
}

export default HomePage;
