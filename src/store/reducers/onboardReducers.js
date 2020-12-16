import {
  SET_NEXT_STEP,
  GET_UNIVERSITY_LIST,
  GET_DEGREE_LIST,
  GET_PILOT_LIST,
} from "../constantsType";

const initialState = {
  currentStep: 0,
  universityList: [],
  degreeList: [],
  pilotList: [],
  team:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEXT_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };

    case GET_UNIVERSITY_LIST:
      return {
        ...state,
        universityList: action.data,
      };

    case GET_DEGREE_LIST:
      return {
        ...state,
        degreeList: action.data,
      };

    case GET_PILOT_LIST:
      return {
        ...state,
        pilotList: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
