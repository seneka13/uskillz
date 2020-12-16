import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./skills.module.scss";
import { useHistory } from "react-router-dom";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import quest from "../../../../assets/SkillzImages/quest.svg";
import routes from "../../../../routes/routes";
import crossIcon from "../../../../assets/SkillzImages/cross.svg";
import SearchChooser from "../../../../components/SearchChooser";
import SearchInput from "../../../../components/SearchInput";
import BranchDropDown from "../../../../components/BranchDropDown";
import EmptySkill from "./EmptySkill";
import MiniLoader from "../../../../components/MiniLoader";
import { changeField, addHardSkills, getHardSkills, getHardSkillsHave, getHardSkillsNeed, defaultSkillState } from "../../../../store/actions";

const HardSkills = ({ active }) => {
  const dispatch = useDispatch();
  const changeFieldValue = (formName, formField, value) => dispatch(changeField(formName, formField, value));
  const getHaveSkills = () => dispatch(getHardSkillsHave());
  const getNeedSkills = () => dispatch(getHardSkillsNeed());
  const addSkills = (data) => dispatch(addHardSkills(data));
  const clearFetchState = () => dispatch(defaultSkillState());
  const history = useHistory();

  const {
    hardSkills,
    hardSkillsList,
    softSkillsList,
    hardSkillsHave,
    hardSkillsNeed,
    addSkillSuccess,
    addSkillLoading,
    deleteSkillSuccess,
    addExpSuccess,
    expereienceList,
  } = useSelector((state) => ({
    hardSkills: state.fieldsReducers.skillsSearch.hardSkills,
    hardSkillsList: state.skillsReducers.hardSkillsList,
    softSkillsList: state.skillsReducers.softSkillsList,
    hardSkillsHave: state.skillsReducers.hardSkillsHave,
    hardSkillsNeed: state.skillsReducers.hardSkillsNeed,
    addSkillSuccess: state.skillsReducers.addHardSkill.success,
    addSkillLoading: state.skillsReducers.addHardSkill.loading,
    deleteSkillSuccess: state.skillsReducers.deleteSkill.success,
    addExpSuccess: state.addExpReducers.createExp.success,
    expereienceList: state.addExpReducers.expereienceList,
  }));

  useEffect(() => {
    addExpSuccess && getHaveSkills();
    addExpSuccess && clearFetchState();
  }, [addExpSuccess]);

  useEffect(() => {
    (addSkillSuccess || deleteSkillSuccess) && getNeedSkills();
    (addSkillSuccess || deleteSkillSuccess) && clearFetchState();
    changeFieldValue("skillsSearch", "hardSkills", "");
  }, [addSkillSuccess, deleteSkillSuccess]);

  const handleAdd = () => {
    if (hardSkills) addSkills({ name: hardSkills.name ? hardSkills.name : hardSkills });
  };

  const handleEdit = (slot) => {
    const targetExp = expereienceList.find((exp) => exp.id === slot.id);
    const filterSkill = (skillsIdArr, skillsArr) => skillsIdArr.map((skill) => skillsArr.find((hardSkill) => hardSkill.id === skill));

    if (targetExp) {
      changeFieldValue("editExperiences", "updateUrl", targetExp.experience_detail);
      changeFieldValue("editExperiences", "expName", targetExp.name);
      changeFieldValue("editExperiences", "cvSummary", targetExp.summary);
      changeFieldValue("editExperiences", "company", { id: targetExp.company_name, name: targetExp.company_display });
      changeFieldValue("editExperiences", "industry", { id: targetExp.company_industry, name: targetExp.company_industry_display });
      changeFieldValue("editExperiences", "expType", { id: targetExp.company_experience_type, name: targetExp.company_experience_type_display });
      changeFieldValue("editExperiences", "title", targetExp.company_title);
      changeFieldValue("editExperiences", "location", targetExp.company_location);
      changeFieldValue("editExperiences", "startDate", targetExp.company_start_date);
      changeFieldValue("editExperiences", "endDate", targetExp.company_end_date);
      changeFieldValue("editExperiences", "selectNeedSoftSkill", filterSkill(targetExp.soft_skills, softSkillsList));
      changeFieldValue("editExperiences", "selectNeedHardSkill", filterSkill(targetExp.hard_skills, hardSkillsList));
      changeFieldValue("editExperiences", "result", targetExp.result);
      changeFieldValue("editExperiences", "whatIDid", targetExp.what_i_did);
      changeFieldValue("editExperiences", "extraComments", targetExp.extra_comment);
      history.push(routes.skillz.changeExperience);
    }
  };

  return (
    <div>
      <div className={styles.skillsBlock}>
        <h3>Hard Skills</h3>
        <PrimaryBtn className={styles.popoverBtn} icon={<img src={quest} alt="quest" />} />
        {(active === "all" || active === "have") && (
          <ul className={styles.skillsContainer}>
            {hardSkillsHave &&
              hardSkillsHave.map((item) => {
                return (
                  <li key={item.id}>
                    <BranchDropDown
                      count={item.experiences.length}
                      itemName={item.name}
                      childs={item.experiences}
                      onClick={(slot) => handleEdit(slot)}
                    />
                  </li>
                  
                );
              })}
          </ul>
        )}
        {(active === "all" || active === "need") && (
          <ul className={styles.skillsContainer}>
            {hardSkillsNeed &&
              hardSkillsNeed.map((item) => {
                return (
                  <EmptySkill
                    key={item.id}
                    itemName={item.name}
                    itemDelete={item.hard_skill_delete}
                    item={item}
                    formFieldName={"selectNeedHardSkill"}
                  />
                );
              })}
          </ul>
        )}
      </div>
      <div className={styles.skillsBlock}>
        <div className={styles.searchContainer}>
          <SearchInput
            type="text"
            name="Skills"
            placeholder={"Type a Hard skill you need"}
            autoComplete="off"
            className={styles.searchInput}
            value={hardSkills.name ? hardSkills.name : hardSkills}
            onChange={(value) => changeFieldValue("skillsSearch", "hardSkills", value)}
            labelIcon={addSkillLoading ? <MiniLoader /> : <img src={crossIcon} alt="field img" />}
            onClick={() => changeFieldValue("skillsSearch", "hardSkills", "")}
          />

          <SearchChooser
            searchArr={hardSkillsList}
            searchField={hardSkills}
            fieldName={"hardSkills"}
            formName={"skillsSearch"}
            className={styles.skillsList}
          />
          <PrimaryBtn className={styles.addBtn} text={"Add"} onClick={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default HardSkills;
