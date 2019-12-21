import {
  ADD_COMMENT,
  ADD_FOOD,
  CHANGE_DATE,
  CLEAR,
  DELETE_COMMENT,
  FOOD_NUTRIENT_SEARCH,
  FOOD_SEARCH,
  GET_DIARY_DATA,
  LOAD_ACTIVITIES,
  LOAD_BODY_PARTS,
  LOAD_EXERCISE_LIST,
  LOAD_POSTS,
  LOGIN,
  LOGOUT,
  LOAD_USER,
  FILTER_EMAILS,
  REGISTER,
  FILTER_BODY_PARTS,
  LOAD_SINGLE_EXERCISE,
  DELETE_FOOD
} from "../actions";

import moment from "moment";

const initialStore = {
  activity_levels: [],
  bodyparts: [],
  community_posts: [],
  diaryData: [],
  users: [],
  emails: [],
  isLoggedIn: false,
  exercises: [],
  exerciseInfo: [],
  foods: [],
  foods_meals_users: [],
  addFood: {},
  diaryDate: moment()
    .utc()
    .format("YYYY-MM-D"),
  display: "meal"
};

let reducer = (store = initialStore, action) => {
  switch (action.type) {
    case LOAD_SINGLE_EXERCISE:
      return Object.assign({}, store, { exerciseInfo: action.payload });

    case LOAD_ACTIVITIES:
      return Object.assign({}, store, { activity_levels: action.payload });

    case REGISTER:
      return Object.assign({}, store, {
        registeredUserEmail: action.payload.formInfo.email
      });

    case LOGIN:
      let { id, user_status_id } = action.payload.session;
      let session = Object.assign(
        {},
        { id: id, user_status_id: user_status_id }
      );
      localStorage.setItem("session", JSON.stringify(session));
      return Object.assign({}, store, { isLoggedIn: true });

    case LOGOUT:
      localStorage.removeItem("session");
      return Object.assign({}, store, { isLoggedIn: false });

    case LOAD_POSTS:
      return Object.assign({}, store, { community_posts: action.payload });

    case FOOD_SEARCH:
      return Object.assign({}, store, { foods: action.payload.foods });

    case FOOD_NUTRIENT_SEARCH:
      return Object.assign({}, store, { foods: action.payload });

    case GET_DIARY_DATA:
      return Object.assign({}, store, { diaryData: action.payload });

    case LOAD_USER:
      return Object.assign({}, store, { users: action.payload });

    case CLEAR:
      return Object.assign({}, store, { foods: action.payload });

    case CHANGE_DATE:
      let newMoment = moment.utc(action.payload);
      return Object.assign({}, store, {
        diaryDate: newMoment.format("YYYY-MM-D")
      });

    case LOAD_BODY_PARTS:
      return Object.assign({}, store, { bodyparts: action.payload });

    case LOAD_EXERCISE_LIST:
      return Object.assign({}, store, { exercises: action.payload });

    case FILTER_BODY_PARTS:
      return Object.assign({}, store, { exercises: action.payload });

    case ADD_COMMENT:
      return store;

    case DELETE_COMMENT:
      return store;

    case FILTER_EMAILS:
      return Object.assign({}, store, { emails: action.payload });

    default:
      return store;

    case ADD_FOOD:
      return Object.assign({}, store, { addFood: action.payload });

    case DELETE_FOOD:
      return Object.assign({}, store, { deletedFood: action.payload });
  }
};

export default reducer;
