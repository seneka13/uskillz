import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import SearchInput from "../../../../components/SearchInput";
import SearchChooser from "../../../../components/SearchChooser";
import quest from "../../../../assets/SkillzImages/quest.svg";
import plus2 from "../../../../assets/SkillzImages/plus2.svg";
import styles from "./content.module.scss";
import { addHardSkills, changeField } from "../../../../store/actions";
import { filterSelected, randomArr } from "../../../../services/arrServices";

const AddHardSkills = () => {
  const dispatch = useDispatch();
  const changeFieldValue = useCallback(
    (formField, value) => dispatch(changeField("editExperiences", formField, value)),
    [dispatch]
  );
  const addSkills = (data) => dispatch(addHardSkills(data));
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState([]);
  const {
    hardSkills,
    hardSkillsList,
    addSkillsSuccess,
    selectedHardSkills,
    selectNeedHardSkill,
    newHardSkill,
  } = useSelector((state) => ({
    hardSkills: state.fieldsReducers.editExperiences.hardSkills,
    selectedHardSkills: state.fieldsReducers.editExperiences.selectedHardSkills,
    selectNeedHardSkill: state.fieldsReducers.editExperiences.selectNeedHardSkill,
    hardSkillsList: state.skillsReducers.hardSkillsList,
    addSkillsSuccess: state.skillsReducers.addHardSkill.success,
    newHardSkill: state.skillsReducers.newHardSkill,
  }));

  useEffect(() => {
    selectNeedHardSkill.length > 0 && setSelected((prev) => [...prev, ...selectNeedHardSkill]);
  }, [selectNeedHardSkill]);

  useEffect(() => {
    randomArr(hardSkillsList).then((data) => setSuggestions(data));
    return () => {};
  }, [hardSkillsList]);

  useEffect(() => {
    addSkillsSuccess && setSelected((prev) => [...prev, newHardSkill]);
    addSkillsSuccess && changeFieldValue("hardSkills", "");
  }, [addSkillsSuccess, newHardSkill, changeFieldValue]);

  useEffect(() => {
    changeFieldValue("selectedHardSkills", filterSelected(selected));
  }, [selected, changeFieldValue]);

  const handleSelect = (item) => {
    setSelected((prev) => [...prev, item]);
    setSuggestions((prev) => prev.filter((i) => i !== item));
  };

  const handleRemove = (item) => {
    setSuggestions((prev) => [...prev, item]);
    setSelected((prev) => prev.filter((i) => i !== item));
  };

  const handleCreate = (item) => {
    if (hardSkills) {
      if (typeof hardSkills == "string") {
        addSkills({ name: hardSkills });
      } else {
        setSelected((prev) => [...prev, item]);
        changeFieldValue("hardSkills", "");
      }
    }
  };

  return (
    <div>
      <div className={styles.contentBlock}>
        <h3>
          Hard Skills <span className={styles.requireField}>*</span>
        </h3>
        <PrimaryBtn className={styles.popoverBtn} icon={<img src={quest} alt="quest" />} />
        <div className={styles.searchContainer}>
          <SearchInput
            type="text"
            placeholder={"Type a hard skill"}
            name="hardSkills"
            autoComplete="off"
            value={hardSkills.name ? hardSkills.name : hardSkills}
            className={styles.inputField}
            labelIcon={
              hardSkills && <img className={styles.pulse} src={plus2} alt="field img" />
            }
            onClick={() => handleCreate(hardSkills)}
            onChange={(value) => changeFieldValue("hardSkills", value)}
          />
          <SearchChooser
            searchArr={hardSkillsList}
            searchField={hardSkills}
            fieldName={"hardSkills"}
            formName={"editExperiences"}
            className={styles.skillsList}
          />
          <div className={styles.selectedBlock}>
            {selectedHardSkills.length > 0 &&
              selectedHardSkills.map(
                (item) =>
                  item && (
                    <button key={item.id} onClick={() => handleRemove(item)}>
                      {item.name}
                    </button>
                  )
              )}
          </div>
          <div className={styles.choiceBlock}>
            <h5>Suggested hard skills:</h5>
            <div className={styles.choiceBtns}>
              {suggestions.length > 0 &&
                suggestions.map(
                  (item) =>
                    item && (
                      <button key={item.id} onClick={() => handleSelect(item)}>
                        {item.name}
                      </button>
                    )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHardSkills;
