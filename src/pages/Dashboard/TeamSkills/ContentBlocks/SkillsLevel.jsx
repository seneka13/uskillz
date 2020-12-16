import React, { useEffect } from "react";
import styles from "./content.module.scss";
import { useDispatch } from "react-redux";
import RadioInput from "../../../../components/RadioInput";
import { getGraphsSkillsList, getGraphsSkillsNeedList, getTeamsSkillsList } from "../../../../store/actions";
import { func, string } from "prop-types";

const SkillsLevel = ({ radioState, setRadioState }) => {
  const dispatch = useDispatch();
  const getExistSkills = () => dispatch(getTeamsSkillsList());
  const getGraphSkills = () => dispatch(getGraphsSkillsList());
  const getGraphsSkillsNeed = () => dispatch(getGraphsSkillsNeedList());
  useEffect(() => {
    setRadioState("Whole Organisation");
  }, []);

  const handleChange = (value) => {
    setRadioState("Whole Organisation");
    getExistSkills();
    getGraphSkills();
    getGraphsSkillsNeed();
  };

  return (
    <div className={styles.skillsBlock}>
      <h3>Level</h3>
      <RadioInput
        id="whole"
        type="radio"
        value={"Whole Organisation"}
        onChange={(value) => handleChange(value)}
        name="level"
        labelText={"Whole Organisation"}
        checked={radioState === "Whole Organisation"}
      />
      <RadioInput
        id="team"
        type="radio"
        value={"Teams"}
        onChange={(value) => setRadioState(value)}
        name="level"
        labelText={"Teams"}
      />
      <RadioInput
        id="invdividual"
        type="radio"
        value={"Individual"}
        onChange={(value) => setRadioState(value)}
        name="level"
        labelText={"Individual"}
      />
    </div>
  );
};

SkillsLevel.propTypes = {
  radioState: string,
  setRadioState: func,
};

export default SkillsLevel;
