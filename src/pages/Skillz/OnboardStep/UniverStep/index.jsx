import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePick from "../../../../components/Datepicker";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import PrimarySelect from "../../../../components/PrimarySelect";
import Loader from "../../../../components/Loader";
import { changeField, getUniversityList, setNextStep, getDegreeList, updateProfile, createUniversity, clearFields } from "../../../../store/actions";
import crossIcon from "../../../../assets/SkillzImages/cross.svg";
import styles from "../step.module.scss";
import SearchInput from "../../../../components/SearchInput";
import UniversityList from "./UniversityList";
import FormError from "../../../../components/FormError";

const UniverStep = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("university", formField, value));
  const setStep = (value) => dispatch(setNextStep(value));
  const getUniversity = (value) => dispatch(getUniversityList(value));
  const getDegree = () => dispatch(getDegreeList());
  const [show, setShow] = useState(false);
  const [formValid, setFormValid] = useState("");
  const sendUniv = (url, data) => dispatch(updateProfile(url, data));
  const createUniv = (data) => dispatch(createUniversity(data));
  const clearForm = () => dispatch(clearFields());

  const { user, university, degree, startDate, endDate, currentStep, degreeList, universityList, success, loading, failed } = useSelector(
    (state) => ({
      user: state.authReducers.user,
      university: state.fieldsReducers.university.university,
      degree: state.fieldsReducers.university.degree,
      startDate: state.fieldsReducers.university.startDate,
      endDate: state.fieldsReducers.university.endDate,
      currentStep: state.onboardReducers.currentStep,
      degreeList: state.onboardReducers.degreeList,
      universityList: state.onboardReducers.universityList,
      success: state.profileReducers.updateProfile.success,
      loading: state.profileReducers.updateProfile.loading,
      failed: state.profileReducers.updateProfile.failed,
      error: state.profileReducers.updateProfile.error,
    })
  );

  const searchUniversity = (value) => {
    changeFieldValue("university", value);
    value.length > 0 && getUniversity(value);
    universityList.length > 0 && setShow(true);
  };

  const handleCreate = () => {
    if (typeof university != "object" && university.length > 0 && universityList.length < 1) {
      createUniv({ name: university });
    }
  };

  const handleSend = (e) => {
    setStep(currentStep + 1);
    e.preventDefault();
    if (university && degree && startDate && endDate) {
      const data = {
        university: university.id,
        degree: degree.id,
        university_start_date: startDate,
        university_end_date: endDate,
      };
      sendUniv(user.update_profile, data);
    } else {
      setFormValid("You need to fill in all fields");
    }
  };

  useEffect(() => {
    clearForm();
  }, [success]);

  useEffect(() => {
    const alert = setTimeout(() => setFormValid(""), 3500);
    return () => clearTimeout(alert);
  }, [formValid]);

  useEffect(() => {
    // if (!!user.university_name) {
    //   setStep(currentStep + 1);
    // }
    getDegree();
  }, []);

  return (
    <div className={styles.stepComponent}>
      <h1>Select your University</h1>
      <p>First, select your university and degree</p>
      <div className={styles.selectForm}>
        <div className={styles.univSearchContainer} onBlur={() => handleCreate()}>
          <SearchInput
            type="text"
            name="university"
            placeholder="Search University Name"
            autoComplete="off"
            className={styles.input}
            value={university.name ? university.name : university}
            onChange={(value) => searchUniversity(value)}
            labelIcon={<img src={crossIcon} alt="field img" />}
            onClick={() => changeFieldValue("university", "")}
          />
          {show && <UniversityList show={show} setShow={setShow} />}
        </div>
        <PrimarySelect
          placeholder={degree.name ? degree.name : "Select Degree"}
          className={styles.select}
          selectList={degreeList}
          onClick={(value) => changeFieldValue("degree", value)}
        />
        <div className={styles.DatePickContainer}>
          <span className={styles.DatePickInput}>
            <DatePick selectedDate={startDate} action={(value) => changeFieldValue("startDate", value)} text="Start Date" />
          </span>
          <span className={styles.DatePickInput}>
            <DatePick selectedDate={endDate} action={(value) => changeFieldValue("endDate", value)} text="End Date" />
          </span>
        </div>
      </div>
      <PrimaryBtn text={"Next"} className={styles.stepSendBtn} onClick={handleSend} />
      <PrimaryBtn text={"I didn’t go to University"} className={styles.stepUnderBtn} />
      {formValid && <FormError fieldError={formValid} apiError={"API ERROR"} />}
      {loading && !failed && <Loader />}
    </div>
  );
};

export default UniverStep;
