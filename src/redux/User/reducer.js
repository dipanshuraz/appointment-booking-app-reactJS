import {
  FETCH_EVENTS_REQ,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILS
} from "./action";

const initialState = {
  allUserEvents: [],
  isLoadingEvent: false,
  isCreatingEvent: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_REQ:
      return {
        ...state,
        isLoadingEvent: true
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        allUserEvents: action.payload,
        isLoadingEvent: false
      };

    case FETCH_EVENTS_FAILS:
      return {
        ...state,
        isLoadingEvent: false
      };

    default:
      return state;
  }
};

export default userReducer;
