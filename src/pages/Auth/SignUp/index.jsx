import React from "react";
import Layout from "../../../components/Layout";
import styles from "./signup.module.scss";
import PhoneBlock from "../../../components/PhoneBlock";
import SignUpForm from "./SignUpForm";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import { Redirect } from "react-router-dom";
import routes from "../../../routes/routes";

const SignUp = () => {
  const { user, success, loading, failed } = useSelector((state) => ({
    user: state.authReducers.user,
    success: state.authReducers.signup.success,
    loading: state.authReducers.signup.loading,
    failed: state.authReducers.signup.failed,
  }));

  return (
    <section className={styles.signupPage}>
      <Layout>
        <div className={styles.signupContent}>
          <PhoneBlock />
          <SignUpForm />
        </div>
      </Layout>
      {success && !failed && <Redirect to={routes.api.check} />}
      {loading && <Loader />}
      {user && <Redirect to={routes.skillz.mySkillsProfile} />}
    </section>
  );
};

export default SignUp;
