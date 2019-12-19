import React, { Component } from "react";
import 
import styles from "../DeleteFoodButtonComponent/DeleteFoodButtonComponent.module.scss";

class DeleteFoodButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDeleteFood = e => {
    this.props.dispatchDeleteFood(this.props.id);
    // loadFoods?
  };

  render() {
    return (
      <div>
        <button className={styles.deleteButton} onClick={this.handleDeleteFood}>
          x
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
      
  };
};

DeleteFoodButtonComponent = connect(
  null,
  mapDispatchToProps
)(DeleteFoodButtonComponent);

export default DeleteFoodButtonComponent;
