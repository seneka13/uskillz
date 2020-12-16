import React, { useState, useRef } from "react";
import linkArrow from "../../assets/SkillzImages/linkarrow.svg";
import select from "../../assets/SkillzImages/select.svg";
import styles from "./branch.module.scss";
import { string, array, number, oneOfType } from "prop-types";

const BranchDropDown = ({ count, itemName, childs, onClick, disable, empty, arrowNone }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.dropItem}>
      <div className={styles.dropItemContent}>
        <div>
          <div className={!empty ? styles.count : styles.whiteCount}>{count}</div>
          <div className={styles.itemText}>{itemName}</div>
        </div>
        {!arrowNone && (
          <button onClick={() => setIsShow(!isShow)}>
            <img src={linkArrow} alt="show" className={`${isShow ? styles.dropDownShow : styles.dropDownClose}`} />
          </button>
        )}
      </div>
      <ul className={styles.childsContainerShow}>
        {childs.map((item) => {
          return (
            <li key={item.id} className={isShow ? styles.itemShow : styles.itemHide}>
              <div className={styles.verticalLine} />
              {item.name}
              {!disable && (
                <button className={styles.selectBtn} onClick={() => onClick(item)}>
                  <img src={select} alt="select" />
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

BranchDropDown.propTypes = {
  count: oneOfType([number, string]),
  itemName: string,
  child: array,
};

export default BranchDropDown;
