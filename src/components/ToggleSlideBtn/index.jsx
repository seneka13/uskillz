import React, { useRef, useEffect } from "react";
import styles from "./toggle.module.scss";
import { sliderBtnGraphs } from "../../services/sliderBtn";

const ToggleSlideBtn = ({ toggleBtn, setToggleBtn }) => {
  const navList = useRef(null);
  const bacgkround = useRef(null);

  useEffect(() => {
    sliderBtnGraphs(navList.current, (link, width, tempMarginLeft) => {
      link.addEventListener("click", () => {
        bacgkround.current.style.width = width + "%";
        bacgkround.current.style.marginLeft = tempMarginLeft + "%";
      });
    });
  }, [navList.current]);

  return (
    <div ref={navList} className={styles.btnGroup}>
      <button
        id="toggleGraphs"
        onClick={() => setToggleBtn("Data")}
        className={`${styles.btnTab} ${toggleBtn === "Data" && styles.activeNavBtn}`}
      >
        Data
      </button>
      <button
        id="toggleGraphs"
        onClick={() => setToggleBtn("Insights")}
        className={`${styles.btnTab} ${toggleBtn === "Insights" && styles.activeNavBtn}`}
      >
        Insights
      </button>
      <div ref={bacgkround} className={styles.backColor}></div>
    </div>
  );
};

export default ToggleSlideBtn;
