import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./RegisterComponent.module.scss";
import { actionsFilterEmails, actionsRegister } from "../../actions";
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      height: "",
      weight: 0,
      activity_level_id: 0,
      gender_id: 0,
      user_tier_id: 1,
      goal_id: 0,
      birthYear: '',
      birthMonth: '',
      birthDay: '',
      birth_date: '',
      heightType: 'imperial',
      weightType: 'imperial',
      emailPasswordSelect: true,
      heightWeightBirthdaySelect: false,
      genderSelect: false,
      activityLevelSelect: false,
      goalSelect: false
    };
  }
  
  handleInput = event => {
    const { value, name } = event.target;
    const state = { ...this.state };
    state[name] = value;
    this.setState(state);
  };

  handleLoginClick = () => {
    return this.props.isRegistered();
  };

  handleContinueClick = async (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.password){
      alert("Please fill in all fields");
      return false;
    };

    let emailObj = { email: this.state.email };
    await this.props.dispatchFilterEmails(emailObj)
    if ((typeof this.props.filteredEmails) === "object"){
      alert("Email is already registered with us");
      return false;
    };
    
    if (!this.validateEmail(this.state.email)){
      alert("Please enter a valid email address");
      return false;
    };
    if (this.state.password !== this.state.confirm_password){
      alert("Passwords do not match.");
      return false;
    };
    if (this.state.password.length < 6){
      alert("Password must be at least 6 characters long.");
      return false;
    };

    this.setState({
      emailPasswordSelect: false,
      heightWeightBirthdaySelect: true
    })
  };

  handleOnChangeHeight = (e) => {
    // eslint-disable-next-line
    const reg = /^[0-9\b\'\"]+$/;
    // if value is not blank, then test the regex
    if (!reg.test(e.target.value)) {
      e.target.value = e.target.value.slice(0, -1);
    } else {
      this.setState({ height: e.target.value });
    }
  }

  handleOnChangeWeight = (e) => {
    const reg = /^[0-9\b]+$/;
    // if value is not blank, then test the regex
    if (!reg.test(e.target.value)) {
      e.target.value = e.target.value.slice(0, -1);
    } else {
      this.setState({ weight: e.target.value })
    }
  }

  handleRegister = e => {
    e.preventDefault();
    if(!this.state.goal_id){
      alert('Please pick one');
      return false;
    };
    let formData = { ...this.state };
    delete formData.heightType;
    delete formData.weightType;
    delete formData.birthDay;
    delete formData.birthMonth;
    delete formData.birthYear;
    delete formData.confirm_password;
    delete formData.emailPasswordSelect;
    delete formData.heightWeightBirthdaySelect;
    delete formData.genderSelect;
    delete formData.activityLevelSelect;
    delete formData.goalSelect;
    this.props.dispatchRegister(formData);
    this.props.isRegistered();
    return this.setState({
      emailPasswordSelect:true,
      heightWeightBirthdaySelect: false,
      genderSelect: false,
      activityLevelSelect: false,
      goalSelect: false
    }, () => {
      if (this.props.registerSuccess){
        alert("You have been registered!")
        return true;
      }
    })
  };

  handleNext0 = (e) => {
    e.preventDefault();
    if (!this.state.height || !this.state.weight || !this.state.birth_date){
      alert("Please fill in all fields")
      return false;
    }
    let height = this.state.height;
    if (this.state.heightType === "imperial"){
      height = height.split("'");
      let intArr = height.map(num => {
        return num = parseInt(num);
      })
      this.setState({ height: Math.floor(((intArr[0] * 12) + intArr[1]) * 2.54 )});
    }

    if(this.state.weightType === 'imperial'){
      let weight = this.state.weight;
      this.setState({ weight: weight /= 2.205 });
    }

    this.setState({
      heightWeightBirthdaySelect: false,
      genderSelect: true,
      activityLevelSelect: false,
      goalSelect: false
    })
  }

  handleNext1 = (e) => {
    e.preventDefault();
    if(!this.state.gender_id){
      alert('Please pick one');
      return false;
    };
    this.setState({
      heightWeightBirthdaySelect: false,
      genderSelect: false,
      activityLevelSelect: true,
      goalSelect: false
    })
  }

  handleNext2 = (e) => {
    e.preventDefault();
    if(!this.state.activity_level_id){
      alert('Please pick one');
      return false;
    };
    this.setState({
      heightWeightBirthdaySelect: false,
      genderSelect: false,
      activityLevelSelect: false,
      goalSelect: true
    })
  }

  handleHeightType = (e) => {
    this.setState({ heightType: e.target.value });
  }

  handleWeightType = (e) => {
    this.setState({ weightType: e.target.value });
  }

  handleKeyUpHeight = (e) => {
    if (this.state.heightType === 'metric') {
      return false;
    } else if (this.state.heightType === 'imperial'){
      if (e.target.value.length === 1 && e.keyCode === 8){
        e.target.value = '';
      } else if (e.target.value.length === 4 && e.keyCode === 8){ 
        e.target.value = e.target.value.slice(0, 3);
      } else if (e.target.value.length === 1 && !(isNaN(parseInt(e.target.value)))){
        e.target.value += "'";
      } else if (e.target.value.length === 4 && !(isNaN(parseInt(e.target.value)))){
        e.target.value += '"'
        this.setState({ height: e.target.value });
      } else if (e.target.value.length > 5){
        e.target.value = e.target.value.slice(0, -(e.target.value.length - 5));
      }
    } else {
      return false;
    }
  }

  validateEmail = (email) => {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(email);
  }

  render() {
    return (
      <div className={styles.RegisterComponent}>
        {this.state.emailPasswordSelect ? (
        <div>  
          <h1>register</h1>
          <form onSubmit={this.handleContinueClick}> 
            <ul>
              {/* name */}
              <li className={styles.form_li}>
                <div className={styles.imgContainer}>
                  <img
                    src="https://image.flaticon.com/icons/svg/74/74472.svg"
                    alt="name"
                    className={styles.login_icon_img}
                  />
                </div>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInput}
                  placeholder="Your name"
                  className={styles.form_input}
                />
              </li>
              {/* email */}
              <li className={styles.form_li}>
                <div className={styles.imgContainer}>
                  <img
                    src="https://image.flaticon.com/icons/svg/25/25236.svg"
                    alt="email"
                    className={styles.login_icon_img}
                  />
                </div>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInput}
                  placeholder="average.joe@fitness.com"
                  className={styles.form_input}
                />
              </li>
              {/* password */}
              <li className={styles.form_li}>
                <div className={styles.imgContainer}>
                  <img
                    src="https://image.flaticon.com/icons/svg/25/25239.svg"
                    alt="password"
                    className={styles.login_icon_img}
                  />
                </div>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                  placeholder="Password (must be 8-20 characters)"
                  className={styles.form_input}
                />
              </li>
              {/* confirm password */}
              <li className={styles.form_li}>
                <div className={styles.imgContainer}>
                  <img
                    src="https://image.flaticon.com/icons/svg/25/25239.svg"
                    alt="password"
                    className={styles.login_icon_img}
                  />
                </div>
                <input
                  type="password"
                  name="confirm_password"
                  value={this.state.confirm_password}
                  onChange={this.handleInput}
                  placeholder="Confirm your password"
                  className={styles.form_input}
                />
              </li>
            </ul>

            <button onClick={() => this.handleContinueClick} className={styles.login_button}>
              get started
            </button>
          </form>

          <div className={styles.options}>
            <div className={styles.additionalOptions}>
              <div className={styles.notAMember}>
                <p>
                  Already a member?{" "}
                  <span
                    className={styles.options_span}
                    onClick={this.handleLoginClick}
                  >
                    Sign in
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        ) : (
          <div className={styles.RegisterSurveyComponent}>
        <h1>about me</h1>
        <form>
          {this.state.heightWeightBirthdaySelect ? (
          <>
            <ul>
              <li className={styles.form_li}>
                Height: 
                <input 
                  className={styles.form_input}    
                  type="text"
                  name="height"
                  onChange={this.handleOnChangeHeight}
                  onKeyUp={this.handleKeyUpHeight}
                /> 
                <select className={styles.heightWeightSelector} name="heightSelector" onChange={this.handleHeightType}>
                  <option value="imperial">ft</option>
                  <option value="metric">cm</option>
                </select>
              </li>
              <li className={styles.form_li}>
                Weight: 
                <input 
                  className={styles.form_input}
                  type="text"
                  name="weight"
                  onChange={this.handleOnChangeWeight}
                />
                <select className={styles.heightWeightSelector} name="weightSelector" onChange={this.handleWeightType}>
                  <option value="imperial">lbs</option>
                  <option value="metric">kgs</option>
                </select>
              </li>
              <li className={styles.form_bday}>
                <label>Birthday:</label> 
                <YearPicker
                  defaultValue={'Year'}
                  start={1900}
                  end={2019}
                  reverse
                  required={true}
                  value={this.state.year}
                  // mandatory
                  onChange={(year) => {
                    this.setState({ birthYear: year}, () => {
                      this.setState({ birth_date: `${this.state.birthYear}-${this.state.birthMonth}-${this.state.birthDay}` });
                    });
                  }}
                  id={'year'}
                  name={'year'}
                  classes={styles.birthdaySelector}
                  optionClasses={'option classes'}
                />
                <MonthPicker
                  defaultValue={'Month'}
                  // mandatory if end={} is given in YearPicker
                  endYearGiven
                  // mandatory
                  year={this.state.year}
                  // default is false
                  required={true}
                  // mandatory
                  value={this.state.month}
                  // mandatory
                  onChange={(month) => {
                    let birthMonth = (parseInt(month) + 1).toString();
                    if(birthMonth.length === 1){
                      birthMonth = '0' + birthMonth; 
                    }
                    this.setState({ birthMonth }, () => {
                      this.setState({ birth_date: `${this.state.birthYear}-${this.state.birthMonth}-${this.state.birthDay}` });
                    });
                  }}
                  id={'month'}
                  name={'month'}
                  classes={styles.birthdaySelector}
                  optionClasses={'option classes'}
                />
                <DayPicker
                  defaultValue={'Day'}
                  // mandatory
                  year={this.state.birthYear}
                  // mandatory
                  month={this.state.birthMonth}
                  // mandatory if end={} is given in YearPicker
                  endYearGiven
                  // default is false
                  required={true}
                  // mandatory
                  value={this.state.day}
                  // mandatory
                  onChange={(day) => {
                    let birthDay = day;
                    if (birthDay.length === 1){
                      birthDay = "0" + day;
                    }
                    this.setState({ birthDay: birthDay }, () => {
                      this.setState({ birth_date: `${this.state.birthYear}-${this.state.birthMonth}-${this.state.birthDay}` });
                    });
                  }}
                  id={'day'}
                  name={'day'}
                  classes={styles.birthdaySelector}
                  optionClasses={'option classes'}
                />
              </li>
            </ul>
            <br/>
            <button className={styles.registerButton} onClick={this.handleNext0}>
              Next
            </button>
          </>
        ) : ("")}

        <div className={styles.radioContainer}>
        {this.state.genderSelect ? (
          <>
            <h2>Gender</h2>
            <ul className={styles.list}>

              <li>
                <input
                  className={styles.radioButton}
                  id="male"
                  type="radio"
                  name="gender"
                  value="1"
                  onClick={(e) => {
                    this.setState({ gender_id: e.target.value });
                  }}
                />
                <label htmlFor="male">Male</label>
              </li>
              <li>
                <input
                  className={styles.radioButton} 
                  id="female"
                  type="radio"
                  name="gender"
                  value="2"
                  onClick={(e) => {
                    this.setState({ gender_id: e.target.value });
                  }}
                />
                <label htmlFor="female">Female</label>
              </li>
              <li>
                <input
                  className={styles.radioButton} 
                  id='other'
                  type="radio"
                  name="gender"
                  value="3"
                  onClick={(e) => {
                    this.setState({ gender_id: e.target.value });
                  }}
                />
                <label htmlFor="other">Other</label>
              </li>
            </ul>
            <button className={styles.registerButton} onClick={this.handleNext1}>
              Next
            </button>
          </>
        ) : ('')}

        {this.state.activityLevelSelect ? (
          <>
            <h2>Activity Level</h2>
            <li>
              <input 
                id="sedentary"
                type="radio"
                name="activityLevel"
                value="1"
                onClick={(e) => {
                  this.setState({ activity_level_id: e.target.value });
                }}
              />
              <label htmlFor="sedentary">Sedentary</label>
            </li>
            <li>
              <input 
                id="light"
                type="radio"
                name="activityLevel"
                value="2"
                onClick={(e) => {
                  this.setState({ activity_level_id: e.target.value });
                }}
              />
              <label htmlFor="light">Light</label>
            </li>
            <li>
              <input
                id='active'
                type="radio"
                name="activityLevel"
                value="3"
                onClick={(e) => {
                  this.setState({ activity_level_id: e.target.value });
                }}
              />
              <label htmlFor="active">Active</label>
            </li>
            <li>
              <input 
                id="veryActive"
                type="radio"
                name="activityLevel"
                value="4"
                onClick={(e) => {
                  this.setState({ activity_level_id: e.target.value });
                }}
              />
              <label htmlFor="veryActive">Very Active</label>
            </li>
            <button className={styles.registerButton} onClick={this.handleNext2}>
              Next
            </button>
          </>
        ) : ('')}

        {this.state.goalSelect ? (
          <div className={styles.goals}>
            <h2>Goal</h2>
            <li>
              <input 
                id="mildWeightLoss"
                type="radio"
                name="goal"
                value="1"
                onClick={(e) => {
                  this.setState({ goal_id: e.target.value })
                }}
              />
              <label htmlFor="mildWeightLoss">Mild Weight Loss</label>
            </li>
            <li>
              <input 
                id="moderateWeightLoss"
                type="radio"
                name="goal"
                value="2"
                onClick={(e) => {
                  this.setState({ goal_id: e.target.value })
                }}
              />
              <label htmlFor="moderateWeightLoss">Moderate Weight Loss</label>
            </li>
            <li>
              <input 
                id="extremeWeightLoss"
                type="radio"
                name="goal"
                value="3"
                onClick={(e) => {
                  this.setState({ goal_id: e.target.value })
                }}
              />
              <label htmlFor="extremeWeightLoss">Extreme Weight Loss</label>
            </li>
            <li>
              <input 
                id="maintainWeight"
                type="radio"
                name="goal"
                value="4"
                onClick={(e) => {
                  this.setState({ goal_id: e.target.value })
                }}
              />
              <label htmlFor="maintainWeight">Maintain Weight</label>
            </li>
            <li>
              <input 
                id="gainMuscle"
                type="radio"
                name="goal"
                value="5"
                onClick={(e) => {
                  this.setState({ goal_id: e.target.value })
                }}
              />
              <label htmlFor="gainMuscle">Gain Muscle</label>
            </li>
            <li>
              <input 
                id="noGoal"
                type="radio"
                name="goal"
                value="6"
                onClick={(e) => {
                  this.setState({ goal_id: e.target.value })
                }}
              />
              <label htmlFor="noGoal">No Goal</label>
            </li>
            <button className={styles.registerButton} onClick={this.handleRegister}>
              Register
            </button>
          </div>
        ) : ('')}
        </div>
        </form>
      </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    filteredEmails: store.emails,
    isLoggedin: store.isLoggedin,
    registerSuccess: store.registerSuccess
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFilterEmails: data => {
      return dispatch(actionsFilterEmails(data));
    },
    dispatchRegister: data => {
      return dispatch(actionsRegister(data));
    }
  };
};

RegisterComponent = connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)

export default RegisterComponent;