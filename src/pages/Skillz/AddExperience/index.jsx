import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./exp.module.scss";
import Layout from "../../../components/Layout";
import CVSummary from "./ContentBlocks/CVSummary";
import Company from "./ContentBlocks/Company";
import AddHardSkills from "./ContentBlocks/AddHardSkills";
import AddSoftSkills from "./ContentBlocks/AddSoftSkills";
import PrimaryBtn from "../../../components/PrimaryBtn";
import Interview from "./ContentBlocks/Interview";
import AddExpName from "./ContentBlocks/AddExpName";
import { createNewExp } from "../../../store/actions";
import FormError from "../../../components/FormError";
import Loader from "../../../components/Loader";
import { Redirect } from "react-router-dom";
import routes from "../../../routes/routes";

const AddExpereinces = () => {
  const dispatch = useDispatch();
  const createExp = (data) => dispatch(createNewExp(data));
  const [formValid, setFormValid] = useState("");

  const {
    expName,
    cvSummary,
    company,
    industry,
    expType,
    title,
    location,
    startDate,
    endDate,
    result,
    whatIDid,
    extraComments,
    selectedSoftSkills,
    selectedHardSkills,
    success,
    loading,
  } = useSelector((state) => ({
    expName: state.fieldsReducers.addExperiences.expName,
    cvSummary: state.fieldsReducers.addExperiences.cvSummary,
    company: state.fieldsReducers.addExperiences.company,
    industry: state.fieldsReducers.addExperiences.industry,
    expType: state.fieldsReducers.addExperiences.expType,
    title: state.fieldsReducers.addExperiences.title,
    location: state.fieldsReducers.addExperiences.location,
    startDate: state.fieldsReducers.addExperiences.startDate,
    endDate: state.fieldsReducers.addExperiences.endDate,
    result: state.fieldsReducers.addExperiences.result,
    whatIDid: state.fieldsReducers.addExperiences.whatIDid,
    extraComments: state.fieldsReducers.addExperiences.extraComments,
    selectedSoftSkills: state.fieldsReducers.addExperiences.selectedSoftSkills,
    selectedHardSkills: state.fieldsReducers.addExperiences.selectedHardSkills,
    success: state.addExpReducers.createExp.success,
    loading: state.addExpReducers.createExp.loading,
  }));

  const handleCreate = () => {
    if (
      expName &&
      selectedSoftSkills.length &&
      selectedHardSkills.length &&
      company &&
      industry &&
      expType &&
      title &&
      location &&
      startDate &&
      endDate &&
      (typeof company && typeof industry) === "object"
    ) {
      const newExp = {
        name: expName,
        soft_skills: selectedSoftSkills.map((skill) => skill.id),
        hard_skills: selectedHardSkills.map((skill) => skill.id),
        summary: cvSummary,
        result: result,
        what_i_did: whatIDid,
        extra_comment: extraComments,
        company_name: company.id,
        company_industry: industry.id,
        company_experience_type: expType.id,
        company_location: title,
        company_title: location,
        company_start_date: startDate,
        company_end_date: endDate,
      };

      createExp(newExp);
    } else {
      setFormValid("You need to fill all required fields.");
    }
  };

  useEffect(() => {
    const alert = setTimeout(() => setFormValid(""), 3500);
    return () => clearTimeout(alert);
  }, [formValid]);

  return (
    <section className={styles.addExpPage}>
      <Layout>
        <AddExpName />
        <div className={styles.addExpContent}>
          <div className={styles.gridCont}>
            <CVSummary />
            <Company />
          </div>
          <div className={styles.gridCont2}>
            <AddSoftSkills />
            <AddHardSkills />
          </div>
          <div className={styles.gridCont3}>
            <PrimaryBtn text={"Save"} className={styles.saveBtn} onClick={handleCreate} />
            <Interview />
          </div>
        </div>
      </Layout>
      {formValid && <FormError fieldError={formValid} apiError={"Api Error"} />}
      {loading && <Loader />}
      {success && <Redirect to={routes.skillz.mySkillsProfile} />}
    </section>
  );
};

export default AddExpereinces;
