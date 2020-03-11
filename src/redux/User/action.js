export const holdUserDetail = item => {
  return {
    type: "HOLD_USER_DETAILS",
    payload: item
  };
};

export const addEvent = item => {
  return {
    type: "ADD_EVENT",
    payload: item
  };
};

export const addToBooked = item => {
  return {
    type: "ADD_TO_BOOKED",
    payload: item
  };
};
