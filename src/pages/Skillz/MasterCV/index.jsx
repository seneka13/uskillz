import React, { useState, useEffect } from "react";
import styles from "./master.module.scss";
import Layout from "../../../components/Layout";
import Developing from "../../../components/Developing";
import ToggleSlideBtn from "../../../components/ToggleSlideBtn";
import { Industry } from "./ContentBlocks/Industry";
import ExpTypeBlock from "./ContentBlocks/ExpTypeBlock";
import { useDispatch, useSelector } from "react-redux";
import { getExpTypeList } from "../../../store/actions";

const MasterCV = () => {
  const dispatch = useDispatch();
  const { expTypeList } = useSelector((state) => ({
    expTypeList: state.masterReducers.expTypeList,
  }));
  const [toggleBtn, setToggleBtn] = useState("");

  return (
    <section className={styles.masterPage}>
      <Layout>
        <div className={styles.masterContent}>
          <div className={styles.expGrid}>
            <ToggleSlideBtn toggleBtn={toggleBtn} setToggleBtn={setToggleBtn} />
            <div>
              <Industry />
            </div>
          </div>
          <div className={styles.expGrid2}>
            {expTypeList &&
              expTypeList.map((item) => {
                return (
                  <div key={item.exp_type.id}>
                    <ExpTypeBlock expType={item.exp_type.name} expChild={item.companies} />
                  </div>
                );
              })}
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default MasterCV;
