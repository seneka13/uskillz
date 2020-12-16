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
  ADD_COMPANY_LOADING,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_FAILED,
  ADD_INDUSTRY_LOADING,
  ADD_INDUSTRY_SUCCESS,
  ADD_INDUSTRY_FAILED,
  DEFAULT_PROCESS_FETCH,
} from "../../constantsType";
import stateCreator from "../../../services/stateCreator";

const initialState = {
  companyList: [],
  industryList: [],
  expereienceList: [],

  createExp: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },

  editExp: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_LIST:
      return {
        ...state,
        companyList: action.data,
      };

    case GET_INDUSTRY_LIST:
      return {
        ...state,
        industryList: action.data,
      };

    case GET_EXP_LIST:
      return {
        ...state,
        expereienceList: action.data,
      };

    case CREATE_EXP_SUCCESS:
      return {
        ...state,
        createExp: stateCreator("success"),
      };
    case CREATE_EXP_LOADING:
      return {
        ...state,
        createExp: stateCreator("loading"),
      };
    case CREATE_EXP_FAILED:
      return {
        ...state,
        createExp: stateCreator("failed", action.error),
      };

    case EDIT_EXP_SUCCESS:
      return {
        ...state,
        editExp: stateCreator("success"),
      };
    case EDIT_EXP_LOADING:
      return {
        ...state,
        editExp: stateCreator("loading"),
      };
    case EDIT_EXP_FAILED:
      return {
        ...state,
        editExp: stateCreator("failed", action.error),
      };

    case DEFAULT_PROCESS_FETCH:
      return {
        ...state,
        createExp: initialState.createExp,
        editExp: initialState.editExp,
      };

    default:
      return state;
  }
};

export default reducer;
