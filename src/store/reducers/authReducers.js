import {
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
  USER_DATA_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  PASSWORD_RESET_LOADING,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_CONFIRM_LOADING,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAILED,
  SIGN_OUT,
} from "../constantsType";
import stateCreator from "../../services/stateCreator";

const initialState = {
  user: null,
  data: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },
  login: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },
  signup: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },
  reset: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },
  resetConfirm: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_SUCCESS:
      return {
        ...state,
        user: action.user,
        data: stateCreator("success"),
      };
    case USER_DATA_LOADING:
      return {
        ...state,
        data: stateCreator("loading"),
      };
    case USER_DATA_FAILED:
      return {
        ...state,
        data: stateCreator("failed", action.error),
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        login: stateCreator("success"),
      };
    case LOGIN_LOADING:
      return {
        ...state,
        login: stateCreator("loading"),
      };
    case LOGIN_FAILED:
      return {
        ...state,
        login: stateCreator("failed", action.error),
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: stateCreator("success"),
      };
    case SIGNUP_LOADING:
      return {
        ...state,
        signup: stateCreator("loading"),
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        signup: stateCreator("failed", action.error),
      };

    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        reset: stateCreator("success"),
      };
    case PASSWORD_RESET_LOADING:
      return {
        ...state,
        reset: stateCreator("loading"),
      };
    case PASSWORD_RESET_FAILED:
      return {
        ...state,
        reset: stateCreator("failed", action.error),
      };

    case PASSWORD_RESET_CONFIRM_SUCCESS:
      return {
        ...state,
        resetConfirm: stateCreator("success"),
      };
    case PASSWORD_RESET_CONFIRM_LOADING:
      return {
        ...state,
        resetConfirm: stateCreator("loading"),
      };
    case PASSWORD_RESET_CONFIRM_FAILED:
      return {
        ...state,
        resetConfirm: stateCreator("failed", action.error),
      };

    case SIGN_OUT:
      return {
        ...state,
        user: null,
        data: initialState,
        login: initialState,
      };
    default:
      return state;
  }
};

export default reducer;
