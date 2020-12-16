import React, { useRef, useEffect } from "react";
import styles from "./slide.module.scss";
import { sliderBtn } from "../../services/sliderBtn";

const SlideNavBtn = ({ active, setActive, firstBtnText, secondBtnText, thirdBtnText }) => {
  const navList = useRef(null);
  const bacgkround = useRef(null);

  useEffect(() => {
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
        onClick={() => setActive("all")}
        className={`${styles.btnTab} ${active === "all" && styles.activeNavBtn}`}
      >
        {firstBtnText}
      </button>
      <button
        id="btnTab"
        onClick={() => setActive("have")}
        className={`${styles.btnTab} ${active === "have" && styles.activeNavBtn}`}
      >
        {secondBtnText}
      </button>
      <button
        id="btnTab"
        onClick={() => setActive("need")}
        className={`${styles.btnTab} ${active === "need" && styles.activeNavBtn}`}
      >
        {thirdBtnText}
      </button>
      <div ref={bacgkround} className={styles.backColor}></div>
    </div>
  );
};

export default SlideNavBtn;
