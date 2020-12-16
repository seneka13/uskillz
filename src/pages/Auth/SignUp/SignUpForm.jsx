import React, { useState, useEffect } from "react";
import PrimaryBtn from "../../../components/PrimaryBtn";
import PrimaryInput from "../../../components/PrimaryInput";
import styles from "./signup.module.scss";
import { useSelector, useDispatch } from "react-redux";
import passwordIcon from "../../../assets/AuthImages/password.png";
import personIcon from "../../../assets/AuthImages/person.png";
import mailIcon from "../../../assets/AuthImages/mail.png";
import logo from "../../../assets/AuthImages/uskillzLogo.png";
import LinkedInBtn from "../../../components/LinkedInBtn/LinkedInBtn";
import { Link } from "react-router-dom";
import routes from "../../../routes/routes";
import { changeField, signupAction } from "../../../store/actions";
import { mailValidate, passValidate } from "../../../services/fieldValidate";
import FormError from "../../../components/FormError";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("signup", formField, value));
  const setBody = (body) => dispatch(signupAction(body));
  const [mailValid, setMailValid] = useState("");
  const [passValid, setPassValid] = useState("");

  const { username, email, password, error } = useSelector((state) => ({
    username: state.fieldsReducers.signup.username,
    email: state.fieldsReducers.signup.email,
    password: state.fieldsReducers.signup.password,
    error: state.authReducers.signup.error,
  }));

  useEffect(() => {
    const alert = setTimeout(() => {
      setMailValid("");
      setPassValid("");
    }, 3000);
    return () => clearTimeout(alert);
  }, [mailValid, passValid]);

  useEffect(() => {
    error && error.email && setMailValid(error.email[0]);
  }, [error]);

  const handleSend = (e) => {
    e.preventDefault();
    !mailValidate(email) ? setMailValid("Enter a valid email address.") : setMailValid("");
    !passValidate(password)
      ? setPassValid(
          "Your password must be at least 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit."
        )
      : setPassValid("");
    mailValidate(email) && passValidate(password) && setBody({ full_name: username, email, password });
  };

  return (
    <div>
      <img className={styles.logo} src={logo} alt="logo" />
      <LinkedInBtn />
      <div className={styles.divider}>Or</div>
      <form className={styles.signupForm}>
        <PrimaryInput
          type="text"
          name="username"
          placeholder="Full Name"
          autoComplete="off"
          value={username}
          className={styles.signupField}
          onChange={(value) => changeFieldValue("username", value)}
          labelContent={<img src={personIcon} alt="field img" />}
        />
        <PrimaryInput
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          className={styles.signupField}
          onChange={(value) => changeFieldValue("email", value)}
          labelContent={<img src={mailIcon} alt="field img" />}
        />
        <PrimaryInput
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          value={password}
          className={styles.signupField}
          onChange={(value) => changeFieldValue("password", value)}
          labelContent={<img src={passwordIcon} alt="field img" />}
        />
        <div className={styles.policy}>
          By continuing you agree to uSkillz LTD terms of service and agree you have read uSkillz LTD privacy policy
        </div>
        <PrimaryBtn text="Create Account" className={styles.signupBtn} onClick={handleSend} />
      </form>
      <div className={styles.signupFooter}>
        <div>
          <span>Already have an account?</span>
          <Link to={routes.api.logIn}>Log in</Link>
        </div>
      </div>
      {(mailValid || passValid) && <FormError fieldError={`${mailValid} ${passValid}`} />}
    </div>
  );
};

export default SignUpForm;
