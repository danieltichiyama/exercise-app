import {
  LOAD_ACTIVITIES,
  REGISTER,
  LOGIN,
  LOGOUT,
  LOAD_POSTS,
  FOOD_SEARCH,
  FOOD_NUTRIENT_SEARCH,
  CLEAR,
  LOAD_USER,
  GET_DIARY_DATA,
  DELETE_COMMENT,
  ADD_COMMENT,
  ADD_FOOD
} from "../actions";

const initialStore = {
  foods: [],
  activity_levels: [],
  community_posts: [],
  display: "meal",
  diaryData: [],
  users: [],
  isLoggedIn: false,
  addFood: {},
  meal_type_id: 1
};

let reducer = (store = initialStore, action) => {
  console.log("action.payload: ", action.payload);

  switch (action.type) {
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

    case LOAD_USER:
      return Object.assign({}, store, { users: action.payload });

    case GET_DIARY_DATA:
      return Object.assign({}, store, { diaryData: action.payload });

    case ADD_COMMENT:
      return store;

    case DELETE_COMMENT:
      return store;

    case CLEAR:
      return Object.assign({}, store, { foods: action.payload });

    default:
      return store;

    case ADD_FOOD:
      return Object.assign({}, store, { addFood: action.payload });
  }
};

export default reducer;
