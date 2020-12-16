import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import plus from "../../../assets/SkillzImages/plus.svg";
import PrimaryBtn from "../../../components/PrimaryBtn";
import styles from "./org.module.scss";
import PrimaryInput from "../../../components/PrimaryInput";
import TeamsRow from "./TeamsRow";
import { changeField, createUsersTeam } from "../../../store/actions";

const Teams = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("organisationTeams", formField, value));
  const createTeam = (team) => dispatch(createUsersTeam(team));

  const { teamsList, teamName } = useSelector((state) => ({
    teamName: state.fieldsReducers.organisationTeams.teamName,
    teamsList: state.orgTeamsReducers.teamsList,
    success: state.orgTeamsReducers.createTeam.success,
    loading: state.orgTeamsReducers.createTeam.loading,
    failed: state.orgTeamsReducers.createTeam.failed,
  }));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleCreate = () => {
    if (teamName) {
      createTeam({ name: teamName });
      changeFieldValue("teamName", "");
    }
  };

  const windowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, [windowWidth]);

  return (
    <div className={styles.blocks}>
      <h3>Teams</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Members</th>
            <th>Expand</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {teamsList &&
            teamsList.map((teamRow) => {
              return <TeamsRow key={teamRow.id} teamRow={teamRow} />;
            })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">
              <div className={styles.tdContent}>
                <PrimaryInput
                  className={styles.inputField}
                  type="text"
                  placeholder={"Type new team name"}
                  name="teams"
                  autoComplete="off"
                  value={teamName}
                  onChange={(value) => changeFieldValue("teamName", value)}
                />
                <PrimaryBtn
                  className={styles.addBtn}
                  text={windowWidth > 800 ? "Add new team" : ""}
                  icon={<img src={plus} alt="add" />}
                  onClick={handleCreate}
                />
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Teams;
