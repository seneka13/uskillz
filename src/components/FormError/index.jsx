import React from "react";
import { string } from "prop-types";
import cancel from "../../assets/SkillzImages/cancel.svg";
import styles from "./error.module.scss";

function FormError({ apiError, fieldError }) {
  return (
    <div className={styles.formErr}>
      <div>{apiError && !fieldError ? apiError : fieldError}</div>
      <img src={cancel} alt="cancel" />
    </div>
  );
}

FormError.propTypes = {
  apiError: string,
  fieldError: string,
};

export default FormError;
