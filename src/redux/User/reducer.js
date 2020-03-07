const initialState = {
  hold: {},
  booked: []
};

const reducer = (state = initialState, action) => {
  // console.log("userReducer", state);
  switch (action.type) {
    case "HOLD_USER_DETAILS": {
      return {
        ...state,
        hold: { ...action.payload }
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
