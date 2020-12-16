import React from "react";
import styles from "./goal.module.scss";
import Layout from "../../../components/Layout";
import Developing from "../../../components/Developing";

const Goals = () => {
  return (
    <section className={styles.goalsPage}>
      <Layout>
        <Developing />
      </Layout>
    </section>
  );
};

export default Goals;
