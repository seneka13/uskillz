import React from "react";
import styles from "./loader.module.scss";

const MiniLoader = () => {
  return (
    <div className={styles["lds-ring"]}><div></div><div></div><div></div><div></div></div>
  );
};

export default MiniLoader;
