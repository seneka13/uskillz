import React from "react";
import { string, func, node } from "prop-types";

const PrimaryBtn = ({ className, text, onClick, icon }) => {
  return (
    <button className={className} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};

PrimaryBtn.propTypes = {
  className: string,
  onClick: func,
  text: string,
  icon: node,
};

export default PrimaryBtn;
