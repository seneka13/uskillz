import React, { useEffect, useCallback } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import {
  getTeamsList,
  getMembersList,
  getTeamsSkillsList,
  getExpAndIndustriesList,
  getGraphsSkillsList,
  getGraphsSkillsNeedList,
  getExpAndIndustriesGraphsList,
} from "../../store/actions";
import DashboardHeader from "./DashboardHeader";
import OrganisationPage from "../Dashboard/Organisations";
import TeamSkills from "./TeamSkills";
import Expereiences from "./Experiences";

const Dashboard = () => {
  const dispatch = useDispatch();
  const getExistSkills = () => dispatch(getTeamsSkillsList());
  const getTeams = useCallback(() => dispatch(getTeamsList()), [dispatch]);
  const getMembers = useCallback(() => dispatch(getMembersList()), [dispatch]);
  const getExpAndIndustries = () => dispatch(getExpAndIndustriesList());
  const getGraphsSkills = () => dispatch(getGraphsSkillsList());
  const getGraphsSkillsNeed = () => dispatch(getGraphsSkillsNeedList());
  const getExpAndIndustriesGraphs = () => dispatch(getExpAndIndustriesGraphsList());

  const { success, deleteSuccess, failed } = useSelector((state) => ({
    failed: state.authReducers.data.failed,
    success: state.orgTeamsReducers.createTeam.success,
    deleteSuccess: state.orgTeamsReducers.deleteTeam.success,
  }));
  useEffect(() => {
    getTeams();
  }, [success, deleteSuccess]);

  useEffect(() => {
    getMembers();
  }, [success, deleteSuccess]);

  useEffect(() => {
    getExistSkills();
    getExpAndIndustries();
    getGraphsSkills();
    getGraphsSkillsNeed();
    getExpAndIndustriesGraphs();
  }, []);

  return (
    <>
      <DashboardHeader />
      <Switch>
        <Route path={routes.dashboard.organisation} component={OrganisationPage} />
        <Route path={routes.dashboard.skills} component={TeamSkills} />
        <Route path={routes.dashboard.experiences} component={Expereiences} />
      </Switch>
      {failed && <Redirect to={routes.index.landing} />}
    </>
  );
};

export default Dashboard;
