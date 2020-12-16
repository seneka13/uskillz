import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import plus from "../../../assets/SkillzImages/plus.svg";
import PrimaryBtn from "../../../components/PrimaryBtn";
import styles from "./org.module.scss";
import PrimaryInput from "../../../components/PrimaryInput";
import TeamsRow from "./TeamsRow";
import { changeField, createUsersTeam } from "../../../store/actions";
import MembersRow from "./MembersRow";

const Members = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("organisationTeams", formField, value));
  const createTeam = (team) => dispatch(createUsersTeam(team));
  const { membersList, teamsList, teamName, teamSelect } = useSelector((state) => ({
    membersList: state.orgTeamsReducers.membersList,
    teamsList: state.orgTeamsReducers.teamsList,
    success: state.orgTeamsReducers.createTeam.success,
    loading: state.orgTeamsReducers.createTeam.loading,
    failed: state.orgTeamsReducers.createTeam.failed,
    teamName: state.fieldsReducers.organisationTeams.teamName,
    teamSelect: state.fieldsReducers.organisationTeams.teamSelect,
  }));

  const handleCreate = () => {
    if (teamName) {
      createTeam({ name: teamName });
      changeFieldValue("teamName", "");
    }
  };

  return (
    <div className={styles.blocks}>
      <h3>Members</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Admin</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {membersList &&
            membersList.map((membersRow) => {
              return (
                <MembersRow
                  key={membersRow.id}
                  membersRow={membersRow}
                  selectChild={teamsList}
                  teamSelect={teamSelect}
                  changeFieldValue={changeFieldValue}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
