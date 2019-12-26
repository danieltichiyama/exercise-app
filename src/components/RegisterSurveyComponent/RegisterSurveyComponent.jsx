import React, {Component} from "react";
import { connect } from "react-redux";
import { actionsRegister } from "../../actions";
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import styles from "./RegisterSurveyComponent.module.scss"

class RegisterSurveyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: this.props.obj.name,
      email: this.props.obj.email,
      password: this.props.obj.password,
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
      heightWeightBirthdaySelect: true,
      genderSelect: false,
      activityLevelSelect: false,
      goalSelect: false
    }
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
    delete formData.heightWeightBirthdaySelect;
    delete formData.genderSelect;
    delete formData.activityLevelSelect;
    delete formData.goalSelect;
    this.props.dispatchRegister(formData);
    this.props.isRegistered();
    return this.setState({
      heightWeightBirthdaySelect: true,
      genderSelect: false,
      activityLevelSelect: false,
      goalSelect: false
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

  render() { 
    return ( 
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
              <label htmlFor="veryActive">veryActive</label>
            </li>
            <button className={styles.registerButton} onClick={this.handleNext2}>
              Next
            </button>
          </>
        ) : ('')}

        {this.state.goalSelect ? (
          <>
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
          </>
        ) : ('')}
        </div>
        </form>
      </div>
     );
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    dispatchRegister: data => {
      return dispatch(actionsRegister(data));
    }
  };
};

RegisterSurveyComponent = connect(null, mapDispatchToProps)(RegisterSurveyComponent);

export default RegisterSurveyComponent;