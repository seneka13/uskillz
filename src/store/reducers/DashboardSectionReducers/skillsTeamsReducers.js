import { GET_SKILLS_TEAMS_LIST, GET_GRAPHS_SKILLS_LIST, GET_GRAPHS_SKILLS_NEED_LIST } from "../../constantsType";
import stateCreator from "../../../services/stateCreator";

const initialState = {
  skillsTeamsList: [],
  graphsSkillsList: [],
  graphsSkillsNeedList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SKILLS_TEAMS_LIST:
      return {
        ...state,
        skillsTeamsList: action.data,
      };
    case GET_GRAPHS_SKILLS_LIST:
      return {
        ...state,
        graphsSkillsList: action.data,
      };
    case GET_GRAPHS_SKILLS_NEED_LIST:
      return {
        ...state,
        graphsSkillsNeedList: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
