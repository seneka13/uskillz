import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./skills.module.scss";
import Layout from "../../../components/Layout";
import SlideNavBtn from "../../../components/SlideNavSkillsBtn";
import HardSkills from "./HardAndSoftSkills/HardSkils";
import SoftSkills from "./HardAndSoftSkills/SoftSkills";
import { defaultSkillState } from "../../../store/actions";
import ToggleSlideBtn from "../../../components/ToggleSlideBtn";
import { getExpList } from "../../../store/actions";
import { Redirect } from "react-router-dom";
import routes from "../../../routes/routes";

const SkillzProfile = () => {
  const dispatch = useDispatch();
  const setDefaultState = () => dispatch(defaultSkillState());
  const [active, setActive] = useState("");
  const [toggleBtn, setToggleBtn] = useState("");

  const { editSuccess, createSuccess } = useSelector((state) => ({
    editSuccess: state.addExpReducers.editExp.success,
    createSuccess: state.addExpReducers.createExp.success,
  }));

  useEffect(() => {
    if (editSuccess || createSuccess) setDefaultState();
  }, []);

  return (
    <section className={styles.skillzProfilePage}>
      <Layout>
        <div className={styles.skillzProfileContent}>
          <div style={{ display: "flex", flexFlow: "column", alignItems: "center" }}>
            <SlideNavBtn
              active={active}
              setActive={setActive}
              firstBtnText={"All skills"}
              secondBtnText={"Skills Have"}
              thirdBtnText={"Skills Need"}
            />
            <ToggleSlideBtn toggleBtn={toggleBtn} setToggleBtn={setToggleBtn} />
          </div>
          <div className={styles.skillzGrid}>
            <SoftSkills active={active} />
            <HardSkills active={active} />
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default SkillzProfile;
