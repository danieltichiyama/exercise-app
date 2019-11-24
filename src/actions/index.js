import Axios from "axios";

export const LOAD_ACTIVITIES = "LOAD_ACTIVITIES";

export const actionsLoadActivity = () => async dispatch => {
  await Axios.get("/api/activity_levels")
    .then(response => {
      return dispatch({
        type: LOAD_ACTIVITIES,
        payload: response
      });
    })
    .catch(err => {
      console.log(err);
    });
};
