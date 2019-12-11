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
      birth_date:[],
      gender_id: 0,
      user_tier_id: 1,
      goal_id: 0,
    }
  }

  handleKeyUpHeight = (e) => {
    if (e.target.value.length === 1 && e.keyCode === 8){
      e.target.value = '';
    } else if (e.target.value.length === 4 && e.keyCode === 8){ 
      e.target.value = e.target.value.slice(0, 3)
    } else if (e.target.value.length === 1 && !(isNaN(parseInt(e.target.value)))){
      e.target.value += "'";
    } else if (e.target.value.length === 4 && !(isNaN(parseInt(e.target.value)))){
      e.target.value += '"';
    } else if (e.target.value.length > 5){
      e.target.value = e.target.value.slice(0, -(e.target.value.length - 5));
    }
  }

  handleOnChangeWeight = (e) => {
    const reg = /^[0-9\b]+$/;
    // if value is not blank, then test the regex
    if (!reg.test(e.target.value)) {
      e.target.value = e.target.value.slice(0, -1);
    }
  }

  render() { 
    return ( 
      <form>
        <ul>
          <li>
            <input     
              type="text"
              name="height"
              onKeyUp={this.handleKeyUpHeight}
              placeholder="Your Height"
            /> 
          </li>
          <li>
            <input 
              type="text"
              name="weight"
              onChange={this.handleOnChangeWeight}
              placeholder="Your Weight"
            />
            lbs
          </li>
        </ul>
        <li>
          Birthday
          <YearPicker
            defaultValue={'Select Year'}
            start={1900}
            end={2020}
            reverse
            required={true}
            value={this.state.year}
            // mandatory
            onChange={async (year) => {
                await this.setState({ birth_date: [year]});
                console.log(year);
                console.log(this.state);
            }}
            id={'year'}
            name={'year'}
            classes={'classes'}
            optionClasses={'option classes'}
          />
          <MonthPicker
            defaultValue={'select month'}
            // to get months as numbers
            numeric
            // default is full name
            short
            // default is Titlecase
            caps
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
                this.setState({ month });
                console.log(month);
            }}
            id={'month'}
            name={'month'}
            classes={'classes'}
            optionClasses={'option classes'}
          />
          <DayPicker
            defaultValue={'select day'}
            // mandatory
            year={this.state.year}
            // mandatory
            month={this.state.month}
            // mandatory if end={} is given in YearPicker
            endYearGiven
            // default is false
            required={true}
            // mandatory
            value={this.state.day}
            // mandatory
            onChange={(day) => {
                this.setState({ day });
                console.log(day);
            }}
            id={'day'}
            name={'day'}
            classes={'classes'}
            optionClasses={'option classes'}
          />
        </li>
        <li>
          <select 
            name="gender"
            // onChange={ DO SOMETHING }
          >
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
        </li>
        <li>
          <select
            name="activity_level"
            // onChange={ DO SOMETHING }
          >
            <option value="1">Sedentary</option>
            <option value="2">Light</option>
            <option value="3">Active</option>
            <option value="4">Very Active</option>
          </select>
        </li>
        <li>
            <select 
              name= "goals"
              // onChange={DO SOMETHING}
            >
              <option value="1">mild weight loss</option>
              <option value="2">moderate weight loss</option>
              <option value="3">extreme weight loss</option>
              <option value="4">maintain weight</option>
              <option value="5">muscle gain</option>
              <option value="6">no goal</option>
            </select>
        </li>
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