import React, { useEffect } from "react";
import styles from "./step.module.scss";
import { array } from "prop-types";
import HeaderProgress from "./ProgressHeader";
import { useDispatch, useSelector } from "react-redux";
import { setNextStep } from "../../../../store/actions";

const StepProgress = ({ childArray }) => {
  const dispatch = useDispatch();
  const setStep = (value) => dispatch(setNextStep(value));
  const { currentStep } = useSelector((state) => ({
    currentStep: state.onboardReducers.currentStep,
  }));

  useEffect(() => {
    setStep(1);
  }, []);

  return (
    <>
      <HeaderProgress childArray={childArray} current={currentStep} />
      {childArray.map((item) => {
        return (
          item.id === currentStep && (
            <div key={item.id} className={styles.progressContent}>
              {item.content}
            </div>
          )
        );
      })}
    </>
  );
};

StepProgress.propTypes = {
  childArray: array,
};

export default StepProgress;
