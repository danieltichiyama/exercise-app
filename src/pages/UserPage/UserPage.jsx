import React, { Component } from "react";
import { connect } from "react-redux";
import { actionLoadUser, actionsLogout } from "../../actions";
import styles from "./UserPage.module.scss";
import moment from "moment";
import { Link } from "react-router-dom";
import defaultPicture from "../../imgs/default-profile-icon.png";
import Wave from "./wave";

class UserPage extends Component {
  constructor(props) {
    super(props);
    let getId = localStorage.getItem("session");
    let id = JSON.parse(getId);

    this.state = {
      id
    };
  }

  componentDidMount() {
    this.props.dispatchLoadUser(this.state.id.id);
  }

  handleLogoutClick = () => {
    this.props.dispatchLogout();
    this.props.history.push("/authorization");
  };

  render() {
    //change date format
    let birthDate = moment(this.props.users.birth_date)
      .utc()
      .format("MM/DD/YYYY");

    //convert cm to ft+in
    let convertHeight = this.props.users.height * 0.0328084;
    let feet = Math.floor(convertHeight);
    let inches = Math.round((convertHeight - feet) * 12);

    //convert kg to lbs
    let convertWeight = Math.round(this.props.users.weight * 2.205);

    return (
      <div className={styles.UserPage}>
        <Wave />
        <div className={styles.body}>
          <div className={styles.topProfile}>
            <h1>User Profile</h1>

            <div className={styles.profilePic}>
              <img src={defaultPicture} alt="" />
            </div>

            <div className={styles.name}>
              <h2>{this.props.users.name}</h2>
            </div>

            <div className={styles.userTier}>
              <h3>USER TIER</h3>
              <p>
                {this.props.users.user_tier_id &&
                  this.props.users.user_tier_id.tier}
              </p>
            </div>
          </div>

          <div className={styles.bottomProfile}>
            <div className={styles.rows}>
              <h3>BIRTH DATE</h3>
              <p>{birthDate}</p>
            </div>

            <div className={styles.rows}>
              <h3>WEIGHT</h3>
              <p>{convertWeight} lbs</p>
            </div>

            <div className={styles.rows}>
              <h3>HEIGHT</h3>
              <p>
                {feet} ft. {inches} in.{" "}
              </p>
            </div>

            <div className={styles.rows}>
              <h3>GENDER</h3>
              <p>
                {this.props.users.gender_id &&
                  this.props.users.gender_id.gender}
              </p>
            </div>

            <div className={styles.rows}>
              <h3>ACTIVITY LEVEL</h3>
              <p>
                {this.props.users.activity_level_id &&
                  this.props.users.activity_level_id.activity_level}
              </p>
            </div>

            <div className={styles.rows}>
              <h3>GOAL</h3>
              <p>{this.props.users.goal_id && this.props.users.goal_id.goal}</p>
            </div>
            <div className={styles.options}>
              <button
                onClick={this.handleLogoutClick}
                className={styles.button}
              >
                Logout
              </button>
              <button className={styles.button}>
                <Link
                  to={location => ({
                    ...location,
                    pathname: `/user/${this.state.id.id}/edit`
                  })}
                >
                  Edit
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    users: store.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadUser: id => {
      return dispatch(actionLoadUser(id));
    },
    dispatchLogout: () => {
      return dispatch(actionsLogout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
