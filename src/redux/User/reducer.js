const initialState = {
  hold: {},
  event: {},
  booked: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HOLD_USER_DETAILS": {
      return {
        ...state,
        hold: { ...action.payload }
      };
    }
    case "ADD_EVENT": {
      return {
        ...state,
        event: action.payload
      };
    }
    case "ADD_TO_BOOKED": {
      return {
        ...state,
        booked: [...state.booked, action.payload]
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
