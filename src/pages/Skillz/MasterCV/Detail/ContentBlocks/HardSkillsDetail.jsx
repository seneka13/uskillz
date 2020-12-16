import React, { useEffect, useState } from "react";
import InnerBranchDropDown from "../../../../../components/InnerBranchDropDown";
import linkArrow from "../../../../../assets/SkillzImages/linkarrow.svg";
import { useSelector } from "react-redux";
import styles from "./content.module.scss";

const HardSkillsDetail = () => {
  const [isShow, setIsShow] = useState(false);
  const { currentCompanyExpDetail, expereienceList, hardSkillsHave } = useSelector((state) => ({
    currentCompanyExpDetail: state.masterReducers.currentCompanyExpDetail,
    expereienceList: state.addExpReducers.expereienceList,
    hardSkillsHave: state.skillsReducers.hardSkillsHave,
  }));
  const [companyHardSkills, setCompanyHardSkills] = useState([]);

  useEffect(() => {
    expereienceList &&
      expereienceList.map((exp) => {
        if (exp.company_name === currentCompanyExpDetail.id) {
          exp.hard_skills.map((expSkill) => {
            setCompanyHardSkills((prev) => [
              ...prev,
              hardSkillsHave.find((hardSkill) => hardSkill.id === expSkill && !companyHardSkills.includes(hardSkill)),
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
            <div className={styles.count}>{companyHardSkills.length}</div>
            <h4 className={styles.title}>Hard Skills</h4>
          </div>
          <button onClick={() => setIsShow(!isShow)}>
            <img
              src={linkArrow}
              alt="show"
              className={`${isShow ? styles.dropDownShow : styles.dropDownClose} ${styles.arrIimg}`}
            />
          </button>
        </div>
      </div>
      <ul className={styles.childsContainerShow}>
        {companyHardSkills &&
          companyHardSkills.map((item) => {
            return (
              <li key={item.id} className={isShow ? styles.itemShown : styles.itemHiden}>
                <div className={styles.verticalLine} />
                <InnerBranchDropDown count={item.experiences.length} itemName={item.name} childs={item.experiences} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HardSkillsDetail;
