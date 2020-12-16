import { combineReducers } from "redux";
import fieldsReducers from "./fieldsReducers";
import authReducers from "./authReducers";
import onboardReducers from "./onboardReducers";
import profileReducers from "./SkillzSectionReducers/profileReducers";
import skillsReducers from "./SkillzSectionReducers/skillsReducers";
import addExpReducers from "./SkillzSectionReducers/addExpReducers";
import masterReducers from "./SkillzSectionReducers/masterReducers";
import orgTeamsReducers from "./DashboardSectionReducers/orgTeamsReducers";
import skillsTeamsReducers from "./DashboardSectionReducers/skillsTeamsReducers";
import expTeamsReducers from "./DashboardSectionReducers/expTeamsReducers";

export default combineReducers({
  fieldsReducers,
  authReducers,
  onboardReducers,
  profileReducers,
  skillsReducers,
  addExpReducers,
  masterReducers,
  orgTeamsReducers,
  skillsTeamsReducers,
  expTeamsReducers,
});
