import React from "react";
import styles from "./content.module.scss";
import RadioInput from "../../../../components/RadioInput";
import { useDispatch } from "react-redux";
import { getExpTypesGraphsByTeam, getExpTypesByTeams } from "../../../../store/actions";
import { array } from "prop-types";

const ExpTeams = ({ teamsList }) => {
  const dispatch = useDispatch();
  const getExp = (id) => dispatch(getExpTypesByTeams(id));
  const getExpGraphs = (id) => dispatch(getExpTypesGraphsByTeam(id));

  const handleChange = (teamId) => {
    getExp(teamId);
    getExpGraphs(teamId);
  };

  return (
    <div className={styles.expBlock}>
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

ExpTeams.propTypes = {
  teamsList: array,
};

export default ExpTeams;
