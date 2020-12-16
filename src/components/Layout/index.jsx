import React from "react";
import styles from "./layout.module.scss";
import { node } from "prop-types";

const Layout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

Layout.propTypes = {
  children: node,
};

export default Layout;
