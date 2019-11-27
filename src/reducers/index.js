import { LOAD_ACTIVITIES, LOGIN, LOGOUT } from "../actions";

const initialStore = {
  activity_levels: []
};

let reducer = (store = initialStore, action) => {
  switch (action.type) {
    case LOAD_ACTIVITIES:
      return Object.assign({}, store, { activity_levels: action.payload.data });

    case LOGIN:
      let { email, id, user_status_id } = action.payload.session;
      let session = Object.assign(
        {},
        { email: email, id: id, user_status_id: user_status_id }
      );
      localStorage.setItem("session", JSON.stringify(session));
      return Object.assign({}, store);

    case LOGOUT:
      localStorage.removeItem("session");
      return Object.assign({}, store);

    default:
      return store;
  }
};

export default reducer;
