import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./content.module.scss";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import PrimaryInput from "../../../../components/PrimaryInput";
import editPen from "../../../../assets/SkillzImages/edit.svg";
import { changeField } from "../../../../store/actions";

const AddExpName = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("addExperiences", formField, value));
  const [fieldDisable, setFieldDisable] = useState(true);
  const [expValue, setExpValue] = useState("");

  const { expName } = useSelector((state) => ({
    expName: state.fieldsReducers.addExperiences.expName,
  }));

  const handleSave = () => {
    setFieldDisable(!fieldDisable);
    changeFieldValue("expName", expValue);
  };
  return (
    <div className={styles.addExpName}>
      {fieldDisable && <h1>{expName ? expName : "Title e.g. Market Research Report"}</h1>}
      {!fieldDisable && (
        <PrimaryInput
          type="text"
          placeholder={"Title e.g. Market Research Report"}
          value={expValue}
          name="title"
          autoComplete="off"
          className={styles.nameField}
          onChange={(value) => setExpValue(value)}
        />
      )}
      <span className={styles.requireField}>*</span>
      {fieldDisable && (
        <PrimaryBtn
          className={styles.editBtn}
          icon={<img src={editPen} alt="edit" />}
          onClick={() => setFieldDisable(!fieldDisable)}
        />
      )}
      {!fieldDisable && (
        <PrimaryBtn className={`${styles.saveBtn} ${styles.pulse} `} text={"Save"} onClick={handleSave} />
      )}
    </div>
  );
};

export default AddExpName;
