import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsLoadBodyParts } from "../../actions";
import BodyPartComponent from "../../components/BodyPartComponent/BodyPartComponent";
import { Link } from "react-router-dom";


class ExercisePage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.props.dispatchLoadBodyParts();
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        Exercise Page
          {this.props.bodyparts.map(bodypart => {
          return (
            <Link to="/exercise/list">
              <BodyPartComponent
                key={bodypart.id}
                id={bodypart.id}
                bodypart_name={bodypart.bodypart}
                muscle_group={bodypart.muscle_group_id.muscle_group}
              />
            </Link>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    bodyparts: store.bodyparts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadBodyParts: () => {
      return dispatch(actionsLoadBodyParts());
    }
  };
};

ExercisePage = connect(mapStateToProps, mapDispatchToProps)(ExercisePage);

export default ExercisePage;
