import React, { useEffect, useState } from "react";
import BranchDropDown from "../../../../../components/BranchDropDown";
import linkArrow from "../../../../../assets/SkillzImages/linkarrow.svg";
import select from "../../../../../assets/SkillzImages/select.svg";
import styles from "./content.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeField } from "../../../../../store/actions";
import { useHistory } from "react-router-dom";
import routes from "../../../../../routes/routes";

const ExpDetail = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formName, formField, value) => dispatch(changeField(formName, formField, value));
  const [isShow, setIsShow] = useState(false);
  const { currentCompanyExpDetail, expereienceList, hardSkillsList, softSkillsList } = useSelector((state) => ({
    currentCompanyExpDetail: state.masterReducers.currentCompanyExpDetail,
    expereienceList: state.addExpReducers.expereienceList,
    hardSkillsList: state.skillsReducers.hardSkillsList,
    softSkillsList: state.skillsReducers.softSkillsList,
  }));
  const history = useHistory();
  const expListFilter = expereienceList.filter((item) => item.company_name === currentCompanyExpDetail.id);

  const handleEdit = (slot) => {
    const targetExp = expereienceList.find((exp) => exp.id === slot.id);
    const filterSkill = (skillsIdArr, skillsArr) =>
      skillsIdArr.map((skill) => skillsArr.find((hardSkill) => hardSkill.id === skill));
    if (targetExp) {
      changeFieldValue("editExperiences", "updateUrl", targetExp.experience_detail);
      changeFieldValue("editExperiences", "expName", targetExp.name);
      changeFieldValue("editExperiences", "cvSummary", targetExp.summary);
      changeFieldValue("editExperiences", "company", {
        id: targetExp.company_name,
        name: targetExp.company_display,
      });
      changeFieldValue("editExperiences", "industry", {
        id: targetExp.company_industry,
        name: targetExp.company_industry_display,
      });
      changeFieldValue("editExperiences", "expType", {
        id: targetExp.company_experience_type,
        name: targetExp.company_experience_type_display,
      });
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
    <div className={styles.contentBlock}>
      <div className={styles.dropDown}>
        <div className={styles.dropDownContent}>
          <div>
            <div className={styles.count}>{expListFilter.length}</div>
            <h4 className={styles.title}>Experiences</h4>
          </div>
          <button onClick={() => setIsShow(!isShow)}>
            <img src={linkArrow} alt="show" className={`${isShow ? styles.dropDownShow : styles.dropDownClose}`} />
          </button>
        </div>
        <ul className={styles.expContainerShow}>
          {expListFilter.map((item) => {
            return (
              <li key={item.id} className={isShow ? styles.expShown : styles.expHiden}>
                <div className={styles.verticalLine} />
                {item.name}
                <button className={styles.selectBtn} onClick={() => handleEdit(item)}>
                  <img src={select} alt="select" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExpDetail;
