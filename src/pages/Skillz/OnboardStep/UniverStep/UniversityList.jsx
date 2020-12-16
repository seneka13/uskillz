import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../../../../store/actions";
import styles from "../step.module.scss";

const UniversityList = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("university", formField, value));
  const { universityList, university } = useSelector((state) => ({
    university: state.fieldsReducers.university.university,
    universityList: state.onboardReducers.universityList,
  }));
  const handleSelect = (e, item) => {
    e.preventDefault();
    changeFieldValue("university", item);
    setShow(false);
  };

  return (
    <div className={styles.showUnivList}>
      {university.length > 0
        ? universityList.map((item) => {
            return (
              <button onClick={(e) => handleSelect(e, item)} key={item.id}>
                {item.name}
              </button>
            );
          })
        : null}
    </div>
  );
};

export default UniversityList;
