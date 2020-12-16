import React from "react";
import styles from "./content.module.scss";
import BranchDropDown from "../../../../components/BranchDropDown";

const TeamsExpTypeBlock = ({ expType, expChild }) => {
  return (
    <div className={styles.expBlock}>
      <h3>{expType}</h3>
      <ul className={styles.listContainer}>
        {expChild &&
          expChild.map((item) => {
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
  );
};

export default TeamsExpTypeBlock;
