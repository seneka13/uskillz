import React from "react";
import { node, string, number, func, oneOfType } from "prop-types";
import search from "../../assets/SkillzImages/search.svg";
import styles from "./search.module.scss";

const SearchInput = ({ id, name, type, placeholder, value = "", autoComplete, onChange, className, labelIcon, onClick, disable }) => {
  return (
    <label htmlFor={id} className={className}>
      {/* <img className={styles.searchImg} src={search} alt="search" /> */}
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
      <button disabled={disable} className={styles.searchCross} onClick={onClick}>
        {!disable && labelIcon}
      </button>
    </label>
  );
};

SearchInput.propTypes = {
  className: string,
  onClick: func,
  onChange: func,
  placeholder: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  value: string,
  id: oneOfType([string, number]),
  autoComplete: string,
  labelIcon: node,
};

export default SearchInput;
