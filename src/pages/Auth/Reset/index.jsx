import React from "react";
import Layout from "../../../components/Layout";
import styles from "./reset.module.scss";
import PhoneBlock from "../../../components/PhoneBlock";
import ResetForm from "./ResetForm";

const Reset = () => {

  return (
    <section className={styles.resetPage}>
      <Layout>
        <div className={styles.resetContent}>
          <PhoneBlock />
          <ResetForm />
        </div>
      </Layout>
    </section>
  );
};

export default Reset;
