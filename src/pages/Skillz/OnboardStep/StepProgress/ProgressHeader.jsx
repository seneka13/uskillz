import React from "react";
import styles from "./step.module.scss";
import { array, number} from "prop-types";

const HeaderProgress = ({ childArray, current }) => {
  return (
    <header className={styles.progressHeader}>
      <div className={styles.progressBar}>
        {childArray.map((item) => {
          return (
            <div key={item.id} className={styles.progressItem}>
              <div className={`${styles.progressStep} ${item.id === current && styles.progressStepActive}`}></div>
            </div>
          );
        })}
      </div>
    </header>
  );
};

HeaderProgress.propTypes = {
  current: number,
  childArray: array,
};

export default HeaderProgress;
