import React from "react";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>Get the edge when applying for your next role!</h1>
      <Link to={routes.api.signUp} className={styles.footerBtn}>
        Sign Up
      </Link>
      <div>
        <a className={styles.footerLink} href="mailto:uskillz.io@gmail.com">
          Contact us
        </a>
        <Link className={styles.footerLink} to={routes.index.privacy}>
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
