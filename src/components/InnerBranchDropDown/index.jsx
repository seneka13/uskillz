import React, { useState, useRef } from "react";
import linkArrow from "../../assets/SkillzImages/linkarrow.svg";
import select from "../../assets/SkillzImages/select.svg";
import styles from "./branch.module.scss";
import { string, array, number } from "prop-types";

const InnerBranchDropDown = ({ count, itemName, childs, onClick }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.dropItem}>
      <div className={styles.dropItemContent}>
        <div>
          <div className={styles.line}>
            <div className={styles.count}>{count}</div>
          </div>
          <div className={styles.itemText}>{itemName}</div>
        </div>
        <button onClick={() => setIsShow(!isShow)}>
          <img src={linkArrow} alt="show" className={`${isShow ? styles.dropDownShow : styles.dropDownClose}`} />
        </button>
      </div>
      <ul className={styles.childsContainerShow}>
        {childs && childs.map((item) => {
          return (
            <li key={item.id} className={isShow ? styles.itemShow : styles.itemHide}>
              <div className={styles.verticalLine} />
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

InnerBranchDropDown.propTypes = {
  count: number,
  itemName: string,
  child: array,
};

export default InnerBranchDropDown;
