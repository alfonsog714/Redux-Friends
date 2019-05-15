import { LOADING_START, LOADING_SUCCESS, LOADING_FAILED } from "../actions";

const initialState = {
  friends: [],
  loading: false,
  error: ""
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        loading: true,
        error: ""
      };

    case LOADING_SUCCESS:
      return {
        ...state,
        loading: false,
        friends: action.payload,
        error: ""
      };

    case LOADING_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
