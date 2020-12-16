import React from "react";
import styles from "./text.module.scss";
import { string, number, func, oneOfType } from "prop-types";

const PrimaryText = ({ placeholder, value = "", onChange, className, labelText }) => {
  return (
    <label>
      {labelText && <h4 className={styles.labelText}>{labelText}</h4>}
      <textarea placeholder={placeholder} className={className} onChange={(e) => onChange(e.target.value)} value={value} />
    </label>
  );
};

PrimaryText.propTypes = {
  className: string,
  onClick: func,
  placeholder: oneOfType([string, number]),
  value: string,
  labelText: string,
};

export default PrimaryText;
