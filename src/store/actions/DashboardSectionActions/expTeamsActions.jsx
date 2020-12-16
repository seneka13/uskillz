import { GET_EXP_AND_INDUSTRIES_LIST, GET_EXP_AND_INDUSTRIES_GRAPHS_LIST } from "../../constantsType";
import { BASE_URL } from "../../../services/baseUrl";
import { checkResponse, errorHandler } from "../../../services/errorHadler";
import { getCookie } from "../../../services/getCookie";

export const getExpAndIndustriesList = () => (dispatch) => {
  fetch(`${BASE_URL}/experience/dashboard-experiences-in-team/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_EXP_AND_INDUSTRIES_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getExpTypesByTeams = (id) => (dispatch) => {
  fetch(`${BASE_URL}/experience/dashboard-experiences-in-team/?team=${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_EXP_AND_INDUSTRIES_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getExpTypesByUsers = (id) => (dispatch) => {
  fetch(`${BASE_URL}/experience/dashboard-experiences-person-filtering/?user=${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_EXP_AND_INDUSTRIES_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getExpAndIndustriesGraphsList = () => (dispatch) => {
  fetch(`${BASE_URL}/experience/dashboard-graphs-experiences/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_EXP_AND_INDUSTRIES_GRAPHS_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getExpTypesGraphsByTeam = (id) => (dispatch) => {
  fetch(`${BASE_URL}/experience/dashboard-graphs-experiences/?team=${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_EXP_AND_INDUSTRIES_GRAPHS_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getPersonGraphsExpList = (id) => (dispatch) => {
  fetch(`${BASE_URL}/experience/dashboard-graphs-experiences-person-filtering/?user=${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_EXP_AND_INDUSTRIES_GRAPHS_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};
