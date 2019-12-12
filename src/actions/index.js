import Axios from "axios";

export const LOAD_ACTIVITIES = "LOAD_ACTIVITIES";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const LOAD_POSTS = "LOAD_POSTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const LOAD_COMMENT = "LOAD_COMMENT";
export const FOOD_SEARCH = "FOOD_SEARCH";
export const FOOD_NUTRIENT_SEARCH = "FOOD_NUTRIENT_SEARCH";
export const CLEAR = "CLEAR";
export const GET_DIARY_DATA = "GET_DIARY_DATA";
export const LOAD_USER = "LOAD_USER";
export const LOAD_FOOD_MEAL_USER = "LOAD_FOOD_MEAL_USER";
export const CHANGE_DATE = "CHANGE_DATE";
export const FOOD_VISION = "FOOD_VISION";
export const LOAD_BODY_PART = "LOAD_BODY_PART";

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
      console.log("Error in actionsLoadPosts: ", err);
    });
};

export const actionsAddComment = data => async dispatch => {
  await Axios.post("/api/community_comments", data)
    .then(response => {
      return dispatch({
        type: ADD_COMMENT,
        payload: response.data
      });
    })
    .catch(err => {
      console.log("Error in actionsAddComment: ", err);
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

export const actionFoodVision = data => async dispatch => {
  console.log("DATA: ", data);
  await Axios.post("/api/vision", data).then(response => {
    return dispatch({
      type: FOOD_VISION,
      payload: response.data
    });
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

export const actionLoadUser = id => async dispatch => {
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

export const actionsGetDiaryData = date => async dispatch => {
  let session = JSON.parse(localStorage.getItem("session"));
  await Axios.post("/api/foods_meals_users", { date, session })
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

export const actionsDeleteComment = data => async dispatch => {
  await Axios.delete("/api/community_comments", { data: { data } })
    .then(response => {
      return dispatch({
        type: DELETE_COMMENT,
        payload: response.data
      });
    })
    .catch(err => {
      console.log("Error in actionsDeleteComment: ", err);
    });
};

export const actionsChangeDate = date => async dispatch => {
  return dispatch({
    type: CHANGE_DATE,
    payload: date
  });
};

export const actionsLoadBodyParts = () => async dispatch => {
  await Axios.get("/api/bodyparts")
    .then(response => {
      return dispatch({
        type: LOAD_BODY_PART,
        payload: response.data
      })
    })
    .catch(err => {
      console.log("Error in actionsLoadBodyParts: ", err)
    });
};