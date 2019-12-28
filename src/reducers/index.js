import {
  EDIT_USER,
  ADD_COMMENT,
  ADD_FOOD,
  ADD_WORKOUT,
  CHANGE_DATE,
  CLEAR,
  DELETE_COMMENT,
  DELETE_FOOD,
  FAT_SECRET_FOOD_SEARCH,
  FAT_SECRET_FOOD_NUTRIENT_SEARCH,
  FILTER_BODY_PARTS,
  FILTER_EMAILS,
  FOOD_NUTRIENT_SEARCH,
  FOOD_SEARCH,
  FOOD_VISION,
  GET_DIARY_DATA,
  IMAGE_UPLOAD,
  LOAD_ACTIVITIES,
  LOAD_BODY_PARTS,
  LOAD_EXERCISE_LIST,
  LOAD_POSTS,
  LOAD_SINGLE_EXERCISE,
  LOAD_WORKOUTS,
  LOGIN,
  LOGOUT,
  LOAD_USER,
  NO_PROFILE_PIC,
  PROFILE_PIC,
  REGISTER,
  GET_SMOKE,
  VIDEO_UPLOAD
} from "../actions";

import moment from "moment";

const initialStore = {
  activity_levels: [],
  addFood: {},
  bodyparts: [],
  community_posts: [],
  diaryData: [],
  diaryDate: moment()
    .utc()
    .format("YYYY-MM-D"),
  display: "meal",
  emails: [],
  exerciseInfo: [],
  exercises: [],
  fat_secret_foods: [],
  fat_secret_nutrients: [],
  foods: [],
  food_labels: [],
  foods_meals_users: [],
  hasProfilePic: false,
  images: ['idk'],
  isLoggedIn: false,
  profilePic: "",
  smoke: "",
  users: [],
  videos: [],
  workout: [],
  workouts: []
};

let reducer = (store = initialStore, action) => {
  switch (action.type) {
    case EDIT_USER:
      return Object.assign({}, store, { users: action.payload });

    case GET_SMOKE:
      return Object.assign({}, store, { smoke: action.payload });

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

    case FOOD_VISION:
      return Object.assign({}, store, {
        food_labels: action.payload,
        fat_secret_nutrients: [],
        fat_secret_foods: []
      });

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

    case ADD_FOOD:
      return Object.assign({}, store, { addFood: action.payload });

    case FAT_SECRET_FOOD_SEARCH:
      return Object.assign({}, store, {
        food_labels: [],
        fat_secret_nutrients: [],
        fat_secret_foods: action.payload
      });

    case FAT_SECRET_FOOD_NUTRIENT_SEARCH:
      return Object.assign({}, store, {
        food_labels: [],
        fat_secret_nutrients: action.payload
      });

    case DELETE_FOOD:
      return Object.assign({}, store, { deletedFood: action.payload });

    case ADD_WORKOUT:
      return Object.assign({}, store, { workout: action.payload });

    case LOAD_WORKOUTS:
      let sortedArr = action.payload.sort((a, b) => {
        let aTime = moment(a.created_at).unix();
        let bTime = moment(b.created_at).unix();
        return bTime - aTime;
      });
      return Object.assign({}, store, { workouts: sortedArr });

    case VIDEO_UPLOAD:
      return Object.assign({}, store, { videos: action.payload });

    case IMAGE_UPLOAD:
      return Object.assign({}, store, { images: action.payload });

    case NO_PROFILE_PIC:
      return Object.assign({}, store, { hasProfilePic: false });

    case PROFILE_PIC:
      return Object.assign({}, store, { 
        hasProfilePic: true,
        profilePic: action.payload
      });

    default:
      return store;
  }
};

export default reducer;
