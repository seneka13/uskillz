import { GET_EXP_AND_INDUSTRIES_LIST, GET_EXP_AND_INDUSTRIES_GRAPHS_LIST } from "../../constantsType";
import stateCreator from "../../../services/stateCreator";

const initialState = {
  expAndIndustriesList: [],
  graphsExpAndIndustriesList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXP_AND_INDUSTRIES_LIST:
      return {
        ...state,
        expAndIndustriesList: action.data,
      };

    case GET_EXP_AND_INDUSTRIES_GRAPHS_LIST:
      return {
        ...state,
        graphsExpAndIndustriesList: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
