import React from "react";
import { useSelector } from "react-redux";
import styles from "./content.module.scss";
import ExpIndustry from "./ExpIndustry";

const ExpIndustryList = () => {
  const { expAndIndustriesList } = useSelector((state) => ({
    expAndIndustriesList: state.expTeamsReducers.expAndIndustriesList,
  }));

  const filterArr =
    expAndIndustriesList.industries &&
    expAndIndustriesList.industries.filter((item) => item.industry).map((item) => item.industry);

  return (
    <div className={styles.expBlock}>
      <h3 className={styles.title}>Industry</h3>
      <div>
        <ul className={styles.industryList}>
          {filterArr &&
            filterArr.map((item) => {
              return <ExpIndustry key={item.id} users={item.users} industry={item.name} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default ExpIndustryList;
