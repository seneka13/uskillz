import React, { useState, useEffect } from "react";
import logo from "../../assets/PageImages/logo.png";
import accentLogo from "../../assets/PageImages/accentLogo.png";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const action = () => setScroll(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", action);
    return () => {
      window.removeEventListener("scroll", action);
    };
  });
  return (
    <header
      className={
        scroll > 35 && scroll < 650
          ? `${styles.header} ${styles.headerNone}`
          : scroll < 650
          ? styles.header
          : `${styles.header} ${styles.headerAfterScroll}`
      }
    >
      <Link to={routes.index.landing}>
        <img src={scroll > 400 ? logo : accentLogo} alt="uSkillz" />
      </Link>
      <Link to={routes.api.logIn} className={styles.authBtn}>
        Log in
      </Link>
    </header>
  );
};

export default Header;
