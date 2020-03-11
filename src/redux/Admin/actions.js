import { fBaseEvents, fBaseBooked } from "../../fbaseConfig";

export const FETCH_EVENTS_REQ = "FETCH_SLOTS_REQ";
export const FETCH_EVENTS_SUCCESS = "FETCH_SLOTS_SUCCESS";
export const FETCH_EVENTS_FAILS = "FETCG_SLOTS_FAILS";
export const CREATE_EVENTS_REQ = "CREATE_SLOT_REQ";
export const CREATE_EVENTS_SUCCESS = "CREATE_SLOT_SUCCESS";
export const CREATE_EVENTS_FAIL = "CREATE_SLOT_FAIL";

export const FETCH_SLOTS_REQ = "FETCH_SLOTS_REQ";
export const FETCH_SLOTS_SUCCESS = "FETCH_SLOTS_SUCCESS";
export const FETCH_SLOTS_FAIL = "FETCH_SLOTS_FAIL";

export const fetchEventsReq = payload => ({
  type: FETCH_EVENTS_REQ,
  payload
});

export const fetchEventsSuccess = payload => ({
  type: FETCH_EVENTS_SUCCESS,
  payload
});

export const fetchEventsFails = payload => ({
  type: FETCH_EVENTS_FAILS,
  payload
});

export const fetchEvents = payload => dispatch => {
  dispatch(fetchEventsReq());
  return fBaseEvents.get().then(query => {
    const EventArray = [];
    query.forEach(doc => {
      EventArray.push({ slotId: doc.id, userId: doc.id, ...doc.data() });
    });
    dispatch(fetchEventsSuccess(EventArray));
  });
};

export const createSlotReq = payload => ({
  type: CREATE_EVENTS_REQ,
  payload
});

export const createEventsSuccess = payload => ({
  type: CREATE_EVENTS_SUCCESS,
  payload
});

export const createSlotFail = payload => ({
  type: CREATE_EVENTS_FAIL,
  payload
});

export const createSlot = payload => dispatch => {
  dispatch(createSlotReq());
  return fBaseEvents.add(payload).then(res => {
    console.log("created called");
    if (res.id) {
      dispatch(createEventsSuccess(res.status));
    }
  });
};

export const fetchSlotsReq = payload => ({
  type: FETCH_SLOTS_REQ,
  payload
});

export const fetchSlotsSuccess = payload => ({
  type: FETCH_SLOTS_SUCCESS,
  payload
});

export const fetchSlotsFail = payload => ({
  type: FETCH_SLOTS_FAIL,
  payload
});

export const fetchSlots = payload => dispatch => {
  dispatch(fetchSlotsReq());
  return fBaseBooked.get().then(query => {
    const slotsItem = [];
    query.forEach(doc => {
      slotsItem.push({ slotId: doc.id, userId: doc.id, ...doc.data() });
    });
    console.log(slotsItem);
    // dispatch(fetchEventsSuccess(EventArray));
  });
};
