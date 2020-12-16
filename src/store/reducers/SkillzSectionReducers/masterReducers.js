import { GET_COMPANY_IN_INDUSTRY, GET_EXP_TYPE_LIST, SET_CURRENT_EXP_DETAIL } from "../../constantsType";
import stateCreator from "../../../services/stateCreator";

const initialState = {
  companyInIndustry: [],
  expTypeList: [],
  currentCompanyExpDetail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_IN_INDUSTRY:
      return {
        ...state,
        companyInIndustry: action.data,
      };
    case GET_EXP_TYPE_LIST:
      return {
        ...state,
        expTypeList: action.data,
      };
    case SET_CURRENT_EXP_DETAIL:
      return {
        ...state,
        currentCompanyExpDetail: action.data,
      };

    default:
      return state;
  }
};

export default reducer;
