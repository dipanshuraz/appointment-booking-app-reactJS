import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "./actionTypes";

const initState = {
  isAuth: false,
  isLoading: false,
  error: false,
  user: {}
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_USER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: action.payload
      };
    case LOGIN_USER_FAILURE:
      alert(action.payload);
      return {
        ...state,
        isLoading: false,
        error: true
      };
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        isLoading: false,
        error: false
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isAuth: false
      };
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    case REGISTER_USER_REQUEST:
      console.log("Req Register");
      return {
        ...state,
        isLoading: true
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case REGISTER_USER_FAILURE:
      alert(`${action.payload}  Failed !!!`);
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
