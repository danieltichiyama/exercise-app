import React, {Component} from "react";
import { connect } from "react-redux";
import { actionsRegister } from "../../actions";

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
      weight: "",
      activity_level_id: 0,
      birth_date: "",
      gender_id: 0,
      user_tier_id: 0,
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

    if (e.target.value === '' || reg.test(e.target.value)) {
       this.setState({value: e.target.value})
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
          </li>
        </ul>
        <li>
          <input type="text"/>
        </li>
        <li>
          <input type="text"/>
        </li>
        <li>
          <input type="text"/>
        </li>
        <li>
          <input type="text"/>
        </li>
        <li>
          <input type="text"/>
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