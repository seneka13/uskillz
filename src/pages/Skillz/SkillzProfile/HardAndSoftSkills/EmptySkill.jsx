import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./skills.module.scss";
import addPlus from "../../../../assets/SkillzImages/plus2.svg";
import trash from "../../../../assets/SkillzImages/trash.png";
import { changeField, deleteSkill } from "../../../../store/actions";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import { object, string } from "prop-types";
import routes from "../../../../routes/routes";

const EmptySkill = ({ itemName, itemDelete, item, formFieldName }) => {
  const dispatch = useDispatch();
  const removeSkill = (url) => dispatch(deleteSkill(url));
  const changeFieldValue = useCallback((formField, value) => dispatch(changeField("addExperiences", formField, value)), [dispatch]);
  const history = useHistory();

  function handleClick(e, item) {
    e.preventDefault();
    changeFieldValue(formFieldName, [item]);
    history.push(routes.skillz.createExperiences);
  }

  return (
    <li className={styles.emptySkill}>
      <div>
        <PrimaryBtn
          className={styles.emptyRound}
          icon={<img className={styles.trash} src={trash} al="trash" />}
          onClick={() => removeSkill(itemDelete)}
        ></PrimaryBtn>
        <div className={styles.itemText}>{itemName}</div>
      </div>
      <button onClick={(e) => handleClick(e, item)}>
        <img src={addPlus} alt="addPlus" />
      </button>
    </li>
  );
};

EmptySkill.prpTypes = {
  itemName: string,
  itemDelete: string,
  item: object,
};

export default EmptySkill;
