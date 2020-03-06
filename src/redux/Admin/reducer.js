import {
  FETCH_SLOTS_REQ,
  FETCH_SLOTS_SUCCESS,
  FETCH_SLOTS_FAILS,
  CREATE_SLOT_REQ,
  CREATE_SLOT_SUCCESS,
  CREATE_SLOT_FAIL
} from "./actions";

const initialState = {
  allSlots: [],
  isLoadingSlots: false,
  isCreatingSlot: false
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
    case CREATE_SLOT_REQ:
      return {
        ...state,
        isCreatingSlot: true
      };
    case CREATE_SLOT_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isCreatingSlot: false
      };
    case CREATE_SLOT_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default adminReducer;
