import React from "react";
import styles from "./phone.module.scss";
import iphone from "../../assets/AuthImages/iphonemock.png";
import android from "../../assets/AuthImages/androidmock.png";

const PhoneBlock = () => {
  return (
    <div className={styles.phoneBlock}>
      <img className={styles.phoneImg} src={android} alt="phone" />
      <img className={styles.phoneImg} src={iphone} alt="phone" />
    </div>
  );
};

export default PhoneBlock;
