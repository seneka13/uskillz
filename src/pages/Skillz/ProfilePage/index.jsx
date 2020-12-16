import React, { useCallback, useEffect } from "react";
import Layout from "../../../components/Layout";
import PrimaryBtn from "../../../components/PrimaryBtn";
import AccountDetails from "./ContentBlocks/AccountDetails";
import ProfileLinks from "./ProfileLinks";
import DiversityData from "./ContentBlocks/DiversityData";
import Organizations from "./ContentBlocks/Organizations";
import University from "./ContentBlocks/University";
import styles from "./profile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import routes from "../../../routes/routes";
import { getUserData } from "../../../store/actions";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const getUser = useCallback(() => dispatch(getUserData()), [dispatch]);
  const history = useHistory();
  const { user } = useSelector((state) => ({
    user: state.authReducers.user,
  }));

  const switchToDashboard = () => {
    if (user.dashboard_admin === true) history.push(routes.dashboard.organisation);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <section className={styles.profilePage}>
      <Layout>
        <div className={styles.profileContent}>
          <PrimaryBtn text={"Switch to Organisation"} className={styles.profileBtn} onClick={switchToDashboard} />
          <div className={styles.profileInfo}>
            <div>
              <AccountDetails />
              <DiversityData />
            </div>
            <div>
              <Organizations />
              <University />
            </div>
          </div>
          <ProfileLinks />
        </div>
      </Layout>
    </section>
  );
};

export default ProfilePage;
