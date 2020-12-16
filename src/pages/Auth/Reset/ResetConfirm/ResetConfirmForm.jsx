import React, {useState} from "react";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import PrimaryInput from "../../../../components/PrimaryInput";
import styles from "../reset.module.scss";
import passwordIcon from "../../../../assets/AuthImages/password.png";
import logo from "../../../../assets/AuthImages/uskillzLogo.png";
import { Link } from "react-router-dom";
import routes from "../../../../routes/routes";
import {
  changeField,
  clearFields,
  resetPassConfirmAction,
} from "../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { passValidate } from "../../../../services/fieldValidate";
import FormError from "../../../../components/FormError";

const ResetConfirmForm = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) =>
    dispatch(changeField("reset", formField, value));
  const clearFieldValue = () => dispatch(clearFields());
  const setBody = (body) => dispatch(resetPassConfirmAction(body));
  const [passValid, setPassValid] = useState("");
  const { newPass, newPassConfirm } = useSelector((state) => ({
    newPass: state.fieldsReducers.reset.newPass,
    newPassConfirm: state.fieldsReducers.reset.newPassConfirm,
  }));


  const handleSend = (e) => {
    e.preventDefault();
      if (passValidate(newPass) && passValidate(newPassConfirm)) {
        newPass !== newPassConfirm
          ? setPassValid("Your password is different")
          : setBody({ password: newPass, token: localStorage.getItem("resetToken")}) && clearFieldValue();;
      } else {
        setPassValid(
          "Your password must be at least 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit."
        );
      }
    }
    
  
  

  return (
    <div>
      <img className={styles.logo} src={logo} alt="logo" />
      <form className={styles.resetForm}>
        <PrimaryInput
          type="password"
          name="newPassword"
          placeholder="New Password"
          autoComplete="off"
          value={newPass}
          className={styles.resetField}
          onChange={(value) => changeFieldValue("newPass", value)}
          labelContent={<img src={passwordIcon} alt="field img" />}
        />
        <PrimaryInput
          type="password"
          name="newPasswordConfirm"
          placeholder="Confirm Password"
          autoComplete="off"
          value={newPassConfirm}
          className={styles.resetField}
          onChange={(value) => changeFieldValue("newPassConfirm", value)}
          labelContent={<img src={passwordIcon} alt="field img" />}
        />
        <PrimaryBtn
          text="Send"
          className={styles.resetBtn}
          onClick={handleSend}
        />
      </form>
      <div className={styles.resetFooter}>
        <div>
          <span>Just Remembered?</span>
          <Link to={routes.api.logIn}>Log in</Link>
        </div>
      </div>
      {passValid && <FormError fieldError={`${passValid}`} />}
    </div>
  );
};

export default ResetConfirmForm;
