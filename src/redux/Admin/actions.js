import { fBaseSlots } from "../../fbaseConfig";

export const FETCH_SLOTS_REQ = "FETCH_SLOTS_REQ";
export const FETCH_SLOTS_SUCCESS = "FETCH_SLOTS_SUCCESS";
export const FETCH_SLOTS_FAILS = "FETCG_SLOTS_FAILS";
export const CREATE_SLOT_REQ = "CREATE_SLOT_REQ";
export const CREATE_SLOT_SUCCESS = "CREATE_SLOT_SUCCESS";
export const CREATE_SLOT_FAIL = "CREATE_SLOT_FAIL";

export const fetchSlotsReq = payload => ({
  type: FETCH_SLOTS_REQ,
  payload
});

export const fetchSlotsSuccess = payload => ({
  type: FETCH_SLOTS_SUCCESS,
  payload
});

export const fetchSlotsFails = payload => ({
  type: FETCH_SLOTS_FAILS,
  payload
});

export const fetchSlots = payload => dispatch => {
  dispatch(fetchSlotsReq());
  return fBaseSlots.get().then(query => {
    const slotsArray = [];
    query.forEach(doc => {
      slotsArray.push({ slotId: doc.id, userId: doc.id, ...doc.data() });
    });
    dispatch(fetchSlotsSuccess(slotsArray));
  });
};

export const createSlotReq = payload => ({
  type: CREATE_SLOT_REQ,
  payload
});

export const createSlotSuccess = payload => ({
  type: CREATE_SLOT_SUCCESS,
  payload
});

export const createSlotFail = payload => ({
  type: CREATE_SLOT_FAIL,
  payload
});

export const createSlot = payload => dispatch => {
  dispatch(createSlotReq());
  return fBaseSlots.add(payload).then(res => {
    console.log("created called");
    if (res.id) {
      dispatch(createSlotSuccess(res.status));
    }
  });
};
