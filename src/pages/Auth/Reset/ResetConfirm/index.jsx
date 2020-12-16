import React from "react";
import Layout from "../../../../components/Layout";
import styles from "../reset.module.scss";
import PhoneBlock from "../../../../components/PhoneBlock";
import ResetConfirmForm from "./ResetConfirmForm";

const ResetConfirmPass = () => {
  return (
    <section className={styles.resetPage}>
      <Layout>
        <div className={styles.resetContent}>
          <PhoneBlock />
          <ResetConfirmForm />
        </div>
      </Layout>
    </section>
  );
};

export default ResetConfirmPass;
