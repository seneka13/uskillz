import {
  UPDATE_PROFILE_LOADING,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
  CHANGE_PASS_LOADING,
  CHANGE_PASS_SUCCESS,
  CHANGE_PASS_FAILED,
} from "../../constantsType";
import { checkResponse, errorHandler } from "../../../services/errorHadler";
import { getCookie } from "../../../services/getCookie";
import { BASE_URL } from "../../../services/baseUrl";

export const updateProfile = (url, data) => (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_LOADING });
  fetch(url, {
    method: "PATCH",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => checkResponse(response, "Ошибка логина / пароля"))
    .then((data) => {
      dispatch({ type: UPDATE_PROFILE_SUCCESS });
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_PROFILE_FAILED,
        error: errorHandler(error),
      });
    });
};

export const changePass = (data) => (dispatch) => {
  dispatch({ type: CHANGE_PASS_LOADING });
  fetch(`${BASE_URL}/accounts/profile/change-password/`, {
    method: "PATCH",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => checkResponse(response, "Ошибка логина / пароля"))
    .then((data) => {
      console.log(data);
      if (data.old_password) {
        throw data;
      }
      dispatch({ type: CHANGE_PASS_SUCCESS });
    })
    .catch((error) => {
      dispatch({
        type: CHANGE_PASS_FAILED,
        error: error.old_password,
      });
    });
};
