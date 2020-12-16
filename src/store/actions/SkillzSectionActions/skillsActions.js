import {
  GET_SOFT_SKILLS,
  GET_SOFT_SKILLS_HAVE,
  GET_SOFT_SKILLS_NEED,
  GET_HARD_SKILLS,
  GET_HARD_SKILLS_HAVE,
  GET_HARD_SKILLS_NEED,
  ADD_SOFT_SKILLS_LOADING,
  ADD_SOFT_SKILLS_SUCCESS,
  ADD_SOFT_SKILLS_FAILED,
  ADD_HARD_SKILLS_LOADING,
  ADD_HARD_SKILLS_SUCCESS,
  ADD_HARD_SKILLS_FAILED,
  DEFAULT_PROCESS_FETCH,
  DELETE_SKILL_LOADING,
  DELETE_SKILL_SUCCESS,
  DELETE_SKILL_FAILED,
} from "../../constantsType";
import { BASE_URL } from "../../../services/baseUrl";
import { checkResponse, errorHandler } from "../../../services/errorHadler";
import { getCookie } from "../../../services/getCookie";

////================================================== SoftSkills

export const getSoftSkills = () => (dispatch) => {
  fetch(`${BASE_URL}/skills/soft-skills/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_SOFT_SKILLS, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getSoftSkillsHave = () => (dispatch) => {
  fetch(`${BASE_URL}/skills/profile-soft-skills-list/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_SOFT_SKILLS_HAVE, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getSoftSkillsNeed = () => (dispatch) => {
  fetch(`${BASE_URL}/skills/user-soft-skills-list/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_SOFT_SKILLS_NEED, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const addSoftSkills = (data) => (dispatch) => {
  dispatch({ type: ADD_SOFT_SKILLS_LOADING });
  fetch(`${BASE_URL}/skills/add-soft-skill/`, {
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
      dispatch({ type: ADD_SOFT_SKILLS_SUCCESS, data });
    })
    .catch((error) => {
      errorHandler(error);
      dispatch({ type: ADD_SOFT_SKILLS_FAILED, data });
    });
};

////================================================== HardSkills

export const getHardSkills = () => (dispatch) => {
  fetch(`${BASE_URL}/skills/hard-skills/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_HARD_SKILLS, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getHardSkillsHave = () => (dispatch) => {
  fetch(`${BASE_URL}/skills/profile-hard-skills-list/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_HARD_SKILLS_HAVE, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getHardSkillsNeed = () => (dispatch) => {
  fetch(`${BASE_URL}/skills/user-hard-skills-list/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_HARD_SKILLS_NEED, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const addHardSkills = (data) => (dispatch) => {
  dispatch({ type: ADD_HARD_SKILLS_LOADING });
  fetch(`${BASE_URL}/skills/add-hard-skill/`, {
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
      dispatch({ type: ADD_HARD_SKILLS_SUCCESS, data });
    })
    .catch((error) => {
      errorHandler(error);
      dispatch({ type: ADD_HARD_SKILLS_FAILED });
    });
};

export const deleteSkill = (url) => (dispatch) => {
  dispatch({ type: DELETE_SKILL_LOADING });
  fetch(url, {
    method: "DELETE",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: DELETE_SKILL_SUCCESS });
    })
    .catch((error) => {
      errorHandler(error);
      dispatch({ type: DELETE_SKILL_FAILED });
    });
};

export const defaultSkillState = () => (dispatch) => {
  dispatch({ type: DEFAULT_PROCESS_FETCH });
};
