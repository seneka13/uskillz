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
import stateCreator from "../../../services/stateCreator";

const initialState = {
  teamsList: [],
  membersList: [],

  createTeam: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },
  deleteTeam: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAMS_LIST:
      return {
        ...state,
        teamsList: action.data,
      };

    case GET_MEMBERS_LIST:
      return {
        ...state,
        membersList: action.data,
      };

    case CREATE_TEAM_SUCCESS:
      return {
        ...state,
        createTeam: stateCreator("success"),
      };
    case CREATE_TEAM_LOADING:
      return {
        ...state,
        createTeam: stateCreator("loading"),
      };
    case CREATE_TEAM_FAILED:
      return {
        ...state,
        createTeam: stateCreator("failed", action.error),
      };

    case DELETE_TEAM_SUCCESS:
      return {
        ...state,
        deleteTeam: stateCreator("success"),
      };
    case DELETE_TEAM_LOADING:
      return {
        ...state,
        deleteTeam: stateCreator("loading"),
      };
    case DELETE_TEAM_FAILED:
      return {
        ...state,
        deleteTeam: stateCreator("failed", action.error),
      };

    default:
      return state;
  }
};

export default reducer;
