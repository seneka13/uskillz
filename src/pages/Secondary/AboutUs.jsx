import React, { useEffect } from "react";

import styles from "./secondary.module.scss";
import goBack from "../../assets/SkillzImages/goBackBtn.svg";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const history = useHistory();
  return (
    <>
      <button className={styles.goBack} onClick={() => history.goBack()}>
        <img src={goBack} alt="go back" />
      </button>
      <div>
        <header className={styles.privacyHeader}>
          <h1>About Us</h1>
        </header>

        <ul className={styles.privacyContent}>
          <Layout>
            <p className={styles.abzac}>
              When I graduated from uni, I had two main problems. Firstly, I had no way of tracking everything I had
              done so far, for example, internships, uni projects, online courses and voluntary work. Secondly, I did
              not know exactly what skills my experiences had given me and where my gaps were in order to improve.
            </p>
            <p className={styles.abzac}>
              This is why we created uSkillz. With our app, you can keep track of everything you have done whilst
              building a skills profile. You can tag all your experiences with the hard and soft skills you have
              developed, which can help you improve your employability.
            </p>
            <p className={styles.abzac}>
              This is only the start with the core feature being tagging your experiences with skills. In the future, we
              plan to enhance the app to help you discover a role that best suits you.
            </p>
            <p className={styles.abzac}>
              We want to build the best product to help you improve your employability. If you have an ideas, feedback
              or want to reach out, please email us at <span>uskillz.io@gmail.com!</span>
            </p>
          </Layout>
        </ul>
      </div>
    </>
  );
};

export default AboutUs;
