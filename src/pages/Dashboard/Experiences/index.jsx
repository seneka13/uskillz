import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import styles from "./exp.module.scss";
import Layout from "../../../components/Layout";
import ToggleSlideBtn from "../../../components/ToggleSlideBtn";
import { useDispatch, useSelector } from "react-redux";
import ExpLevel from "./ContentBlocks/ExpLevel";
import ExpIndustryList from "./ContentBlocks/ExpIndustryList";
import TeamsExpTypeBlock from "./ContentBlocks/TeamsExpTypeBlock";
import ExpTeams from "./ContentBlocks/ExpTeams";
import ExpIndividual from "./ContentBlocks/ExpIndividual";
import ExpIndividualIndustryList from "./ContentBlocks/ExpIndividualIndustryList";
import { getExpAndIndustriesList } from "../../../store/actions";
import { useResize } from "../../../customHooks/useResize";
import ExpereiencesBar from "./GraphBlocks/ExperiencesBar";
import IndustryBar from "./GraphBlocks/IndustryBar";
import ExpGrowth from "./GraphBlocks/ExpGrowth";
import ExpDistribution from "./GraphBlocks/ExpDistribution";

const Expereiences = () => {
  const [radioState, setRadioState] = useState("");
  const [toggleGraphs, setToggleGraphs] = useState("");
  const windowSize = useResize(750);

  const { expAndIndustriesList, teamsList, membersList } = useSelector((state) => ({
    expAndIndustriesList: state.expTeamsReducers.expAndIndustriesList,
    teamsList: state.orgTeamsReducers.teamsList,
    membersList: state.orgTeamsReducers.membersList,
  }));

  const filterArr =
    expAndIndustriesList.experiences &&
    expAndIndustriesList.experiences.filter((item) => item.exp_type).map((item) => item.exp_type);

  return (
    <section className={styles.expPage}>
      <Layout>
        <div className={styles.expContent}>
          <div className={styles.expGrid}>
            <div>
              <ToggleSlideBtn toggleBtn={toggleGraphs} setToggleBtn={setToggleGraphs} />
              <div className={styles.radioBlock}>
                <div>
                  <ExpLevel radioState={radioState} setRadioState={setRadioState} />
                </div>
                {radioState === "Teams" && <ExpTeams teamsList={teamsList} />}
                {radioState === "Individual" && <ExpIndividual membersList={membersList} />}
              </div>
              {radioState === "Individual" ? <ExpIndividualIndustryList /> : <ExpIndustryList />}
            </div>
          </div>
          {toggleGraphs === "Data" && (
            <Masonry
              breakpointCols={windowSize ? 2 : 1}
              className={styles.myMasonryGrid}
              columnClassName={styles.myMasonryGridColumn}
            >
              {filterArr &&
                filterArr.map((item) => {
                  return (
                    <div key={item.id}>
                      <TeamsExpTypeBlock expType={item.name} expChild={item.companies} />
                    </div>
                  );
                })}
            </Masonry>
          )}
          {toggleGraphs === "Insights" && (
            <div className={styles.graphs}>
              <div className={styles.graphLine}>
                <ExpGrowth />
                <ExpDistribution />
              </div>
              <ExpereiencesBar />
              <IndustryBar />
            </div>
          )}
        </div>
      </Layout>
    </section>
  );
};

export default Expereiences;
