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
import { clearFields} from "../../../store/actions";
import FormError from "../../../components/FormError";
import Loader from "../../../components/Loader";
import { Redirect } from "react-router-dom";
import routes from "../../../routes/routes";
import { editExperience } from "../../../store/actions/SkillzSectionActions/addExpActions";

const EditExpereinces = () => {
  const dispatch = useDispatch();
  const editExp = (url, data) => dispatch(editExperience(url, data));
  const clear = () => dispatch(clearFields());

  const [formValid, setFormValid] = useState("");

  const {
    updateUrl,
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
    updateUrl: state.fieldsReducers.editExperiences.updateUrl,
    expName: state.fieldsReducers.editExperiences.expName,
    cvSummary: state.fieldsReducers.editExperiences.cvSummary,
    company: state.fieldsReducers.editExperiences.company,
    industry: state.fieldsReducers.editExperiences.industry,
    expType: state.fieldsReducers.editExperiences.expType,
    title: state.fieldsReducers.editExperiences.title,
    location: state.fieldsReducers.editExperiences.location,
    startDate: state.fieldsReducers.editExperiences.startDate,
    endDate: state.fieldsReducers.editExperiences.endDate,
    result: state.fieldsReducers.editExperiences.result,
    whatIDid: state.fieldsReducers.editExperiences.whatIDid,
    extraComments: state.fieldsReducers.editExperiences.extraComments,
    selectedSoftSkills: state.fieldsReducers.editExperiences.selectedSoftSkills,
    selectedHardSkills: state.fieldsReducers.editExperiences.selectedHardSkills,
    success: state.addExpReducers.editExp.success,
    loading: state.addExpReducers.editExp.loading,
  }));

  const handleCreate = () => {
    if (
      updateUrl &&
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

      editExp(updateUrl, newExp);
    } else {
      setFormValid("You need to fill all required fields.");
    }
  };

  useEffect(() => {
    const alert = setTimeout(() => setFormValid(""), 3500);
    return () => clearTimeout(alert);
  }, [formValid]);

  useEffect(() => {
    success && clear();
  }, [success]);

  return (
    <section className={styles.addExpPage}>
      <Layout>
        <AddExpName />
        <div className={styles.addExpContent}>
          <div className={styles.gridCont}>
            <CVSummary />
            <Company />
          </div>
          <div>
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

export default EditExpereinces;
