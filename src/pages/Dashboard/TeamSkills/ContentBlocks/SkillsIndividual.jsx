import React from "react";
import styles from "./content.module.scss";
import RadioInput from "../../../../components/RadioInput";
import { useDispatch } from "react-redux";
import { getPresonGraphsSkillsList, getSkillsByUsers } from "../../../../store/actions";
import { array } from "prop-types";

const SkillsIndividual = ({ membersList }) => {
  const dispatch = useDispatch();
  const getSkills = (id) => dispatch(getSkillsByUsers(id));
  const getSkillsGraphs = (id) => dispatch(getPresonGraphsSkillsList(id));
  const handleChange = (userId) => {
    getSkills(userId);
    getSkillsGraphs(userId);
  };

  return (
    <div className={styles.skillsBlock}>
      <h3>Individual</h3>
      {membersList &&
        membersList.map((item) => {
          return (
            <RadioInput
              key={item.id}
              id={item.id}
              type="radio"
              value={item.user}
              onChange={() => handleChange(item.id)}
              name="membersList"
              labelText={item.user}
            />
          );
        })}
    </div>
  );
};

SkillsIndividual.propTypes = {
  membersList: array,
};

export default SkillsIndividual;
