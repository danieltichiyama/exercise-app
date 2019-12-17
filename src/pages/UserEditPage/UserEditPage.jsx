import React, { Component } from "react";
import { Link } from "react-router-dom";
import { actionLoadUser, actionsEditUser } from "../../actions";
import { connect } from "react-redux";

class UserEditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      weight: "",
      height: "",
      gender_id: 1,
      activity_level_id: 1,
      user_tier_id: 1,
      goal_id: 1
    };
  }

  componentDidMount() {
    console.log("props in component did mount", this.props);
    let { dispatchLoadUser, match } = this.props;
    dispatchLoadUser(match.params.id);
  }

  handleChange = ({ target }) => {
    console.log("target:::::", target);
    this.setState({ [target.name]: target.value });

    switch (event.target.name) {
      case "name":
        this.setState({ name: event.target.value });
        break;
      case "weight":
        this.setState({ weight: event.target.value });
        break;
      case "height":
        this.setState({ height: event.target.value });
        break;
      case "gender":
        this.setState({ gender_id: parseInt(event.target.value) });
        break;
      case "activity_level":
        this.setState({ activity_level_id: parseInt(event.target.value) });
        break;
      case "goal":
        this.setState({ goal_id: parseInt(event.target.value) });
        break;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <div>
          <h1>Edit User</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3>Name:</h3>
            <input
              type="text"
              name="name"
              placeholder={this.props.user.name}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <h3>Weight:</h3>
            <input
              type="number"
              name="weight"
              placeholder="Change Weight"
              value={this.state.weight}
              onChange={this.handleChange}
            />
            <input type="radio" name="weight" value="lbs" />
            lbs
            <input type="radio" name="weight" value="kg" />
            kg
          </div>

          <div>
            <h3>Height:</h3>
            <input
              type="number"
              name="height"
              placeholder="Change Height"
              value={this.state.height}
              onChange={this.handleChange}
            />
            <input type="radio" name="height" value="in" />
            in
            <input type="radio" name="height" value="cm" />
            cm
          </div>

          <div>
            <h3>Gender:</h3>
            <select
              value={this.state.gender_id}
              name="gender"
              onChange={this.handleChange}
            >
              <option value={1}>Male</option>
              <option value={2}>Female</option>
              <option value={3}>Other</option>
            </select>
          </div>

          <div>
            <h3>Activity Level:</h3>
            <select
              value={this.state.activity_level_id}
              name="activity_level"
              onChange={this.handleChange}
            >
              <option value={1}>Sedentary</option>
              <option value={2}>Light</option>
              <option value={3}>Active</option>
              <option value={4}>Very Active</option>
            </select>
          </div>

          <div>
            <h3>Goals:</h3>
            <select
              value={this.state.goal_id}
              name="goal"
              onChange={this.handleChange}
            >
              <option value={1}>Lose Weight Mild</option>
              <option value={2}>Lose Weight Moderate</option>
              <option value={3}>Lose Weight Extreme</option>
              <option value={4}>Maintain Weight</option>
              <option value={5}>Gain Weight</option>
              <option value={6}>No Goal</option>
            </select>
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>

        <div>
          <button>
            <Link to="/user">Cancel</Link>
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadUser: id => {
      return dispatch(actionLoadUser(id));
    },
    dispatchEditUser: (id, data) => {
      return dispatch(actionsEditUser(id, data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEditPage);
