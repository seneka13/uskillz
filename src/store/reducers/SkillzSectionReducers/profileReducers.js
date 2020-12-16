import {
  UPDATE_PROFILE_LOADING,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
  CHANGE_PASS_LOADING,
  CHANGE_PASS_SUCCESS,
  CHANGE_PASS_FAILED,
} from "../../constantsType";
import stateCreator from "../../../services/stateCreator";

const initialState = {
  updateProfile: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },
  changePass: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updateProfile: stateCreator("success"),
      };
    case UPDATE_PROFILE_LOADING:
      return {
        ...state,
        updateProfile: stateCreator("loading"),
      };
    case UPDATE_PROFILE_FAILED:
      return {
        ...state,
        updateProfile: stateCreator("failed", action.error),
      };

    case CHANGE_PASS_SUCCESS:
      return {
        ...state,
        changePass: stateCreator("success"),
      };
    case CHANGE_PASS_LOADING:
      return {
        ...state,
        changePass: stateCreator("loading"),
      };
    case CHANGE_PASS_FAILED:
      return {
        ...state,
        changePass: stateCreator("failed", action.error),
      };

    default:
      return state;
  }
};

export default reducer;
