import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";
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

const DashboardHeader = () => {
  const navList = useRef(null);
  const underline = useRef(null);

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
          <NavLink id="nav" className={styles.navLink} activeClassName={styles.activeLink} to={routes.dashboard.skills}>
            <img src={skillz} alt="skillz" />
            Skills
          </NavLink>
          <NavLink
            id="nav"
            className={styles.navLink}
            activeClassName={styles.activeLink}
            to={routes.dashboard.experiences}
          >
            <img src={cv} alt="exp" />
            Experiences
          </NavLink>
          <NavLink id="nav" className={styles.navLink} activeClassName={styles.activeLink} to={routes.dashboard.goals}>
            <img src={goal} alt="goal" />
            Goals
          </NavLink>
          <NavLink
            id="nav"
            className={styles.navLink}
            activeClassName={styles.activeLink}
            to={routes.dashboard.organisation}
          >
            <img src={profile} alt="org" />
            Organisation
          </NavLink>
          <hr ref={underline} className={styles.underline} />
        </nav>
        <div className={styles.empty}></div>
      </header>
    </>
  );
};

export default DashboardHeader;
