import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import PrimarySelect from "../../../../components/PrimarySelect";
import { changeField, getPilotList, updateProfile } from "../../../../store/actions";
import editPen from "../../../../assets/SkillzImages/edit.svg";
import styles from "./account.module.scss";

const Organizations = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("pilotOrganization", formField, value));
  const getOrganizations = () => dispatch(getPilotList());
  const update = (url, pilot) => dispatch(updateProfile(url, pilot));
  const [formDisable, setFormDisable] = useState(true);
  const [formValid, setFormValid] = useState("");

  const { user, organization, team, pilotList } = useSelector((state) => ({
    user: state.authReducers.user,
    organization: state.fieldsReducers.pilotOrganization.organization,
    team: state.fieldsReducers.pilotOrganization.team,
    startDate: state.fieldsReducers.pilotOrganization.startDate,
    pilotList: state.onboardReducers.pilotList,
  }));

  const handleSend = (e) => {
    e.preventDefault();
    if (organization && team) {
      const data = {
        pilot_organization: organization.id,
        team: team.id,
      };
      update(user.update_profile, data);
      setFormDisable(!formDisable);
    } else {
      setFormValid("You need to fill in all fields");
    }
  };

  useEffect(() => {
    user &&
      user.pilot_organization &&
      changeFieldValue("organization", { id: user.pilot_organization, name: user.pilot_organization_name });
    user && user.team && changeFieldValue("team", { id: user.team, name: user.team_name });
  }, [user]);

  useEffect(() => {
    getOrganizations();
  }, []);

  return (
    <div className={styles.blocks}>
      <h3>Organisation</h3>
      {formDisable && (
        <PrimaryBtn
          className={styles.editBtn}
          icon={<img src={editPen} alt="edit" />}
          onClick={() => setFormDisable(!formDisable)}
        />
      )}
      {!formDisable && <PrimaryBtn className={styles.saveBtn} text={"Save"} onClick={handleSend} />}
      <PrimarySelect
        placeholder={organization.name ? organization.name : "Pilot organization"}
        className={styles.select}
        selectList={pilotList}
        onClick={(value) => changeFieldValue("organization", value)}
        labelText={"Name"}
        disable={formDisable}
      />
      <PrimarySelect
        placeholder={team.name ? team.name : "Team"}
        className={styles.select}
        selectList={organization.team}
        onClick={(value) => changeFieldValue("team", value)}
        labelText={"Team"}
        disable={formDisable}
      />
    </div>
  );
};

export default Organizations;
