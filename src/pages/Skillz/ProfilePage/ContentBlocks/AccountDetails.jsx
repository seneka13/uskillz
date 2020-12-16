import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import PrimaryInput from "../../../../components/PrimaryInput";
import { changeField, updateProfile, clearFields } from "../../../../store/actions";
import editPen from "../../../../assets/SkillzImages/edit.svg";
import styles from "./account.module.scss";
import FormError from "../../../../components/FormError";
import ChangePass from "./ChangePass";
import { passValidate } from "../../../../services/fieldValidate";
import { changePass } from "../../../../store/actions/SkillzSectionActions/profileActions";

const AccountDetails = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("accountDetail", formField, value));
  const update = (url, data) => dispatch(updateProfile(url, data));
  const change = (url, data) => dispatch(changePass(url, data));
  const clear = () => dispatch(clearFields());
  const [formDisable, setFormDisable] = useState(true);
  const [formValid, setFormValid] = useState("");
  const [show, setShow] = useState(false);

  const { user, username, email, oldPassword, newPassword, confirmPassword, error, failed, success } = useSelector((state) => ({
    user: state.authReducers.user,
    username: state.fieldsReducers.accountDetail.username,
    success: state.profileReducers.changePass.success,
    loading: state.profileReducers.changePass.loading,
    failed: state.profileReducers.changePass.failed,
    error: state.profileReducers.changePass.error,
    email: state.fieldsReducers.accountDetail.email,
    oldPassword: state.fieldsReducers.accountDetail.oldPassword,
    newPassword: state.fieldsReducers.accountDetail.newPassword,
    confirmPassword: state.fieldsReducers.accountDetail.confirmPassword,
  }));

  const handleSend = (e) => {
    e.preventDefault();
    if (username && email) {
      update(user.update_profile, { full_name: username, email });
      setFormDisable(!formDisable);
    } else {
      setFormValid("You need to fill in all fields");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    show === false && setShow(true);
    if (show === true) {
      if (passValidate(oldPassword) && passValidate(newPassword) && passValidate(confirmPassword)) {
        newPassword !== confirmPassword
          ? setFormValid("Your password is different")
          : change({ old_password: oldPassword, new_password: newPassword });
      } else {
        setFormValid(
          "Your password must be at least 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit."
        );
      }
    }
  };

  useEffect(() => {
    success && setShow(false);
  }, [success]);

  useEffect(() => {
    error && setFormValid(error[0]);
  }, [error]);

  useEffect(() => {
    user && user.full_name && changeFieldValue("username", user.full_name);
    user && user.email && changeFieldValue("email", user.email);
  }, [user]);

  useEffect(() => {
    const alert = setTimeout(() => setFormValid(""), 3500);
    return () => clearTimeout(alert);
  }, [formValid]);

  return (
    <div className={styles.blocks}>
      <h3>Account Details</h3>
      {formDisable && <PrimaryBtn className={styles.editBtn} icon={<img src={editPen} alt="edit" />} onClick={() => setFormDisable(!formDisable)} />}
      {!formDisable && <PrimaryBtn className={styles.saveBtn} text={"Save"} onClick={handleSend} />}
      <PrimaryInput
        type="text"
        loading
        name="username"
        placeholder={"Full Name"}
        autoComplete="off"
        value={username}
        className={styles.inputField}
        onChange={(value) => changeFieldValue("username", value)}
        labelText={"Name"}
        disable={formDisable}
      />
      <PrimaryInput
        type="email"
        name="email"
        placeholder={"Email"}
        autoComplete="off"
        value={email}
        className={styles.inputField}
        onChange={(value) => changeFieldValue("email", value)}
        labelText={"Email"}
        disable={formDisable}
      />
      <ChangePass show={show} setShow={setShow} handleChange={handleChange} />
      {formValid && <FormError fieldError={formValid} apiError={"Api Error"} />}
    </div>
  );
};

export default AccountDetails;
