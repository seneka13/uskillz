import React, { useRef, useEffect } from "react";
import styles from "./slide.module.scss";
import { sliderBtn } from "../../services/sliderBtn";

const SlideGraphsBtn = ({ active, setActive, firstBtnText, secondBtnText }) => {
  const navList = useRef(null);
  const bacgkround = useRef(null);


  useEffect(() => {
    setActive("haveGraph");
    sliderBtn(navList.current, (link, width, tempMarginLeft) => {
      link.addEventListener("click", () => {
        bacgkround.current.style.width = width + "%";
        bacgkround.current.style.marginLeft = tempMarginLeft + "%";
      });
    });
  }, [navList.current]);


  return (
    <div ref={navList} className={styles.btnGroup}>
      <button
        id="btnTab"
        onClick={() => setActive("haveGraph")}
        className={`${styles.btnTab} ${active === "haveGraph" && styles.activeNavBtn}`}
      >
        {firstBtnText}
      </button>
      <button
        id="btnTab"
        onClick={() => setActive("needGraph")}
        className={`${styles.btnTab} ${active === "needGraph" && styles.activeNavBtn}`}
      >
        {secondBtnText}
      </button>
      <div ref={bacgkround} className={styles.backColor}></div>
    </div>
  );
};

export default SlideGraphsBtn;
