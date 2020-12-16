import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../../../components/Layout";
import PhoneBlock from "../../../components/PhoneBlock";
import LoginForm from "./LoginForm";
import Loader from "../../../components/Loader";
import routes from "../../../routes/routes";
import styles from "./login.module.scss";

const Login = () => {
  const { user, signupSuccess, success, loading, dataSuccess, dataLoading } = useSelector((state) => ({
    user: state.authReducers.user,
    dataSuccess: state.authReducers.data.success,
    dataLoading: state.authReducers.data.loading,
    signupSuccess: state.authReducers.signup.success,
    success: state.authReducers.login.success,
    loading: state.authReducers.login.loading,
  }));
  return (
    <section className={styles.loginPage}>
      <Layout>
        {signupSuccess && <div>We have sent you an email to confirm your account Please check your inbox!</div>}
        <div className={styles.loginContent}>
          <PhoneBlock />
          <LoginForm />
        </div>
      </Layout>
      {(loading || dataLoading) && <Loader />}
      {success && dataSuccess && <Redirect to={routes.skillz.mySkillsProfile} />}
      {user && <Redirect to={routes.skillz.mySkillsProfile} />}
    </section>
  );
};

export default Login;
