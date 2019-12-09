import Axios from "axios";

export const LOAD_ACTIVITIES = "LOAD_ACTIVITIES";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const LOAD_POSTS = "LOAD_POSTS";
export const FOOD_SEARCH = "FOOD_SEARCH";
export const FOOD_NUTRIENT_SEARCH = "FOOD_NUTRIENT_SEARCH";
export const CLEAR = "CLEAR";
export const GET_DIARY_DATA = "GET_DIARY_DATA";
export const LOAD_USER = "LOAD_USER";
export const LOAD_FOOD_MEAL_USER = "LOAD_FOOD_MEAL_USER";
export const CHANGE_DATE = "CHANGE_DATE";

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

export const actionFoodSearch = data => async dispatch => {
  await Axios({
    method: "post",
    url: "/api/nutrition",
    headers: {
      "Content-Type": "application/json"
    },
    data
  })
    .then(response => {
      return dispatch({
        type: FOOD_SEARCH,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const actionClear = () => dispatch => {
  dispatch({
    type: CLEAR,
    payload: []
  });
};

export const actionFoodNutrients = fdcId => async dispatch => {
  await Axios.get(`/api/nutrition/${fdcId}`)
    .then(response => {
      return dispatch({
        type: FOOD_NUTRIENT_SEARCH,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const actionsLoadUser = id => async dispatch => {
  await Axios.get(`/api/users/${id}`)
    .then(response => {
      return dispatch({
        type: LOAD_USER,
        payload: response.data
      });
    })
    .catch(err => {
      console.log("Error in actionLoadUser: ", err);
    });
};

export const actionLoadFoodMealUser = id => async dispatch => {
  await Axios.get(`/api/foods_meals_users/${id}`)
    .then(response => {
      return dispatch({
        type: LOAD_FOOD_MEAL_USER,
        payload: response.data
      });
    })
    .catch(err => {
      console.log("Error in actionLoadFoodMealUser", err);
    });
};

export const actionsGetDiaryData = date => async dispatch => {
  let session = JSON.parse(localStorage.getItem("session"));
  await Axios.post("api/foods_meals_users", { date, session })
    .then(response => {
      return dispatch({
        type: GET_DIARY_DATA,
        payload: response.data
      });
    })
    .catch(err => {
      console.log("Error in actionsGetDiaryData: ", err);
    });
};

export const actionsChangeDate = date => async dispatch => {
  console.log("actionsChangeDate is running");

  let UTCdate = date
    .parseZone(date.format())
    .utc()
    .format();
  return dispatch({
    type: CHANGE_DATE,
    payload: UTCdate
  });
};
