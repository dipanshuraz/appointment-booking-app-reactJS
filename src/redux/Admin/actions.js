import { fBaseSlots } from "../../fbaseConfig";

export const FETCH_SLOTS_REQ = "FETCH_SLOTS_REQ";
export const FETCH_SLOTS_SUCCESS = "FETCH_SLOTS_SUCCESS";
export const FETCH_SLOTS_FAILS = "FETCG_SLOTS_FAILS";

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
    let slotsArray = [];
    query.forEach(doc => {
      slotsArray.push({ id: doc.id, ...doc.data() });
    });
    // console.log(slotsArray);
    dispatch(fetchSlotsSuccess(slotsArray));
  });
};
