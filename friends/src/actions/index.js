import axios from "axios";

// Action Types ---
export const LOADING_START = "LOADING_START";
export const LOADING_SUCCESS = "LOADING_SUCCESS";
export const LOADING_FAILED = "LOADING_FAILED";
// ----------------------------------------------

// Action Creator ---
export const getFriends = () => dispatch => {
  dispatch({ type: LOADING_START });
  axios
    .get("http://localhost:5000/api/friends")
    .then(res => {
      console.log(res);
      dispatch({ type: LOADING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: LOADING_FAILED,
        payload: `${err.response.status} ${err.response.statusText}`
      });
    });
};
