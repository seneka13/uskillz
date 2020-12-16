import React from "react";
import styles from "./content.module.scss";
import BranchDropDown from "../../../../components/BranchDropDown";
import { array } from "prop-types";

const SoftSkillsNeed = ({ skillsTeamsList }) => {
  const filterArr = skillsTeamsList
    .filter((item) => item.soft_skills_you_need)
    .map((item) => item.soft_skills_you_need);

  return (
    <div>
      <div className={styles.skillsBlock}>
        <h3>Soft Skills Members Need</h3>
        <ul className={styles.skillsContainer}>
          {filterArr &&
            filterArr.map((item) => {
              return (
                <li key={item.id}>
                  <BranchDropDown
                    count={item.users ? item.users.length : ""}
                    itemName={item.name}
                    childs={item.users ? item.users : []}
                    onClick={(slot) => console.log(slot)}
                    disable={true}
                    empty={true}
                    arrowNone={!item.users ? true : false}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

SoftSkillsNeed.propTypes = {
  skillsTeamsList: array,
};

export default SoftSkillsNeed;
