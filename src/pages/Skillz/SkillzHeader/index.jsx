import React, { useEffect, useRef, useState } from "react";
import styles from "./skillzheader.module.scss";
import { NavLink } from "react-router-dom";
import routes from "../../../routes/routes";
import logo from "../../../assets/SkillzImages/logo.png";
import skillz from "../../../assets/SkillzImages/skillz.svg";
import cv from "../../../assets/SkillzImages/cv.svg";
import goal from "../../../assets/SkillzImages/goal.svg";
import profile from "../../../assets/SkillzImages/profile.svg";
import plus from "../../../assets/SkillzImages/plus.svg";
import { sliderUnderline } from "../../../services/sliderUnderline";
import { useSelector } from "react-redux";
import { useResize } from "../../../customHooks/useResize";

const SkillzHeader = () => {
  const navList = useRef(null);
  const underline = useRef(null);
  const windowSize = useResize(1100);

  useEffect(() => {
    sliderUnderline(navList.current, (link, width, tempMarginLeft) => {
      link.addEventListener("click", () => {
        underline.current.style.width = width + "%";
        underline.current.style.marginLeft = tempMarginLeft + "%";
      });
    });
  }, [navList]);

  return (
    <>
      <header className={styles.header}>
        <div>
          <img src={logo} alt="uSkillz" className={styles.logo} />
        </div>
        <nav ref={navList} className={styles.navBar}>
          <NavLink
            id="nav"
            className={styles.navLink}
            activeClassName={styles.activeLink}
            to={routes.skillz.mySkillsProfile}
          >
            <img src={skillz} alt="skillz" />
            Skills Profile
          </NavLink>
          <NavLink
            id="nav"
            className={styles.navLink}
            activeClassName={styles.activeLink}
            to={routes.skillz.experiences}
          >
            <img src={cv} alt="cv" />
            Master CV
          </NavLink>
          <NavLink id="nav" className={styles.navLink} activeClassName={styles.activeLink} to={routes.skillz.goals}>
            <img src={goal} alt="goal" />
            Goals
          </NavLink>
          <NavLink id="nav" className={styles.navLink} activeClassName={styles.activeLink} to={routes.skillz.profile}>
            <img src={profile} alt="profile" />
            Profile
          </NavLink>
          <hr ref={underline} className={styles.underline} />
        </nav>
        <NavLink to={routes.skillz.createExperiences} className={styles.addBtn}>
          {windowSize && "Add new experience"}
          <img src={plus} alt="plus" />
        </NavLink>
      </header>
    </>
  );
};

export default SkillzHeader;
