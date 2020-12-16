import React, { useState } from "react";
import select from "../../assets/SkillzImages/select.svg";
import styles from "./select.module.scss";
import { node, string, func, array, bool } from "prop-types";

const PrimarySelect = ({ className, placeholder, icon, selectList, onClick, labelText, disable }) => {
  const [isShow, setIsShow] = useState(false);
  const arrowHandler = (e) => {
    e.preventDefault();
    setIsShow(!isShow);
  };

  const selectHandler = (e, item) => {
    e.preventDefault();
    onClick(item);
    setIsShow(!isShow);
  };
  return (
    <div>
      {labelText && <h4 className={styles.labelText}>{labelText}</h4>}
      <div className={className}>
        <div className={styles.selectField}>
          {icon}
          {placeholder}
          <button disabled={disable} className={styles.selectBtn} onClick={arrowHandler}>
            {!disable && (
              <img src={select} alt="show" className={`${isShow ? styles.dropDownShow : styles.dropDownClose}`} />
            )}
          </button>
        </div>
        <div className={`${isShow ? styles.selectList : styles.selectListHide}`}>
          {selectList &&
            selectList.map((item) => (
              <button className={styles.selectItem} key={item.id} onClick={(e) => selectHandler(e, item)}>
                {item.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

PrimarySelect.propTypes = {
  className: string,
  onClick: func,
  placeholder: string.isRequired,
  icon: node,
  selectList: array,
  disable: bool,
};

export default PrimarySelect;
