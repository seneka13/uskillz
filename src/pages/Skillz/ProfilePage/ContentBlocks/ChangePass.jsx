import React, { useRef } from "react";
import { bool, func } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import PrimaryInput from "../../../../components/PrimaryInput";
import { changeField } from "../../../../store/actions";
import styles from "./account.module.scss";

const ChangePass = ({ show, setShow, handleChange }) => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("accountDetail", formField, value));
  const nodeRef = useRef(null);

  const { oldPassword, newPassword, confirmPassword } = useSelector((state) => ({
    user: state.authReducers.user,
    oldPassword: state.fieldsReducers.accountDetail.oldPassword,
    newPassword: state.fieldsReducers.accountDetail.newPassword,
    confirmPassword: state.fieldsReducers.accountDetail.confirmPassword,
  }));

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={show}
        timeout={750}
        classNames={{ enterActive: styles["change-enter-active"], exitActive: styles["change-exit-active"] }}
        mountOnEnter
        unmountOnExit
        onExited={() => setShow(false)}
      >
        <div ref={nodeRef} className={`${styles.changePass}`}>
          <PrimaryInput
            type="password"
            name="oldPassword"
            placeholder={"Old password"}
            autoComplete="off"
            value={oldPassword}
            className={styles.inputField}
            onChange={(value) => changeFieldValue("oldPassword", value)}
          />
          <PrimaryInput
            type="password"
            name="oldPassword"
            placeholder={"New password"}
            autoComplete="off"
            value={newPassword}
            className={styles.inputField}
            onChange={(value) => changeFieldValue("newPassword", value)}
          />
          <PrimaryInput
            type="password"
            name="oldPassword"
            placeholder={"Confirm new password"}
            autoComplete="off"
            value={confirmPassword}
            className={styles.inputField}
            onChange={(value) => changeFieldValue("confirmPassword", value)}
          />
        </div>
      </CSSTransition>
      <PrimaryBtn text={"Change password"} className={styles.changePassBtn} onClick={handleChange} />
    </>
  );
};

ChangePass.propTypes = {
  show: bool,
  setShow: func,
  handleChange: func,
};

export default ChangePass;
