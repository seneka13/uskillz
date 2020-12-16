import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import PrimarySelect from "../../../../components/PrimarySelect";
import { changeField, setNextStep, getPilotList, updateProfile } from "../../../../store/actions";
import styles from "../step.module.scss";

const OrgStep = () => {
  const dispatch = useDispatch();
  const [formValid, setFormValid] = useState("");

  const changeFieldValue = (formField, value) => dispatch(changeField("pilotOrganization", formField, value));
  const setStep = (value) => dispatch(setNextStep(value));
  const getOrganizations = () => dispatch(getPilotList());
  const sendPilot = (url, data) => dispatch(updateProfile(url, data));

  const { user, organization, team, currentStep, pilotList, success, loading, failed, error } = useSelector((state) => ({
    user: state.authReducers.user,
    organization: state.fieldsReducers.pilotOrganization.organization,
    team: state.fieldsReducers.pilotOrganization.team,
    pilotList: state.onboardReducers.pilotList,
    success: state.profileReducers.updateProfile.success,
    loading: state.profileReducers.updateProfile.loading,
    failed: state.profileReducers.updateProfile.failed,
    error: state.profileReducers.updateProfile.error,
  }));

  const handleSend = () => {
    if (organization) {
      const data = {
        organization: organization,
      };
    }
  };

  useEffect(() => {
    getOrganizations();
  }, []);

  return (
    <div className={styles.stepComponent}>
      <h1>Select your Organisation</h1>
      <p>Now, select the organisation you are a member of (If none, select ‘I am not part of an organisation’)</p>
      <div className={styles.selectForm}>
        <PrimarySelect
          placeholder={organization.name ? organization.name : "Pilot organization"}
          className={styles.select}
          selectList={pilotList}
          onClick={(value) => changeFieldValue("organization", value)}
          labelText={"Organisation Name"}
        />
        <PrimarySelect
          placeholder={team.name ? team.name : "Team"}
          className={styles.select}
          selectList={organization.team}
          onClick={(value) => changeFieldValue("team", value)}
          labelText={"Team"}
        />
      </div>
      <PrimaryBtn text={"Next"} className={styles.stepSendBtn} onClick={() => handleSend()} />
    </div>
  );
};

export default OrgStep;
