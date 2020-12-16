import React from "react";

import styles from "./whysection.module.scss";

function Phone(props) {
  const { img, firstText, secondText, alt } = props.item;
  return (
    <div className={styles.phone}>
      <h2>
        {`${firstText}`}
        <br />
        <span>{` ${secondText}`}</span>
      </h2>
      <img src={img} alt={alt} />
    </div>
  );
}

export default Phone;
