import React from "react";
import styles from "./detail.module.scss";
import Layout from "../../../../components/Layout";
import PropTypes from "prop-types";
import CompanyDetail from "./ContentBlocks/CompanyDetail";
import ExpDetail from "./ContentBlocks/ExpDetail";
import HardSkillsDetail from "./ContentBlocks/HardSkillsDetail";
import SoftSkillsDetail from "./ContentBlocks/SoftSkillsDetail";

function Detail(props) {
  return (
    <section className={styles.detailPage}>
      <Layout>
        <div className={styles.detailContent}>
          <div className={styles.gridDetail}>
            <CompanyDetail />
          </div>
          <div>
            <ExpDetail />
            <HardSkillsDetail />
            <SoftSkillsDetail />
          </div>
        </div>
      </Layout>
    </section>
  );
}

Detail.propTypes = {};

export default Detail;
