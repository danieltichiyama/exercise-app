import React, { Component } from "react";
import { Link } from "react-router-dom";
import { actionLoadUser, actionsEditUser } from "../../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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
      goal_id: 1,
      selectedWeight: "kgs",
      selectedHeight: "cm",
      editSuccessful: false
    };
  }

  componentDidMount() {
    console.log("props in component did mount", this.props);
    let { dispatchLoadUser, match } = this.props;
    dispatchLoadUser(match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      console.log("component did update");
      return this.setState({
        name: this.props.user.name,
        weight: this.props.user.weight,
        height: this.props.user.height,
        gender_id: this.props.user.gender_id.id,
        activity_level_id: this.props.user.activity_level_id.id,
        user_tier_id: this.props.user.user_tier_id.id,
        goal_id: this.props.user.goal_id.id
      });
    }
  }

  handleChange = event => {
    console.log("event target", event.target.value);
    switch (event.target.name) {
      case "name":
        this.setState({ name: event.target.value });
        break;
      case "weight":
        this.setState({ weight: parseInt(event.target.value) });
        break;
      case "selectedWeight":
        this.setState({ selectedWeight: event.target.value });
        break;
      case "height":
        this.setState({ height: parseInt(event.target.value) });
        break;
      case "selectedHeight":
        this.setState({ selectedHeight: event.target.value });
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

      default:
        return;
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    let { dispatchEditUser, match } = this.props;

    this.setState({ editSuccessful: true });

    if (this.state.selectedWeight === "lbs") {
      this.setState(
        {
          weight: this.state.weight / 2.205
        }
        // ,
        // () => {
        //   const {
        //     name,
        //     weight,
        //     height,
        //     gender_id,
        //     activity_level_id,
        //     user_tier_id,
        //     goal_id
        //   } = this.state;
        //   return dispatchEditUser(match.params.id, {
        //     name,
        //     weight,
        //     height,
        //     gender_id,
        //     activity_level_id,
        //     user_tier_id,
        //     goal_id
        //   });
        // }
      );
    } else {
      this.setState(
        {
          weight: this.state.weight
        }
        // ,
        // () => {
        //   const {
        //     name,
        //     weight,
        //     height,
        //     gender_id,
        //     activity_level_id,
        //     user_tier_id,
        //     goal_id
        //   } = this.state;

        //   return dispatchEditUser(match.params.id, {
        //     name,
        //     weight,
        //     height,
        //     gender_id,
        //     activity_level_id,
        //     user_tier_id,
        //     goal_id
        //   });
        // }
      );
    }

    if (this.state.selectedHeight === "in") {
      this.setState(
        {
          height: this.state.height * 2.54
        },
        () => {
          const {
            name,
            weight,
            height,
            gender_id,
            activity_level_id,
            user_tier_id,
            goal_id
          } = this.state;
          console.log("imperial", this.state);
          return dispatchEditUser(match.params.id, {
            name,
            weight,
            height,
            gender_id,
            activity_level_id,
            user_tier_id,
            goal_id
          });
        }
      );
    } else {
      this.setState(
        {
          height: this.state.height
        },
        () => {
          const {
            name,
            weight,
            height,
            gender_id,
            activity_level_id,
            user_tier_id,
            goal_id
          } = this.state;
          console.log("metric", this.state);
          return dispatchEditUser(match.params.id, {
            name,
            weight,
            height,
            gender_id,
            activity_level_id,
            user_tier_id,
            goal_id
          });
        }
      );
    }
  };

  render() {
    if (this.state.editSuccessful === true) {
      return <Redirect to="/user" />;
    }

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
              // value={this.state.weight}
              placeholder="Change Weight"
              onChange={this.handleChange}
            />
            <select
              name="selectedWeight"
              value={this.state.selectedWeight}
              onChange={this.handleChange}
            >
              <option name="lbs" value="lbs">
                lbs
              </option>
              <option name="kgs" value="kgs">
                kgs
              </option>
            </select>
          </div>

          <div>
            <h3>Height:</h3>
            <input
              type="number"
              name="height"
              // value={this.state.height}
              placeholder="Change height"
              onChange={this.handleChange}
            />
            <select
              name="selectedHeight"
              value={this.state.selectedHeight}
              onChange={this.handleChange}
            >
              <option name="in" value="in">
                in
              </option>
              <option name="cm" value="cm">
                cm
              </option>
            </select>
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
              <option value={5}>Gain Muscle</option>
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
