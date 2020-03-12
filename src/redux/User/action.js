import { fBaseEvents, fBaseBooked } from "../../fbaseConfig";

export const FETCH_EVENTS_REQ = "FETCH_SLOTS_REQ";
export const FETCH_EVENTS_SUCCESS = "FETCH_SLOTS_SUCCESS";
export const FETCH_EVENTS_FAILS = "FETCH_SLOTS_FAILS";

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
  console.log("User1");
  dispatch(fetchEventsReq());
  return fBaseEvents.get().then(query => {
    const EventArray = [];
    query.forEach(doc => {
      EventArray.push({ slotId: doc.id, userId: doc.id, ...doc.data() });
    });
    console.log("User");
    dispatch(fetchEventsSuccess(EventArray));
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
