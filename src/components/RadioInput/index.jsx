import React from "react";
import styles from "./radio.module.scss";

const RadioInput = ({ id, value, onChange, name, labelText, checked }) => {
  return (
    <div>
      <input
        id={id}
        className={styles.radioInput}
        type="radio"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        checked={checked}
      />
      <label htmlFor={id} className={styles.radioLabel}>
        {labelText}
      </label>
    </div>
  );
};

export default RadioInput;
