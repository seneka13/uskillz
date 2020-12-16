import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import linkarrow from "../../../../assets/SkillzImages/linkarrow.svg";
import { changeField } from "../../../../store/actions";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import PrimaryText from "../../../../components/PrimaryText";
import styles from "./content.module.scss";

const Interview = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("editExperiences", formField, value));
  const nodeRef = useRef(null);
  const [show, setShow] = useState(false);

  const { result, whatIDid, extraComments } = useSelector((state) => ({
    result: state.fieldsReducers.editExperiences.result,
    whatIDid: state.fieldsReducers.editExperiences.whatIDid,
    extraComments: state.fieldsReducers.editExperiences.extraComments,
  }));

  return (
    <div className={`${styles.contentBlock} ${styles.interBlock}`}>
      <h3>Interview Prep</h3>
      <PrimaryBtn
        className={styles.popoverBtn}
        icon={<img className={`${show ? styles.dropDownShow : styles.dropDownClose}`} src={linkarrow} alt="quest" />}
        onClick={() => setShow(!show)}
      />
      <CSSTransition
        nodeRef={nodeRef}
        in={show}
        timeout={750}
        classNames={{ enterActive: styles["show-enter-active"], exitActive: styles["show-exit-active"] }}
        mountOnEnter
        unmountOnExit
        onExited={() => setShow(false)}
      >
        <div ref={nodeRef} className={`${styles.intervievFields}`}>
          <PrimaryText
            className={styles.textField}
            placeholder={"What was your key result? (e.g. Increased sales by 20%)"}
            onChange={(value) => changeFieldValue("result", value)}
            value={result}
            labelText={"Results"}
          />
          <PrimaryText
            className={styles.textField}
            placeholder={"What tasks did you do? (e.g. Created a marketing campaign)"}
            onChange={(value) => changeFieldValue("whatIDid", value)}
            value={whatIDid}
            labelText={"What I did"}
          />
          <PrimaryText
            className={styles.textField}
            placeholder={"Add any extra detail (e.g. My work was used in a report)"}
            onChange={(value) => changeFieldValue("extraComments", value)}
            value={extraComments}
            labelText={"Extra comments"}
          />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Interview;
