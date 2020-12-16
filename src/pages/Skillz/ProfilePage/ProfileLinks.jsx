import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import PrimaryBtn from "../../../components/PrimaryBtn";
import routes from "../../../routes/routes";
import arrow from "../../../assets/SkillzImages/linkarrow.svg";
import styles from "./profile.module.scss";
import { useDispatch } from "react-redux";
import { signOut } from "../../../store/actions";

const ProfileLinks = () => {
  const dispatch = useDispatch();
  const userSignOut = () => dispatch(signOut());

  return (
    <div className={styles.profileLinks}>
      <a className={styles.links} href="mailto:uskillz.io@gmail.com">
        Contact Us
        <img src={arrow} alt="arrow" />
      </a>
      <NavLink className={styles.links} to={routes.index.aboutUs}>
        About Us
        <img src={arrow} alt="arrow" />
      </NavLink>
      <NavLink className={styles.links} to={routes.index.termsOfService}>
        Terms of Service
        <img src={arrow} alt="arrow" />
      </NavLink>
      <NavLink className={styles.links} to={routes.index.privacy}>
        Privacy Policy
        <img src={arrow} alt="arrow" />
      </NavLink>
      <PrimaryBtn text={"Sign out"} className={styles.profileBtn} onClick={() => userSignOut()} />
    </div>
  );
};

export default ProfileLinks;
