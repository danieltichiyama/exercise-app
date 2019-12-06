import Axios from "axios";

export const LOAD_ACTIVITIES = "LOAD_ACTIVITIES";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const LOAD_POSTS = "LOAD_POSTS";

export const actionsLoadActivity = () => async dispatch => {
  await Axios.get("/api/activity_levels")
    .then(response => {
      return dispatch({
        type: LOAD_ACTIVITIES,
        payload: response.data
      });
    })
    .catch(err => {
      console.log("Error in actionsLoadActivity: ", err);
    });
};

export const actionsLoginSubmit = data => async dispatch => {
  await Axios.post("/api/auth/login", data)
    .then(response => {
      return dispatch({
        type: LOGIN,
        payload: response.data
      });
    })
    .catch(err => {
      console.log("Error in actionsLoginsubmit: ", err);
    });
};

export const actionsRegister = data => async dispatch => {
  await Axios.post("/api/auth/register", data)
    .then(response => {
      return dispatch({
        type: REGISTER,
        payload: response.data
      });
    })
    .catch(err => {
      console.log("Error in actionsRegister: ", err);
    });
};

export const actionsLogout = () => async dispatch => {
  await Axios.get("/api/auth/logout")
    .then(response => {
      return dispatch({
        type: LOGOUT,
        payload: response.data
      });
    })
    .catch(err => {
      console.log("Error in actionsLogout: ", err);
    });
};

export const actionsLoadPosts = () => async dispatch => {
  await Axios.get("/api/community_posts")
    .then(response => {
      return dispatch({
        type: LOAD_POSTS,
        payload: response.data
      });
    })
    .catch(err => {
      console.log("Error in actionLoadPosts: ", err);
    });
};