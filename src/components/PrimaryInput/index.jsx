import React from "react";
import styles from "./input.module.scss";
import { node, string, number, func, oneOfType } from "prop-types";

const PrimaryInput = ({ id, name, type, placeholder, value="", autoComplete, onChange, className, labelContent, labelText, disable = false, labelIcon, onClick}) => {
  return (
    <div>
      {labelText && <h4 className={styles.labelText}>{labelText}</h4>}
      <label htmlFor={id} className={className}>
        {labelContent}
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          disabled={disable}
        />
        {labelIcon && <button disabled={disable} className={styles.searchCross} onClick={onClick}>
        {!disable && labelIcon}
      </button>}
      </label>
    </div>
  );
};

PrimaryInput.propTypes = {
  className: string,
  onClick: func,
  placeholder: oneOfType([string, number]),
  name: string,
  type: string.isRequired,
  value: string.isRequired,
  id: oneOfType([string, number]),
  autoComplete: string,
  labelContent: node,
  labelText: string,
};

export default PrimaryInput;
