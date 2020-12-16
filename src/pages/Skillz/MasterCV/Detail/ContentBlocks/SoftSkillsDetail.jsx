import React, { useEffect, useState } from "react";
import InnerBranchDropDown from "../../../../../components/InnerBranchDropDown";
import linkArrow from "../../../../../assets/SkillzImages/linkarrow.svg";
import { useSelector } from "react-redux";
import styles from "./content.module.scss";

const SoftSkillsDetail = () => {
  const [isShow, setIsShow] = useState(false);
  const { currentCompanyExpDetail, expereienceList, softSkillsHave } = useSelector((state) => ({
    currentCompanyExpDetail: state.masterReducers.currentCompanyExpDetail,
    expereienceList: state.addExpReducers.expereienceList,
    softSkillsHave: state.skillsReducers.softSkillsHave,
  }));
  const [companySoftSkills, setCompanySoftSkills] = useState([]);

  useEffect(() => {
    expereienceList &&
      expereienceList.map((exp) => {
        if (exp.company_name === currentCompanyExpDetail.id) {
          exp.soft_skills.map((expSkill) => {
            setCompanySoftSkills((prev) => [
              ...prev,
              softSkillsHave.find((softSkill) => softSkill.id === expSkill && !companySoftSkills.includes(softSkill)),
            ]);
          });
        }
      });
  }, []);

  return (
    <div className={styles.contentBlock}>
      <div className={styles.dropDown}>
        <div className={styles.dropDownContent}>
          <div>
            <div className={styles.count}>{companySoftSkills.length}</div>
            <h4 className={styles.title}>Soft Skills</h4>
          </div>
          <button onClick={() => setIsShow(!isShow)}>
            <img src={linkArrow} alt="show" className={`${isShow ? styles.dropDownShow : styles.dropDownClose}`} />
          </button>
        </div>
        <ul className={styles.childsContainerShow}>
          {companySoftSkills &&
            companySoftSkills.map((item) => {
              return (
                <li key={item.id} className={isShow ? styles.itemShown : styles.itemHiden}>
                  <div className={styles.verticalLine} />
                  <InnerBranchDropDown count={item.experiences.length} itemName={item.name} childs={item.experiences} />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SoftSkillsDetail;
