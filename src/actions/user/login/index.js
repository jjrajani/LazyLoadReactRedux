import * as t from "./types";
import axios from "axios";
import { genericHandler } from "utils/request_handler";

const baseURL = "https://dev.dinova.com/api-mydinova/v1";

const loginSuccess = res => {
  return {
    type: t.LOGIN_SUCCESS,
    payload: res.data.user
  };
};

const loginError = err => {
  return {
    type: t.LOGIN_FAIL,
    payload: err.response.data
  };
};

const getLoginResHandler = ({ status, code }) => {
  if (parseInt(status) === 200 || parseInt(code) === 200) {
    return loginSuccess;
  } else {
    return loginError;
  }
};

export const loginUser = ({ username, password }) => async dispatch => {
  const res = await axios
    .post(`${baseURL}/users/authorize`, {
      userName: username,
      password
    })
    .catch(err => {
      dispatch(loginError(err));
    });

  dispatch(loginSuccess(res));
};
