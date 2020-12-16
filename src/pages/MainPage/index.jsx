import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import routes from "../../routes/routes";
import styles from "./mainpage.module.scss";
import WhySection from "./WhySection";

function MainPage() {
  return (
    <>
      <Header />
      <section className={styles.mainPage}>
        <div>
          <h1 className={styles.mainPageTitle}>
            <span>Track, Target {"&"}</span>
            <span>Grow your Skills</span>
          </h1>
          <div className={styles.mainPageContent}>
            <p>Tag work experiences with skills, target skills you need and create tailored CVs for every role!</p>
          </div>
          <div className={styles.authButtonContainer}>
            <Link className={styles.authBtn} to={routes.api.signUp}>
              Sign Up
            </Link>
          </div>
        </div>
        <div className={styles.mainPageGallery}></div>
      </section>
      <Layout>
        <WhySection />
      </Layout>
      <Footer />
    </>
  );
}

export default MainPage;
