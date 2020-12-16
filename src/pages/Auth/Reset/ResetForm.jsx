import React, {useEffect, useState} from "react";
import PrimaryBtn from "../../../components/PrimaryBtn";
import PrimaryInput from "../../../components/PrimaryInput";
import styles from "./reset.module.scss";
import mailIcon from "../../../assets/AuthImages/mail.png";
import logo from "../../../assets/AuthImages/uskillzLogo.png";
import { Link } from "react-router-dom";
import routes from "../../../routes/routes";
import { changeField, clearFields, resetPassAction } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { mailValidate } from "../../../services/fieldValidate";
import FormError from "../../../components/FormError";
import Loader from "../../../components/Loader";

const ResetForm = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("reset", formField, value));
  const clearFieldValue = () => dispatch(clearFields());
  const setBody = (body) => dispatch(resetPassAction(body));
  const [mailValid, setMailValid] = useState("");
  const { email, success, error, loading, failed } = useSelector((state) => ({
    email: state.fieldsReducers.reset.email,
    success: state.authReducers.reset.success,
    loading: state.authReducers.reset.loading,
    error: state.authReducers.reset.error,
    failed: state.authReducers.reset.failed,
  }));

  const handleSend = (e) => {
    e.preventDefault();
    !mailValidate(email) ? setMailValid("Enter a valid email address.") : setMailValid("");
    if (mailValidate(email) ) {
      setBody({ email });
      clearFieldValue();
    }
  };

  useEffect(() => {
    const alert = setTimeout(() => {
      setMailValid("");
    }, 3000);
    return () => clearTimeout(alert);
  }, [mailValid]);

  useEffect(() => {
    error && setMailValid("Email or password doesn`t correct!");
  }, [error]);

  useEffect(() => {
    error && setMailValid(error);
  }, [error]);

  return (
    <div>
      <img className={styles.logo} src={logo} alt="logo" />
      {success && !error && <h2 className={styles.informText}>We have sent you an email, Please check your inbox!</h2>}
      {!success && <form className={styles.resetForm}>
      <PrimaryInput
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          className={styles.resetField}
          onChange={(value) => changeFieldValue("email", value)}
          labelContent={<img src={mailIcon} alt="field img" />}
        />
        <PrimaryBtn text="Send" className={styles.resetBtn} onClick={handleSend} />
      </form>}
      <div className={styles.resetFooter}>
        <div>
          <span>Just Remembered?</span>
          <Link to={routes.api.logIn}>Log in</Link>
        </div>
      </div>
      {mailValid && <FormError fieldError={`${mailValid}`} />}
        {loading && <Loader/>}
    </div>
  );
};

export default ResetForm;
