import React from "react";
import styles from "./content.module.scss";
import BranchDropDown from "../../../../components/BranchDropDown";
import { array } from "prop-types";

const SoftSkillsHave = ({ skillsTeamsList }) => {
  const filterArr = skillsTeamsList.filter((item) => item.soft_skills).map((item) => item.soft_skills);

  return (
    <div>
      <div className={styles.skillsBlock}>
        <h3>Soft Skills</h3>
        <ul className={styles.skillsContainer}>
          {filterArr &&
            filterArr.map((item) => {
              return (
                <li key={item.id}>
                  <BranchDropDown
                    count={item.users ? item.users.length : item.experiences.length}
                    itemName={item.name}
                    childs={item.users ? item.users : item.experiences}
                    onClick={(slot) => console.log(slot)}
                    disable={true}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

SoftSkillsHave.propTypes = {
  skillsTeamsList: array,
};

export default SoftSkillsHave;
