import React from "react";
import { useSelector } from "react-redux";
import BranchDropDown from "../../../../components/BranchDropDown";
import styles from "./content.module.scss";

export const Industry = () => {
  const { companyInIndustry } = useSelector((state) => ({
    companyInIndustry: state.masterReducers.companyInIndustry,
  }));

  return (
    <div className={styles.contentBlock}>
      <h3>Industry</h3>
      <ul className={styles.listContainer}>
        {companyInIndustry &&
          companyInIndustry.map((item) => {
            return (
              <BranchDropDown
                key={item.id}
                count={item.companies.length}
                itemName={item.name}
                childs={item.companies}
                disable={true}
              />
            );
          })}
      </ul>
    </div>
  );
};
