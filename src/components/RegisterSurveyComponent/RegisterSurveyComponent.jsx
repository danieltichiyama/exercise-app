import React, {Component} from "react";
import { connect } from "react-redux";
import { actionsRegister } from "../../actions";
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';

class RegisterSurveyComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = { 
      name: this.props.obj.name,
      email: this.props.obj.email,
      password: this.props.obj.password,
      confirm_password: this.props.obj.confirm_password,
      height: "",
      weight: 0,
      activity_level_id: 0,
      gender_id: 0,
      user_tier_id: 1,
      goal_id: 0,
      birthYear: '',
      birthMonth: '',
      birthDay: '',
      birth_date: ''
    }
  }

  handleKeyUpHeight = (e) => {
    const reg = /^[0-9\b]+$/;
    // if value is not blank, then test the regex
    if (!reg.test(e.target.value)) {
      e.target.value = e.target.value.slice(0, -1);
    } else {
      this.setState({ height: e.target.value })
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
    let formData = { ...this.state };
    delete formData.birthDay;
    delete formData.birthMonth;
    delete formData.birthYear;
    delete formData.confirm_password;
    this.props.dispatchRegister(formData);
    return this.props.isRegistered();
  };

  render() { 
    return ( 
      <form>
        <ul>
          <li>
            Height: 
            <input     
              type="text"
              name="height"
              onKeyUp={this.handleKeyUpHeight}
              placeholder="Your Height"
            /> 
            cm
          </li>
          <li>
            Weight: 
            <input 
              type="text"
              name="weight"
              onChange={this.handleOnChangeWeight}
              placeholder="Your Weight"
            />
            kgs
          </li>
        </ul>
        <li>
          Birthday: 
          <YearPicker
            defaultValue={'Select Year'}
            start={1900}
            end={2019}
            reverse
            required={true}
            value={this.state.year}
            // mandatory
            onChange={async (year) => {
              await this.setState({ birthYear: year});
              this.setState({ birth_date: `${this.state.birthYear}-${this.state.birthMonth}-${this.state.birthDay}` });
              // console.log(year);
              console.log(this.state);
            }}
            id={'year'}
            name={'year'}
            classes={'classes'}
            optionClasses={'option classes'}
          />
          <MonthPicker
            defaultValue={'Select Month'}
            // mandatory if end={} is given in YearPicker
            endYearGiven
            // mandatory
            year={this.state.year}
            // default is false
            required={true}
            // mandatory
            value={this.state.month}
            // mandatory
            onChange={async (month) => {
              let birthMonth = (parseInt(month) + 1).toString();
              if(birthMonth.length === 1){
                birthMonth = '0' + birthMonth; 
              }
              await this.setState({ birthMonth });
              this.setState({ birth_date: `${this.state.birthYear}-${this.state.birthMonth}-${this.state.birthDay}` });
              // console.log((parseInt(month) + 1).toString());
              console.log(this.state)
            }}
            id={'month'}
            name={'month'}
            classes={'classes'}
            optionClasses={'option classes'}
          />
          <DayPicker
            defaultValue={'Select Day'}
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
            onChange={async (day) => {
              let birthDay = '';
              if (day.length === 1){
                birthDay = "0" + day;
              }
              await this.setState({ birthDay: birthDay });
              this.setState({ birth_date: `${this.state.birthYear}-${this.state.birthMonth}-${this.state.birthDay}` });
              console.log(this.state);
            }}
            id={'day'}
            name={'day'}
            classes={'classes'}
            optionClasses={'option classes'}
          />
        </li>
        <li>
          Gender:
          <input 
            type="radio"
            name="gender"
            value="1"
            onClick={(e) => {
              this.setState({ gender_id: e.target.value });
            }}
          />
          Male
          <input 
            type="radio"
            name="gender"
            value="2"
            onClick={(e) => {
              this.setState({ gender_id: e.target.value });
            }}
          />
          Female
          <input 
            type="radio"
            name="gender"
            value="3"
            onClick={(e) => {
              this.setState({ gender_id: e.target.value });
            }}
          />
          Other
        </li>
        <li>
          Activity Level:
          <input 
            type="radio"
            name="activityLevel"
            value="1"
            onClick={(e) => {
              this.setState({ activity_level_id: e.target.value });
            }}
          />
          Sedentary
          <input 
            type="radio"
            name="activityLevel"
            value="2"
            onClick={(e) => {
              this.setState({ activity_level_id: e.target.value });
            }}
          />
          Light
          <input 
            type="radio"
            name="activityLevel"
            value="3"
            onClick={(e) => {
              this.setState({ activity_level_id: e.target.value });
            }}
          />
          Active
          <input 
            type="radio"
            name="activityLevel"
            value="4"
            onClick={(e) => {
              this.setState({ activity_level_id: e.target.value });
            }}
          />
          Very Active
        </li>
        <li>
          Goal:
          <input 
            type="radio"
            name="goal"
            value="1"
            onClick={(e) => {
              this.setState({ goal_id: e.target.value })
            }}
          />
          Mild Weight Loss
          <input 
            type="radio"
            name="goal"
            value="2"
            onClick={(e) => {
              this.setState({ goal_id: e.target.value })
            }}
          />
          Moderate Weight Loss
          <input 
            type="radio"
            name="goal"
            value="3"
            onClick={(e) => {
              this.setState({ goal_id: e.target.value })
            }}
          />
          Extreme Weight Loss
          <input 
            type="radio"
            name="goal"
            value="4"
            onClick={(e) => {
              this.setState({ goal_id: e.target.value })
            }}
          />
          Maintain Weight
          <input 
            type="radio"
            name="goal"
            value="5"
            onClick={(e) => {
              this.setState({ goal_id: e.target.value })
            }}
          />
          Gain muscle
          <input 
            type="radio"
            name="goal"
            value="6"
            onClick={(e) => {
              this.setState({ goal_id: e.target.value })
            }}
          />
          No Goal
        </li>
        <button onClick={this.handleRegister}>
          Register
        </button>
      </form>
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

// birth_date: "1999-01-01"