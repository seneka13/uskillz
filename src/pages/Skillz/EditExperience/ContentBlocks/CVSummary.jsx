import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import quest from "../../../../assets/SkillzImages/quest.svg";
import styles from "./content.module.scss";
import PrimaryText from "../../../../components/PrimaryText";
import { changeField } from "../../../../store/actions";

const CVSummary = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("editExperiences", formField, value));
  const cvSummary = useSelector((state) => state.fieldsReducers.editExperiences.cvSummary);

  return (
    <div>
      <div className={styles.contentBlock}>
        <h3>
          CV Summary <span className={styles.requireField}>*</span>
        </h3>
        <PrimaryBtn className={styles.popoverBtn} icon={<img src={quest} alt="quest" />} />
        <PrimaryText
          className={styles.textField}
          placeholder={"Add the bullet point you would have written on your CV"}
          onChange={(value) => changeFieldValue("cvSummary", value)}
          value={cvSummary}
        />
      </div>
    </div>
  );
};

export default CVSummary;
