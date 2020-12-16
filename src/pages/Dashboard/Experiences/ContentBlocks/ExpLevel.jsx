import React, { useEffect } from "react";
import styles from "./content.module.scss";
import { useDispatch } from "react-redux";
import RadioInput from "../../../../components/RadioInput";
import { getExpAndIndustriesGraphsList, getExpAndIndustriesList } from "../../../../store/actions";
import { func, string } from "prop-types";

const Level = ({ radioState, setRadioState }) => {
  const dispatch = useDispatch();
  const getExpAndIndustries = () => dispatch(getExpAndIndustriesList());
  const getExpAndIndustriesGraphs = () => dispatch(getExpAndIndustriesGraphsList());
  useEffect(() => {
    setRadioState("Whole Organisation");
  }, []);

  const handleChange = (value) => {
    setRadioState("Whole Organisation");
    getExpAndIndustries();
    getExpAndIndustriesGraphs();
  };

  return (
    <div className={styles.expBlock}>
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

Level.propTypes = {
  radioState: string,
  setRadioState: func,
};

export default Level;
