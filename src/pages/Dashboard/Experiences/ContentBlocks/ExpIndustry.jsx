import React, { useState } from "react";
import InnerBranchDropDown from "../../../../components/InnerBranchDropDown";
import linkArrow from "../../../../assets/SkillzImages/linkarrow.svg";
import styles from "./content.module.scss";

const ExpIndustry = ({ users, industry }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <li className={styles.industryDrop}>
      <div className={styles.dropDown}>
        <div className={styles.dropDownContent}>
          <div>
            <div className={styles.count}>{users && users.length}</div>
            <h4 className={styles.liName}>{industry}</h4>
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
        {users &&
          users.map((item) => {
            return (
              <li key={item.id} className={isShow ? styles.itemShown : styles.itemHiden}>
                <div className={styles.verticalLine} />
                <InnerBranchDropDown count={item.companies.length} itemName={item.name} childs={item.companies} />
              </li>
            );
          })}
      </ul>
    </li>
  );
};

export default ExpIndustry;
