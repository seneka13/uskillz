import React from "react";
import { useSelector } from "react-redux";

import styles from "./content.module.scss";

const CompanyDetail = () => {
  const { currentCompanyExpDetail } = useSelector((state) => ({
    currentCompanyExpDetail: state.masterReducers.currentCompanyExpDetail,
  }));

  return (
    <div className={styles.contentBlock}>
      <h3>Company</h3>
      <div className={styles.companyName}>{currentCompanyExpDetail.name}</div>
    </div>
  );
};

export default CompanyDetail;
