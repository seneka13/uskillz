import React from "react";
import styles from "./content.module.scss";
import RadioInput from "../../../../components/RadioInput";
import { useDispatch } from "react-redux";
import { getExpTypesByUsers, getPersonGraphsExpList } from "../../../../store/actions";
import { array } from "prop-types";

const ExpIndividual = ({ membersList }) => {
  const dispatch = useDispatch();
  const getSkills = (id) => dispatch(getExpTypesByUsers(id));
  const getExpGraphs = (id) => dispatch(getPersonGraphsExpList(id));
  const handleChange = (userId) => {
    getSkills(userId);
    getExpGraphs(userId);
  };

  return (
    <div className={styles.expBlock}>
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

ExpIndividual.propTypes = {
  membersList: array,
};

export default ExpIndividual;
