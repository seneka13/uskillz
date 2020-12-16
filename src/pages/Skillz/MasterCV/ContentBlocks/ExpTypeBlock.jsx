import React from "react";
import {  useDispatch } from "react-redux";
import linkArrow from "../../../../assets/SkillzImages/linkarrow.svg";
import {  setCurrentExpDetail } from "../../../../store/actions";
import styles from "./content.module.scss";
import { useHistory } from "react-router-dom";
import routes from "../../../../routes/routes";

const ExpTypeBlock = ({ expType, expChild }) => {
  const dispatch = useDispatch();
  const setCurrentDetail = (data) => dispatch(setCurrentExpDetail(data));
  const history = useHistory();


  const handleDetail = (item) => {
    setCurrentDetail(item);
    history.push(routes.skillz.experienceDetail);
  };

  return (
    <div className={styles.contentBlock}>
      <h3>{expType}</h3>
      <ul className={styles.listContainer}>
        {expChild &&
          expChild.map((item) => {
            return (
              <li key={item.id} className={styles.listItem}>
                <div>
                  <div className={styles.count}>{item.experiences.length}</div>
                  {item.name}
                </div>
                <button onClick={() => handleDetail(item)}>
                  <img src={linkArrow} alt="link" />
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ExpTypeBlock;
