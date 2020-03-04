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

// export const loginUser = payload => {
//   return dispatch => {
//     dispatch(loginUserRequest());
//     return axios
//       .post("/users", {
//         email: payload.email,
//         password: payload.password
//       })
//       .then(res => {
//         dispatch(loginUserSuccess(res.data));
//       })
//       .catch(() => dispatch(loginUserFailure()));
//   };
// };

export const loginUser = payload => dispatch => {
  console.log(payload, "Hello");
  dispatch(loginUserRequest());
  axios
    .get("http://localhost:4000/users")
    .then(res => {
      const users = res.data;
      const getUser = users.find(user => {
        if (
          user.user_email === payload.logEmail &&
          user.user_pass === payload.logPass &&
          user.user_type === payload.logType
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

export const logoutUser = payload => {
  return dispatch => {
    dispatch(logoutUserRequest());
    return axios
      .post(
        "/logout",
        {},
        {
          headers: {
            Authorization: payload.token
          }
        }
      )
      .then(res => {
        dispatch(logoutUserSuccess(res));
      })
      .catch(err => dispatch(logoutUserFailure(err.message)));
  };
};

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
  console.log(payload);
  dispatch(registerUserRequest());
  axios({
    url: "http://localhost:4000/users",
    data: payload,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => {
      if (res.status == 201) {
        dispatch(registerUserSuccess(res.status));
      }
      console.log(res.data);
    })
    .catch(err => {
      dispatch(registerUserFailure(err.message));
      console.log(err.message);
    });
};
