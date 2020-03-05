import {
  FETCH_SLOTS_REQ,
  FETCH_SLOTS_SUCCESS,
  FETCH_SLOTS_FAILS
} from "./actions";

const initialState = {
  allSlots: [],
  isLoadingSlots: false
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SLOTS_REQ:
      return {
        ...state,
        isLoadingSlots: true
      };
    case FETCH_SLOTS_SUCCESS:
      return {
        ...state,
        allSlots: action.payload,
        isLoadingSlots: false
      };

    case FETCH_SLOTS_FAILS:
      return {
        ...state,
        isLoadingSlots: false
      };
    default:
      return state;
  }
};

export default adminReducer;
