import { LOAD_ACTIVITIES, REGISTER, LOGIN, LOGOUT, LOAD_POSTS, FOOD_SEARCH, FOOD_NUTRIENT_SEARCH, CLEAR } from "../actions";

const initialStore = {
  foods: [],
  activity_levels: [],
  community_posts: [],
  isLoggedIn: false
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
      return Object.assign({}, store, { community_posts: action.payload })

    case FOOD_SEARCH:
      return Object.assign({}, store, { foods: action.payload.foods });
    
    case FOOD_NUTRIENT_SEARCH:
      console.log(action.payload)
      return Object.assign({}, store, { food_nutrients: action.payload });
      
    case CLEAR:
      return Object.assign({}, store, { foods: action.payload } );
    default:
      return store;
  }
};

export default reducer;
