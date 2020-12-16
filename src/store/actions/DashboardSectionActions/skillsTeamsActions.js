import { GET_SKILLS_TEAMS_LIST, GET_GRAPHS_SKILLS_LIST, GET_GRAPHS_SKILLS_NEED_LIST } from "../../constantsType";
import { BASE_URL } from "../../../services/baseUrl";
import { checkResponse, errorHandler } from "../../../services/errorHadler";
import { getCookie } from "../../../services/getCookie";

export const getTeamsSkillsList = () => (dispatch) => {
  fetch(`${BASE_URL}/skills/dashboard-users-in-skills/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_SKILLS_TEAMS_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getSkillsByTeams = (id) => (dispatch) => {
  fetch(`${BASE_URL}/skills/dashboard-users-in-skills/?team=${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_SKILLS_TEAMS_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getSkillsByUsers = (id) => (dispatch) => {
  fetch(`${BASE_URL}/skills/dashboard-experiences-in-skills/?user=${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_SKILLS_TEAMS_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getGraphsSkillsList = () => (dispatch) => {
  fetch(`${BASE_URL}/skills/dashboard-graphs-skills-list/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_GRAPHS_SKILLS_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getTeamsGraphsSkillsList = (id) => (dispatch) => {
  fetch(`${BASE_URL}/skills/dashboard-graphs-skills-list/?team=${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_GRAPHS_SKILLS_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getGraphsSkillsNeedList = () => (dispatch) => {
  fetch(`${BASE_URL}/skills/dashboard-graphs-skills-need-list/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_GRAPHS_SKILLS_NEED_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getTeamsGraphsSkillsNeedList = (id) => (dispatch) => {
  fetch(`${BASE_URL}/skills/dashboard-graphs-skills-need-list/?team=${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_GRAPHS_SKILLS_NEED_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export const getPresonGraphsSkillsList = (id) => (dispatch) => {
  fetch(`${BASE_URL}/skills/dashboard-graphs-person-in-skills-list/?user=${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkResponse(response, "LOADING ERROR"))
    .then((data) => {
      dispatch({ type: GET_GRAPHS_SKILLS_LIST, data });
    })
    .catch((error) => {
      errorHandler(error);
    });
};
