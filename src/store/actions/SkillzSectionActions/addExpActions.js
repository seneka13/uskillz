import {
  GET_COMPANY_LIST,
  GET_INDUSTRY_LIST,
  GET_EXP_LIST,
  CREATE_EXP_LOADING,
  CREATE_EXP_SUCCESS,
  CREATE_EXP_FAILED,
  EDIT_EXP_LOADING,
  EDIT_EXP_SUCCESS,
  EDIT_EXP_FAILED,
} from "../../constantsType";
import { BASE_URL } from "../../../services/baseUrl";
import { checkResponse, errorHandler } from "../../../services/errorHadler";
import { getCookie } from "../../../services/getCookie";
import { changeField } from "../fieldsActions";

////================================================== SoftSkills

export const getCompanyList = () => (dispatch) => {
  fetch(`${BASE_URL}/companies/list/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_COMPANY_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getIndustryList = () => (dispatch) => {
  fetch(`${BASE_URL}/companies/industry-list/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_INDUSTRY_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getExpList = () => (dispatch) => {
  fetch(`${BASE_URL}/experience/list/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_EXP_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const createNewExp = (data) => (dispatch) => {
  dispatch({ type: CREATE_EXP_LOADING });
  fetch(`${BASE_URL}/experience/create/`, {
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
      dispatch({ type: CREATE_EXP_SUCCESS, data });
    })
    .catch((error) => {
      errorHandler(error);
      dispatch({ type: CREATE_EXP_FAILED });
    });
};

export const editExperience = (url, data) => (dispatch) => {
  dispatch({ type: EDIT_EXP_LOADING });
  fetch(url, {
    method: "PATCH",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: EDIT_EXP_SUCCESS, data });
    })
    .catch((error) => {
      errorHandler(error);
      dispatch({ type: EDIT_EXP_FAILED });
    });
};

export const addCompany = (data) => (dispatch) => {
  console.log(data)
  fetch(`${BASE_URL}/companies/add-company/`, {
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
      dispatch(changeField("addExperiences", "company", data))
      dispatch(changeField("editExperiences", "company", data))
      
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const addIndustry = (data) => (dispatch) => {
  fetch(`${BASE_URL}/companies/add-industry/`, {
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
      dispatch(changeField("addExperiences", "industry", data))
      dispatch(changeField("editExperiences", "industry", data))
    })
    .catch((error) => {
      errorHandler(error);
    });
};
