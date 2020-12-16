import React from "react";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderBg}>
      <div className={styles.loader}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default Loader;
