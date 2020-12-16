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
  DELETE_SKILL_LOADING,
  DELETE_SKILL_SUCCESS,
  DELETE_SKILL_FAILED,
  DEFAULT_PROCESS_FETCH,
} from "../../constantsType";
import stateCreator from "../../../services/stateCreator";

const initialState = {
  softSkillsList: [],
  softSkillsHave: [],
  softSkillsNeed: [],

  hardSkillsList: [],
  hardSkillsHave: [],
  hardSkillsNeed: [],

  addSoftSkill: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },
  newSoftSkill: {},
  addHardSkill: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },
  newHardSkill: {},

  deleteSkill: {
    success: false,
    loading: false,
    failed: false,
    error: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SOFT_SKILLS:
      return {
        ...state,
        softSkillsList: action.data,
      };

    case GET_SOFT_SKILLS_HAVE:
      return {
        ...state,
        softSkillsHave: action.data,
      };

    case GET_SOFT_SKILLS_NEED:
      return {
        ...state,
        softSkillsNeed: action.data,
      };

    //========
    case GET_HARD_SKILLS:
      return {
        ...state,
        hardSkillsList: action.data,
      };
    case GET_HARD_SKILLS_HAVE:
      return {
        ...state,
        hardSkillsHave: action.data,
      };

    case GET_HARD_SKILLS_NEED:
      return {
        ...state,
        hardSkillsNeed: action.data,
      };

    //=======
    case ADD_SOFT_SKILLS_SUCCESS:
      return {
        ...state,
        addSoftSkill: stateCreator("success"),
        newSoftSkill: action.data,
      };
    case ADD_SOFT_SKILLS_LOADING:
      return {
        ...state,
        addSoftSkill: stateCreator("loading"),
      };
    case ADD_SOFT_SKILLS_FAILED:
      return {
        ...state,
        addSoftSkill: stateCreator("failed", action.error),
      };

    //========
    case ADD_HARD_SKILLS_SUCCESS:
      return {
        ...state,
        addHardSkill: stateCreator("success"),
        newHardSkill: action.data,
      };
    case ADD_HARD_SKILLS_LOADING:
      return {
        ...state,
        addHardSkill: stateCreator("loading"),
      };
    case ADD_HARD_SKILLS_FAILED:
      return {
        ...state,
        addHardSkill: stateCreator("failed", action.error),
      };

    //========

    case DELETE_SKILL_SUCCESS:
      return {
        ...state,
        deleteSkill: stateCreator("success"),
      };
    case DELETE_SKILL_LOADING:
      return {
        ...state,
        deleteSkill: stateCreator("loading"),
      };
    case DELETE_SKILL_FAILED:
      return {
        ...state,
        deleteSkill: stateCreator("failed", action.error),
      };

    case DEFAULT_PROCESS_FETCH:
      return {
        ...state,
        addHardSkill: initialState.addHardSkill,
        addSoftSkill: initialState.addSoftSkill,
        deleteSkill: initialState.deleteSkill,
      };

    default:
      return state;
  }
};

export default reducer;
