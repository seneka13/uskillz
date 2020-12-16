import {
  GET_TEAMS_LIST,
  GET_MEMBERS_LIST,
  DELETE_TEAM_LOADING,
  DELETE_TEAM_SUCCESS,
  DELETE_TEAM_FAILED,
  CREATE_TEAM_LOADING,
  CREATE_TEAM_SUCCESS,
  CREATE_TEAM_FAILED,
} from "../../constantsType";
import { BASE_URL } from "../../../services/baseUrl";
import { checkResponse, errorHandler } from "../../../services/errorHadler";
import { getCookie } from "../../../services/getCookie";

export const getTeamsList = () => (dispatch) => {
  fetch(`${BASE_URL}/accounts/teams-list/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_TEAMS_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const createUsersTeam = (data) => (dispatch) => {
  dispatch({ type: CREATE_TEAM_LOADING });
  fetch(`${BASE_URL}/accounts/team-create/`, {
    method: "POST",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: CREATE_TEAM_SUCCESS, data });
    })
    .catch((error) => {
      errorHandler(error);
      dispatch({ type: CREATE_TEAM_FAILED });
    });
};

export const deleteUsersTeam = (url) => (dispatch) => {
  dispatch({ type: DELETE_TEAM_LOADING });
  fetch(`${url}`, {
    method: "DELETE",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: DELETE_TEAM_SUCCESS });
    })
    .catch((error) => {
      console.log("fail");
      dispatch({ type: DELETE_TEAM_FAILED });
      errorHandler(error);
    });
};

export const changeUsersTeam = (url, data) => (dispatch) => {
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
    .then((data) => {})
    .catch((error) => {
      errorHandler(error);
    });
};

export const getMembersList = () => (dispatch) => {
  fetch(`${BASE_URL}/accounts/users-in-teams/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_MEMBERS_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};
