import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./App.module.scss";
import { withRouter } from "react-router";
import NavigationComponent from "../components/NavigationComponent";
import ModalComponent from "../components/ModalComponent"
import MainBodyPage from "../pages/MainBodyPage";
import { actionsLogout } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playground: true,
      showModal: false
    };
  }

  handleLogout = () => {
    return this.props.dispatchLogout();
  };

  handleOpenModal = () => {
    console.log('1');
    return this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    return this.setState({ showModal: false });
  }

  render() {
    return (
      <div className={styles.App} id="app">
        <MainBodyPage {...this.props}></MainBodyPage>
        <NavigationComponent></NavigationComponent>
        <button onClick={this.handleOpenModal}>showModal</button>
        <ModalComponent
          openModal={this.handleOpenModal}
          closeModal={this.handleCloseModal}
          show={this.state.showModal}
        ></ModalComponent>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    isLoggedIn: store.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogout: () => {
      return dispatch(actionsLogout());
    }
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(App);
