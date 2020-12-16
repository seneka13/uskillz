import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import SearchInput from "../../../../components/SearchInput";
import SearchChooser from "../../../../components/SearchChooser";
import quest from "../../../../assets/SkillzImages/quest.svg";
import plus2 from "../../../../assets/SkillzImages/plus2.svg";
import styles from "./content.module.scss";
import { addSoftSkills, changeField } from "../../../../store/actions";
import { filterSelected, randomArr } from "../../../../services/arrServices";

const AddSoftSkills = () => {
  const dispatch = useDispatch();
  const changeFieldValue = useCallback(
    (formField, value) => dispatch(changeField("editExperiences", formField, value)),
    [dispatch]
  );
  const addSkills = (data) => dispatch(addSoftSkills(data));
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState([]);
  const {
    softSkills,
    softSkillsList,
    addSkillsSuccess,
    selectedSoftSkills,
    selectNeedSoftSkill,
    newSoftSkill,
  } = useSelector((state) => ({
    softSkills: state.fieldsReducers.editExperiences.softSkills,
    selectNeedSoftSkill: state.fieldsReducers.editExperiences.selectNeedSoftSkill,
    selectedSoftSkills: state.fieldsReducers.editExperiences.selectedSoftSkills,
    softSkillsList: state.skillsReducers.softSkillsList,
    addSkillsSuccess: state.skillsReducers.addSoftSkill.success,
    newSoftSkill: state.skillsReducers.newSoftSkill,
  }));

  useEffect(() => {
    selectNeedSoftSkill.length > 0 && setSelected((prev) => [...prev, ...selectNeedSoftSkill]);
  }, [selectNeedSoftSkill]);

  useEffect(() => {
    randomArr(softSkillsList).then((data) => setSuggestions(data));
    return () => {};
  }, [softSkillsList]);

  useEffect(() => {
    addSkillsSuccess && setSelected((prev) => [...prev, newSoftSkill]);
    addSkillsSuccess && changeFieldValue("softSkills", "");
  }, [addSkillsSuccess, newSoftSkill, changeFieldValue]);

  useEffect(() => {
    changeFieldValue("selectedSoftSkills", filterSelected(selected));
    // changeFieldValue("selectNeedSoftSkill", []);
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
    if (softSkills) {
      if (typeof softSkills == "string") {
        addSkills({ name: softSkills });
      } else {
        setSelected((prev) => [...prev, item]);
        changeFieldValue("softSkills", "");
      }
    }
  };

  return (
    <div>
      <div className={styles.contentBlock}>
        <h3>
          Soft Skills <span className={styles.requireField}>*</span>
        </h3>
        <PrimaryBtn className={styles.popoverBtn} icon={<img src={quest} alt="quest" />} />
        <div className={styles.searchContainer}>
          <SearchInput
            type="text"
            placeholder={"Type a soft skill"}
            name="softSkills"
            autoComplete="off"
            value={softSkills.name ? softSkills.name : softSkills}
            className={styles.inputField}
            labelIcon={
              softSkills && <img className={styles.pulse} src={plus2} alt="field img" />
            }
            onClick={() => handleCreate(softSkills)}
            onChange={(value) => changeFieldValue("softSkills", value)}
          />
          <SearchChooser
            searchArr={softSkillsList}
            searchField={softSkills}
            fieldName={"softSkills"}
            formName={"editExperiences"}
            className={styles.skillsList}
          />
          <div className={styles.selectedBlock}>
            {selectedSoftSkills.length > 0 &&
              selectedSoftSkills.map(
                (item) =>
                  item && (
                    <button key={item.id} onClick={() => handleRemove(item)}>
                      {item.name}
                    </button>
                  )
              )}
          </div>
          <div className={styles.choiceBlock}>
            <h5>Suggested soft skills:</h5>
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

export default AddSoftSkills;
