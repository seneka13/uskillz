import { SET_NEXT_STEP, GET_UNIVERSITY_LIST, GET_DEGREE_LIST, GET_PILOT_LIST } from "../constantsType";
import { BASE_URL } from "../../services/baseUrl";
import { checkResponse, errorHandler } from "../../services/errorHadler";
import { getCookie } from "../../services/getCookie";
import { changeField } from "./fieldsActions";

export const setNextStep = (payload) => ({
  type: SET_NEXT_STEP,
  payload,
});

export const getUniversityList = (value) => (dispatch) => {
  fetch(`${BASE_URL}/authocomplete-university/?university=${value}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "Ошибка загрузки"))
    .then((data) => {
      dispatch({ type: GET_UNIVERSITY_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getDegreeList = () => (dispatch) => {
  fetch(`${BASE_URL}/accounts/degree-list/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "Ошибка загрузки"))
    .then((data) => {
      dispatch({ type: GET_DEGREE_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getPilotList = () => (dispatch) => {
  fetch(`${BASE_URL}/companies/pilot-organization-list/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "Ошибка загрузки"))
    .then((data) => {
      dispatch({ type: GET_PILOT_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const createUniversity = (data) => (dispatch) => {
  fetch(`${BASE_URL}/accounts/add-university/`, {
    method: "POST",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => checkResponse(response, "Ошибка загрузки"))
    .then((data) => {
      dispatch(changeField("university", "university", data));
    })
    .catch((error) => {
      errorHandler(error);
    });
};
