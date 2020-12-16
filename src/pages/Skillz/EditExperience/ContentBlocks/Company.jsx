import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../../../../store/actions";
import DatePick from "../../../../components/Datepicker";
import SearchInput from "../../../../components/SearchInput";
import PrimaryInput from "../../../../components/PrimaryInput";
import PrimarySelect from "../../../../components/PrimarySelect";
import { typeChoices } from "../../../../services/profileSelectArr";
import SearchChooser from "../../../../components/SearchChooser";
import { addCompany, addIndustry, getCompanyList, getIndustryList } from "../../../../store/actions";
import { filterArr } from "../../../../services/arrServices";
import plus from "../../../../assets/SkillzImages/plus2.svg";
import styles from "./content.module.scss";

const Company = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("editExperiences", formField, value));
  const getCompany = () => dispatch(getCompanyList());
  const getIndustry = () => dispatch(getIndustryList());
  const addNewCompany = (data) => dispatch(addCompany(data));
  const addNewIndustry = (data) => dispatch(addIndustry(data));
  const [filtered, setFiltered] = useState([]);
  const [existCompany, setExistCompany] = useState(true);
  const [existIndustry, setExistIndustry] = useState(true);

  const {
    company,
    industry,
    expType,
    title,
    location,
    startDate,
    endDate,
    companyList,
    industryList,
    expereienceList,
  } = useSelector((state) => ({
    company: state.fieldsReducers.editExperiences.company,
    industry: state.fieldsReducers.editExperiences.industry,
    expType: state.fieldsReducers.editExperiences.expType,
    title: state.fieldsReducers.editExperiences.title,
    location: state.fieldsReducers.editExperiences.location,
    startDate: state.fieldsReducers.editExperiences.startDate,
    endDate: state.fieldsReducers.editExperiences.endDate,
    companyList: state.addExpReducers.companyList,
    industryList: state.addExpReducers.industryList,
    expereienceList: state.addExpReducers.expereienceList,
  }));

  const handleFill = (item) => {
    changeFieldValue("company", { id: item.company_name, name: item.company_display });
    changeFieldValue("industry", { id: item.company_industry, name: item.company_industry_display });
    changeFieldValue("expType", { id: item.company_experience_type, name: item.company_experience_type_display });
    changeFieldValue("title", item.company_title);
    changeFieldValue("location", item.company_location);
    changeFieldValue("startDate", item.company_start_date);
    changeFieldValue("endDate", item.company_end_date);
  };

  useEffect(() => {
    setExistCompany(
      companyList.find((item) => item.name.toString().toLowerCase() === (company.name || company.toLowerCase()))
    );
  }, [company]);

  useEffect(() => {
    setExistIndustry(
      industryList.find((item) => item.name.toString().toLowerCase() === (industry.name || industry.toLowerCase()))
    );
  }, [industry]);

  useEffect(() => {
    companyList.length < 1 && getCompany();
    industryList.length < 1 && getIndustry();
    setFiltered(filterArr(expereienceList));
  }, []);

  const handleAddCompany = () => {
    if (company.length > 1 && typeof company === "string") {
      addNewCompany({ name: company });
      getCompany();
    }
  };

  const handleAddIndustry = () => {
    if (industry.length > 1 && typeof industry === "string") {
      addNewIndustry({ name: industry });
      getIndustry();
    }
  };

  return (
    <div className={styles.contentBlock}>
      <h3>
        Company <span className={styles.requireField}>*</span>
      </h3>
      <div className={styles.choiceBlock}>
        <h5>Add existing company:</h5>
        <div className={styles.choiceBtns}>
          {filtered.length > 0 &&
            filtered.map((item) => {
              return (
                <button key={item.id} className={styles.companySelectBtn} onClick={() => handleFill(item)}>
                  {item.company_display}
                </button>
              );
            })}
        </div>
      </div>
      <div className={styles.searchContainer}>
        <SearchInput
          type="text"
          placeholder={"Search company name"}
          name="company"
          autoComplete="off"
          value={company.name ? company.name : company}
          className={styles.inputField}
          onChange={(value) => changeFieldValue("company", value)}
          labelIcon={
            !existCompany &&
            typeof company === "string" &&
            company.length > 1 && <img className={styles.pulse} src={plus} alt="plus" />
          }
          onClick={handleAddCompany}
        />
        <SearchChooser
          searchArr={companyList}
          searchField={company}
          fieldName={"company"}
          formName={"editExperiences"}
          className={styles.skillsList}
        />
      </div>
      <div className={styles.searchContainer}>
        <SearchInput
          type="text"
          placeholder={"Search industry"}
          name="insdustry"
          autoComplete="off"
          value={industry.name ? industry.name : industry}
          className={styles.inputField}
          onChange={(value) => changeFieldValue("industry", value)}
          labelIcon={
            !existIndustry &&
            typeof industry === "string" &&
            industry.length > 1 && <img className={styles.pulse} src={plus} alt="plus" />
          }
          onClick={handleAddIndustry}
        />
        <SearchChooser
          searchArr={industryList}
          searchField={industry}
          fieldName={"industry"}
          formName={"editExperiences"}
          className={styles.skillsList}
        />
      </div>
      <PrimarySelect
        placeholder={expType.name ? expType.name : "Select the type of your experience"}
        className={styles.select}
        selectList={typeChoices}
        onClick={(value) => changeFieldValue("expType", value)}
      />
      <PrimaryInput
        type="text"
        placeholder={"Type your title"}
        name="title"
        autoComplete="off"
        value={title}
        className={styles.inputField}
        onChange={(value) => changeFieldValue("title", value)}
      />
      <PrimaryInput
        type="text"
        placeholder={"Type your location"}
        name="location"
        autoComplete="off"
        value={location}
        className={styles.inputField}
        onChange={(value) => changeFieldValue("location", value)}
      />
      <div className={styles.DatePickContainer}>
        <span className={styles.DatePickInput}>
          <DatePick
            selectedDate={startDate}
            action={(value) => changeFieldValue("startDate", value)}
            text={"Start Date"}
          />
        </span>
        <span className={styles.DatePickInput}>
          <DatePick selectedDate={endDate} action={(value) => changeFieldValue("endDate", value)} text={"End Date"} />
        </span>
      </div>
    </div>
  );
};

export default Company;
