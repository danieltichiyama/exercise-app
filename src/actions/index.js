import Axios from "axios";

export const LOAD_ACTIVITIES = "LOAD_ACTIVITIES";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const actionsLoadActivity = () => async dispatch => {
  await Axios.get("/api/activity_levels")
    .then(response => {
      return dispatch({
        type: LOAD_ACTIVITIES,
        payload: response
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const actionsLoginSubmit = data => async dispatch => {
  console.log("actionsLoginSubmit");
  console.log("data", data);
  await Axios.post("/api/auth/login", data)
    .then(response => {
      console.log("response", response);
      return dispatch({
        type: LOGIN,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
