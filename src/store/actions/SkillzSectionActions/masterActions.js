import { GET_COMPANY_IN_INDUSTRY, GET_EXP_TYPE_LIST, SET_CURRENT_EXP_DETAIL } from "../../constantsType";
import { BASE_URL } from "../../../services/baseUrl";
import { checkResponse, errorHandler } from "../../../services/errorHadler";

////================================================== SoftSkills

export const getCompanyInIndustry = () => (dispatch) => {
  fetch(`${BASE_URL}/companies/companies-in-industry/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_COMPANY_IN_INDUSTRY, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getExpTypeList = () => (dispatch) => {
  fetch(`${BASE_URL}/experience/companies-type-list/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_EXP_TYPE_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const setCurrentExpDetail = (expDetail) => (dispatch) => {
  dispatch({ type: SET_CURRENT_EXP_DETAIL, data: expDetail });
};
