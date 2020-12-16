import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PrimaryBtn from "../../../components/PrimaryBtn";
import PrimaryInput from "../../../components/PrimaryInput";
import styles from "./login.module.scss";
import passwordIcon from "../../../assets/AuthImages/password.png";
import personIcon from "../../../assets/AuthImages/person.png";
import logo from "../../../assets/AuthImages/uskillzLogo.png";
import LinkedInBtn from "../../../components/LinkedInBtn/LinkedInBtn";
import { Link } from "react-router-dom";
import routes from "../../../routes/routes";
import { changeField, loginAction } from "../../../store/actions";
import { CLIENT_ID, CLIENT_SECRET } from "../../../services/clientkeys";
import FormError from "../../../components/FormError";
import { mailValidate, passValidate } from "../../../services/fieldValidate";

const LoginForm = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("login", formField, value));
  const setBody = (body) => dispatch(loginAction(body));

  const [mailValid, setMailValid] = useState("");
  const [passValid, setPassValid] = useState("");

  const { email, password, error } = useSelector((state) => ({
    email: state.fieldsReducers.login.email,
    password: state.fieldsReducers.login.password,
    error: state.authReducers.login.error,
  }));

  useEffect(() => {
    const alert = setTimeout(() => {
      setMailValid("");
      setPassValid("");
    }, 3000);
    return () => clearTimeout(alert);
  }, [mailValid, passValid]);

  useEffect(() => {
    error && setMailValid("Email or password doesn`t correct!");
  }, [error]);

  const handleSend = (e) => {
    e.preventDefault();
    !mailValidate(email) ? setMailValid("Enter a valid email address.") : setMailValid("");
    !passValidate(password)
      ? setPassValid(
          "Your password must be at least 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit."
        )
      : setPassValid("");
    if (mailValidate(email) && passValidate(password)) {
      const formData = new FormData();
      formData.append("client_id", CLIENT_ID);
      formData.append("client_secret", CLIENT_SECRET);
      formData.append("username", email);
      formData.append("password", password);
      formData.append("grant_type", "password");
      setBody(formData);
    }
  };

  return (
    <div>
      <img className={styles.logo} src={logo} alt="logo" />
      <form className={styles.loginForm}>
        <PrimaryInput
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          className={styles.loginField}
          onChange={(value) => changeFieldValue("email", value)}
          labelContent={<img src={personIcon} alt="field img" />}
        />
        <PrimaryInput
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          value={password}
          className={styles.loginField}
          onChange={(value) => changeFieldValue("password", value)}
          labelContent={<img src={passwordIcon} alt="field img" />}
        />
        <PrimaryBtn text="Log in" className={styles.loginBtn} onClick={handleSend} />
      </form>
      <div className={styles.divider}>Or</div>
      <LinkedInBtn className={styles.loginBtn} />
      <div className={styles.loginFooter}>
        <div>
          <span>Don’t have an account?</span>
          <Link to={routes.api.signUp}>Sign up</Link>
        </div>
        <Link to={routes.api.resetPass}>Forgot your password?</Link>
      </div>
      {(mailValid || passValid) && <FormError fieldError={`${mailValid} ${passValid}`} apiError={"dsa"} />}
    </div>
  );
};

export default LoginForm;
