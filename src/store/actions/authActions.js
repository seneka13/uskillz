import {
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
  USER_DATA_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  PASSWORD_RESET_LOADING,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_CONFIRM_LOADING,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAILED,
  SIGN_OUT,
} from "../constantsType";
import { BASE_URL } from "../../services/baseUrl";
import { checkResponse, errorHandler } from "../../services/errorHadler";
import { getCookie } from "../../services/getCookie";

export const getUserData = () => (dispatch) => {
  dispatch({ type: USER_DATA_LOADING });
  fetch(`${BASE_URL}/accounts/profile/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "Ошибка загрузки"))
    .then((user) => {
      dispatch({ type: USER_DATA_SUCCESS, user });
    })
    .catch((error) => {
      dispatch({ type: USER_DATA_FAILED, error: errorHandler(error) });
    });
};

export const loginAction = (formData) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  fetch(`${BASE_URL}/auth/token/`, {
    method: "POST",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
    },
    body: formData,
  })
    .then((response) => checkResponse(response, "Ошибка логина / пароля"))
    .then((data) => {
      console.log(data)
      if (data.error) throw data;
      window.localStorage.setItem("token", data.access_token);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILED, error: error });
    });
};

export const signupAction = (body) => (dispatch) => {
  dispatch({ type: SIGNUP_LOADING });
  fetch(`${BASE_URL}/accounts/signup/`, {
    method: "POST",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => checkResponse(response, "Something wrong with server, please try again later!"))
    .then((data) => {
      if (data.detail) throw data.detail;
      dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: SIGNUP_FAILED, error: error });
    });
};

export const resetPassAction = (data) => (dispatch) => {
  dispatch({ type: PASSWORD_RESET_LOADING });
  fetch(`${BASE_URL}/password-reset/`, {
    method: "POST",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => checkResponse(response, "Ошибка логина / пароля"))
    .then((data) => {
      if (data.email) throw data.email;
      dispatch({ type:  PASSWORD_RESET_SUCCESS  });
    })
    .catch((error) => {
      dispatch({
        type: PASSWORD_RESET_FAILED,
        error: error,
      });
    });
};

export const resetPassConfirmAction = (data) => (dispatch) => {
  dispatch({ type: PASSWORD_RESET_CONFIRM_LOADING });
  fetch(`${BASE_URL}/password-reset/confirm/`, {
    method: "POST",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => checkResponse(response, "Ошибка логина / пароля"))
    .then((data) => {
      dispatch({ type: PASSWORD_RESET_CONFIRM_SUCCESS });
    })
    .catch((error) => {
      dispatch({
        type: PASSWORD_RESET_CONFIRM_FAILED,
        error: errorHandler(error),
      });
    });
};

export const signOut = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: SIGN_OUT });
};
