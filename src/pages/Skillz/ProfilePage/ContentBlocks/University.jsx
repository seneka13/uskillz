import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrimarySelect from "../../../../components/PrimarySelect";
import DatePick from "../../../../components/Datepicker";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import {
  changeField,
  getUniversityList,
  getDegreeList,
  updateProfile,
  createUniversity,
} from "../../../../store/actions";
import crossIcon from "../../../../assets/SkillzImages/cross.svg";
import SearchInput from "../../../../components/SearchInput";
import FormError from "../../../../components/FormError";
import editPen from "../../../../assets/SkillzImages/edit.svg";
import styles from "./account.module.scss";
import UniversityList from "../../OnboardStep/UniverStep/UniversityList";

const Uniersity = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("university", formField, value));
  const getUniversity = (value) => dispatch(getUniversityList(value));
  const getDegree = () => dispatch(getDegreeList());
  const createUniv = (data) => dispatch(createUniversity(data));
  const update = (url, data) => dispatch(updateProfile(url, data));
  const [show, setShow] = useState(false);
  const [formValid, setFormValid] = useState("");
  const [formDisable, setFormDisable] = useState(true);

  const {
    user,
    university,
    degree,
    startDate,
    endDate,
    degreeList,
    universityList,
    success,
    loading,
    failed,
  } = useSelector((state) => ({
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
  }));

  const handleCreate = () => {
    if (typeof university != "object" && university.length > 0 && universityList.length < 1) {
      createUniv({ name: university });
      console.log("WORK");
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (university && degree && startDate && endDate) {
      const data = {
        university: university.id,
        degree: degree.id,
        university_start_date: startDate,
        university_end_date: endDate,
      };
      update(user.update_profile, data);
      setFormDisable(!formDisable);
    } else {
      setFormValid("You need to fill in all fields");
    }
  };

  const searchUniversity = (value) => {
    changeFieldValue("university", value);
    value.length > 0 && getUniversity(value);
    universityList.length > 0 && setShow(true);
  };

  useEffect(() => {
    user && user.university && changeFieldValue("university", { id: user.university, name: user.university_name });
    user && user.degree && changeFieldValue("degree", { id: user.degree, name: user.degree_name });
    user && user.university_start_date && changeFieldValue("startDate", user.university_start_date);
    user && user.university_start_date && changeFieldValue("endDate", user.university_end_date);
  }, [user]);

  useEffect(() => {
    const alert = setTimeout(() => setFormValid(""), 3500);
    return () => clearTimeout(alert);
  }, [formValid]);

  useEffect(() => {
    getDegree();
  }, []);

  return (
    <div className={styles.blocks}>
      <h3>University</h3>
      {formDisable && (
        <PrimaryBtn
          className={styles.editBtn}
          icon={<img src={editPen} alt="edit" />}
          onClick={() => setFormDisable(!formDisable)}
        />
      )}
      {!formDisable && <PrimaryBtn className={styles.saveBtn} text={"Save"} onClick={handleSend} />}
      <div className={styles.univSearchContainer} onBlur={() => handleCreate()}>
        <SearchInput
          type="text"
          name="university"
          placeholder={"Search University Name"}
          autoComplete="off"
          className={styles.searchInput}
          value={university.name ? university.name : university}
          onChange={(value) => searchUniversity(value)}
          labelIcon={<img src={crossIcon} alt="field img" />}
          onClick={() => changeFieldValue("university", "")}
          disable={formDisable}
        />
        {show && <UniversityList show={show} setShow={setShow} />}
      </div>
      <PrimarySelect
        placeholder={degree.name ? degree.name : (user && user.degree_name) || "Select Degree"}
        className={styles.select}
        selectList={degreeList}
        onClick={(value) => changeFieldValue("degree", value)}
        disable={formDisable}
      />
      <div className={styles.DatePickContainer}>
        <span className={styles.DatePickInput}>
          <DatePick
            selectedDate={startDate}
            action={(value) => changeFieldValue("startDate", value)}
            disable={formDisable}
            text={
              user && user.university_start_date
                ? `${
                    new Date(user.university_start_date).getMonth() + 1 < 10
                      ? "0" + new Date(user.university_start_date).getMonth() + 1
                      : new Date(user.university_start_date).getMonth() + 1
                  }/${new Date(user.university_start_date).getFullYear()}`
                : "Start Date"
            }
          />
        </span>
        <span className={styles.DatePickInput}>
          <DatePick
            selectedDate={endDate}
            action={(value) => changeFieldValue("endDate", value)}
            disable={formDisable}
            text={
              user && user.university_end_date
                ? `${
                    new Date(user.university_end_date).getMonth() + 1 < 10
                      ? "0" + new Date(user.university_end_date).getMonth() + 1
                      : new Date(user.university_end_date).getMonth() + 1
                  }/${new Date(user.university_end_date).getFullYear()}`
                : "End Date"
            }
          />
        </span>
      </div>
      {formValid && <FormError fieldError={formValid} apiError={"API ERROR"} />}
    </div>
  );
};

export default Uniersity;
