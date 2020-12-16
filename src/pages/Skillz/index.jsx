import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  getCompanyInIndustry,
  getExpList,
  getExpTypeList,
  getHardSkills,
  getHardSkillsHave,
  getHardSkillsNeed,
  getSoftSkills,
  getSoftSkillsHave,
  getSoftSkillsNeed,
  getUserData,
} from "../../store/actions";
import OnboardStep from "./OnboardStep";
import ProfilePage from "./ProfilePage";
import SkillzProfile from "./SkillzProfile";
import Goals from "./Goals";
import MasterCV from "./MasterCV";
import SkillzHeader from "./SkillzHeader";
import AddExpereinces from "./AddExperience";
import EditExpereinces from "./EditExperience";
import Detail from "./MasterCV/Detail";
import OrganisationPage from "../Dashboard/Organisations";
import { func } from "prop-types";

const Skillz = () => {
  const dispatch = useDispatch();
  const getUser = () => dispatch(getUserData());
  const getExpTypeArr = () => dispatch(getExpTypeList());
  const getExp = () => dispatch(getExpList());
  const getExistSoftSkills = () => dispatch(getSoftSkills());
  const getHaveSoftSkills = () => dispatch(getSoftSkillsHave());
  const getNeedSoftSkills = () => dispatch(getSoftSkillsNeed());
  const getExistHardSkills = () => dispatch(getHardSkills());
  const getHaveHardSkills = () => dispatch(getHardSkillsHave());
  const getNeedHardSkills = () => dispatch(getHardSkillsNeed());
  const getCompanyInIndustryList = () => dispatch(getCompanyInIndustry());

  const { success, failed } = useSelector((state) => ({
    success: state.authReducers.login.success,
    failed: state.authReducers.data.failed,
  }));

  useEffect(() => {
    getExistHardSkills();
    getHaveHardSkills();
    getNeedHardSkills();
    getExistSoftSkills();
    getHaveSoftSkills();
    getNeedSoftSkills();
    getExpTypeArr();
    getExp();
    getCompanyInIndustryList();
  }, []);

  useEffect(() => {
    success && getUser();
  }, [success]);

  return (
    <>
      <SkillzHeader />
      <Switch>
        <Route path={routes.skillz.mySkillsProfile} component={SkillzProfile} />
        <Route path={routes.skillz.goals} component={Goals} />
        <Route path={routes.skillz.experiences} component={MasterCV} />
        <Route path={routes.skillz.experienceDetail} component={Detail} />
        <Route path={routes.skillz.profile} component={ProfilePage} />
        <Route path={routes.skillz.createExperiences} component={AddExpereinces} />
        <Route path={routes.skillz.changeExperience} component={EditExpereinces} />
        <Route path={routes.dashboard.organisation} component={OrganisationPage} />
      </Switch>
      {!window.localStorage.getItem("token") && <Redirect to={routes.index.landing} />}
      {failed && <Redirect to={routes.index.landing} />}
    </>
  );
};

export default Skillz;
