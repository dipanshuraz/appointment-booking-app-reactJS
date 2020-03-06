import { fBaseUsers } from "../../fbaseConfig";

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  CHECK_LOGIN_LOCAL
} from "./actionTypes";

import axios from "../../utils/axiosInterceptor";

export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

export const loginUserFailure = payload => ({
  type: LOGIN_USER_FAILURE,
  error: payload
});

export const loginUser = payload => dispatch => {
  console.log(payload, "Hello");
  dispatch(loginUserRequest());
  return fBaseUsers
    .get()
    .then(query => {
      const array = [];
      query.forEach(doc => {
        array.push({ id: doc.id, ...doc.data() });
      });
      console.log(array);
      const getUser = array.find(user => {
        if (
          user.regEmail === payload.logEmail &&
          user.regPass === payload.logPass &&
          user.regType === payload.logType
        ) {
          return user;
        }
      });

      if (getUser !== undefined) {
        dispatch(loginUserSuccess(getUser));
      } else {
        dispatch(loginUserFailure("Try Again"));
      }
    })
    .catch(err => dispatch(loginUserFailure(err.message)));
};

export const logoutUserRequest = payload => ({
  type: LOGOUT_USER_REQUEST,
  payload
});

export const logoutUserSuccess = payload => ({
  type: LOGOUT_USER_SUCCESS,
  payload
});

export const logoutUserFailure = payload => ({
  type: LOGOUT_USER_FAILURE,
  error: payload
});

export const logoutUser = payload => ({
  type: LOGOUT_USER_SUCCESS,
  payload
});

export const registerUserRequest = payload => ({
  type: REGISTER_USER_REQUEST,
  payload
});

export const registerUserSuccess = payload => ({
  type: REGISTER_USER_SUCCESS,
  payload
});

export const registerUserFailure = payload => ({
  type: REGISTER_USER_FAILURE,
  payload
});

export const userRegister = payload => dispatch => {
  dispatch(registerUserRequest());
  fBaseUsers
    .add(payload)
    .then(res => {
      if (res.id) {
        dispatch(registerUserSuccess(res.status));
      }
    })
    .catch(err => {
      dispatch(registerUserFailure(err.message));
    });
};

export const checkLogin = payload => ({
  type: CHECK_LOGIN_LOCAL,
  payload
});
