import {
  LOAD_ACTIVITIES,
  REGISTER,
  LOGIN,
  LOGOUT,
  LOAD_POSTS,
  FOOD_SEARCH,
  FOOD_NUTRIENT_SEARCH,
  CLEAR,
  GET_DIARY_DATA,
  LOAD_USER,
  CHANGE_DATE,
  DELETE_COMMENT,
  ADD_COMMENT,
  GET_EMAILS
} from "../actions";
import moment from "moment";

const initialStore = {
  foods: [],
  activity_levels: [],
  community_posts: [],
  diaryData: [],
  users: [],
  emails: [],
  isLoggedIn: false,
  foods_meals_users: [],
  isLoggedIn: false,
  diaryDate: moment()
    .utc()
    .format("YYYY-MM-D"),
  display: "meal"
};

let reducer = (store = initialStore, action) => {
  // console.log(action.payload);

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

    case ADD_COMMENT:
      return store;

    case DELETE_COMMENT:
      return store;

<<<<<<< HEAD
    case CLEAR:
      return Object.assign({}, store, { foods: action.payload });

    case GET_EMAILS:
      return Object.assign({}, store, { emails: action.payload });

=======
>>>>>>> 9d320a1a0fc71b9dfc7208b08d11c5a2fed7e30e
    default:
      return store;

    //   case TOGGLE:
    //     return Object.assign({}, store, { display: action.payload });
  }
};

export default reducer;
