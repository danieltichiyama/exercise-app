import { LOAD_ACTIVITIES, REGISTER, LOGIN, LOGOUT, LOAD_POSTS, LOAD_COMMENTS } from "../actions";

const initialStore = {
  activity_levels: [],
  community_posts: [],
  community_comments: [],
  isLoggedIn: false
};

let reducer = (store = initialStore, action) => {
  console.log("Reducer: ", action.payload);

  switch (action.type) {
    case LOAD_ACTIVITIES:
      return Object.assign({}, store, { activity_levels: action.payload });

    case REGISTER:
      return Object.assign({}, store, {
        registeredUserEmail: action.payload.formInfo.email
      });

    case LOGIN:
      let { email, id, user_status_id } = action.payload.session;
      let session = Object.assign(
        {},
        { email: email, id: id, user_status_id: user_status_id }
      );
      localStorage.setItem("session", JSON.stringify(session));
      return Object.assign({}, store, { isLoggedIn: true });

    case LOGOUT:
      localStorage.removeItem("session");
      return Object.assign({}, store, { isLoggedIn: false });

    case LOAD_POSTS:
      return Object.assign({}, store, { community_posts: action.payload });

    case LOAD_COMMENTS:
      return Object.assign({}, store, { community_comments: action.payload });

    default:
      return store;
  }
};

export default reducer;
