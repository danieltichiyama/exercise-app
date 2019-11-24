import { LOAD_ACTIVITIES } from "../actions";

const initialStore = {
  activity_levels: []
};

let reducer = (store = initialStore, action) => {
  switch (action.type) {
    case LOAD_ACTIVITIES:
      return Object.assign({}, store, { activity_levels: action.payload.data });

    default:
      return store;
  }
};

export default reducer;
