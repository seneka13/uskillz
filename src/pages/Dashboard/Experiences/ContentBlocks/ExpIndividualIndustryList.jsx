import React from "react";
import { useSelector } from "react-redux";
import styles from "./content.module.scss";
import BranchDropDown from "../../../../components/BranchDropDown";

const ExpIndividualIndustryList = () => {
  const { expAndIndustriesList } = useSelector((state) => ({
    expAndIndustriesList: state.expTeamsReducers.expAndIndustriesList,
  }));

  const filterArr =
    expAndIndustriesList.industries &&
    expAndIndustriesList.industries.filter((item) => item.industry).map((item) => item.industry);

  console.log(filterArr);

  return (
    <div className={styles.expBlock}>
      <h3 className={styles.title}>Industry</h3>
      <div>
        <ul className={styles.industryList}>
          {filterArr &&
            filterArr.map((item) => {
              return (
                <li key={item.id} className={styles.industryDrop}>
                  <BranchDropDown
                    count={item.companies ? item.companies.length : item.users.length}
                    itemName={item.name}
                    childs={item.companies ? item.companies : item.users}
                    onClick={(slot) => console.log(slot)}
                    disable={true}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ExpIndividualIndustryList;
