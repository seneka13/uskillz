import React from "react";
import Layout from "../../../components/Layout";
import logo from "../../../assets/AuthImages/uskillzLogo.png";
import PhoneBlock from "../../../components/PhoneBlock";
import styles from "./check.module.scss";

const CheckMail = () => {
  return (
    <section className={styles.checkPage}>
      <Layout>
        <div className={styles.checkContent}>
          <PhoneBlock />
          <div className={styles.checkMsg}>
            <img className={styles.logo} src={logo} alt="logo" />
            <h3>
              We have sent you an email to confirm your account. <br /> Please check your inbox!
            </h3>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default CheckMail;
