import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/Layout";
import PrimaryBtn from "../../../components/PrimaryBtn";
import routes from "../../../routes/routes";
import styles from "./org.module.scss";
import { getMembersList, getTeamsList } from "../../../store/actions";
import Teams from "./Teams";
import Members from "./Members";

const OrganisationPage = () => {
  const history = useHistory();
  const switchToPrfoile = () => {
    history.push(routes.skillz.profile);
  };

  return (
    <section className={styles.orgPage}>
      <Layout>
        <div className={styles.orgContent}>
          <PrimaryBtn text={"Switch to Profile"} className={styles.orgBtn} onClick={switchToPrfoile} />
          <div className={styles.orgInfo}>
            <Teams />
            <Members />
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default OrganisationPage;
