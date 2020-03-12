import {
  FETCH_EVENTS_REQ,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILS,
  CREATE_EVENTS_REQ,
  CREATE_EVENTS_SUCCESS,
  CREATE_EVENTS_FAIL
} from "./actions";

const initialState = {
  allEvents: [],
  isLoadingEvent: false,
  isCreatingEvent: false
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_REQ:
      return {
        ...state,
        isLoadingEvent: true
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        allEvents: action.payload,
        isLoadingEvent: false
      };

    case FETCH_EVENTS_FAILS:
      return {
        ...state,
        isLoadingEvent: false
      };
    case CREATE_EVENTS_REQ:
      return {
        ...state,
        isCreatingEvent: true
      };
    case CREATE_EVENTS_SUCCESS:
      return {
        ...state,
        isCreatingEvent: false
      };
    case CREATE_EVENTS_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default adminReducer;
