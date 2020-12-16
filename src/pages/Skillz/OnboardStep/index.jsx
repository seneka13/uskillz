import React from "react";
import UniverStep from "./UniverStep";
import OrgStep from "./OrgStep";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import styles from "./step.module.scss";
import StepProgress from "./StepProgress";

const OnboardStep = () => {
  const childArray = [
    { id: 1, content: <UniverStep /> },
    { id: 2, content: <OrgStep /> },
    { id: 3, content: <OrgStep /> },
    { id: 4, content: <OrgStep /> },
    { id: 5, content: <OrgStep /> },
  ];

  return (
    <section className={styles.stepPage}>
      <StepProgress childArray={childArray} />
    </section>
  );
};

export default OnboardStep;
