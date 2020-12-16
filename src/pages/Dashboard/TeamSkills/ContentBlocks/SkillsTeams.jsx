import React from "react";
import styles from "./content.module.scss";
import RadioInput from "../../../../components/RadioInput";
import { useDispatch } from "react-redux";
import { getSkillsByTeams, getTeamsGraphsSkillsList, getTeamsGraphsSkillsNeedList } from "../../../../store/actions";
import { array } from "prop-types";

const SkillsTeams = ({ teamsList }) => {
  const dispatch = useDispatch();
  const getSkills = (id) => dispatch(getSkillsByTeams(id));
  const getGraphSkills = (id) => dispatch(getTeamsGraphsSkillsList(id));
  const getGraphSkillsNeed = (id) => dispatch(getTeamsGraphsSkillsNeedList(id));

  const handleChange = (teamId) => {
    getSkills(teamId);
    getGraphSkills(teamId);
    getGraphSkillsNeed(teamId);
  };

  return (
    <div className={styles.skillsBlock}>
      <h3>Teams</h3>
      {teamsList &&
        teamsList.map((item) => {
          return (
            <RadioInput
              key={item.id}
              id={item.id}
              type="radio"
              value={item.name}
              onChange={() => handleChange(item.id)}
              name="teamsList"
              labelText={item.name}
            />
          );
        })}
    </div>
  );
};

SkillsTeams.propTypes = {
  teamsList: array,
};

export default SkillsTeams;
