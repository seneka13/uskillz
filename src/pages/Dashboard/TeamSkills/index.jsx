import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./skills.module.scss";
import Layout from "../../../components/Layout";
import SlideNavBtn from "../../../components/SlideNavSkillsBtn";
import { getTeamsSkillsList } from "../../../store/actions";
import ToggleSlideBtn from "../../../components/ToggleSlideBtn";
import HardSkillsHave from "./ContentBlocks/HardSkillsHave";
import SoftSkillsHave from "./ContentBlocks/SoftSkillsHave";
import HardSkillsNeed from "./ContentBlocks/HardSkillsNeed";
import SoftSkillsNeed from "./ContentBlocks/SoftSkillsNeed";
import SkillsLevel from "./ContentBlocks/SkillsLevel";
import SkillsTeams from "./ContentBlocks/SkillsTeams";
import SkillsIndividual from "./ContentBlocks/SkillsIndividual";
import SkillsGrowth from "./GraphBlocks/SkillsGrowth";
import SkillsDistribution from "./GraphBlocks/SkillsDistribution";
import SoftSkillsBar from "./GraphBlocks/SoftSkillsBar";
import SlideGraphsBtn from "../../../components/SlideGraphsBtn";
import HardSkillsBar from "./GraphBlocks/HardSkillsBar";

const TeamSkills = () => {
  const dispatch = useDispatch();
  const getExistSkills = () => dispatch(getTeamsSkillsList());
  const [activeSkills, setActiveSkills] = useState("");
  const [activeGraphsSkills, setActiveGraphsSkills] = useState("");
  const [toggleGraphs, setToggleGraphs] = useState("");
  const [radioState, setRadioState] = useState("");

  const { skillsTeamsList, teamsList, membersList } = useSelector((state) => ({
    skillsTeamsList: state.skillsTeamsReducers.skillsTeamsList,
    teamsList: state.orgTeamsReducers.teamsList,
    membersList: state.orgTeamsReducers.membersList,
  }));
  useEffect(() => {
    getExistSkills();
  }, []);
  useEffect(() => {}, [activeGraphsSkills]);
 
  return (
    <section className={styles.skillzProfilePage}>
      <Layout>
        <div className={styles.skillzProfileContent}>
          <div className={styles.sideBlock}>
            {toggleGraphs === "Data" ? (
              <SlideNavBtn
                active={activeSkills}
                setActive={setActiveSkills}
                firstBtnText={"All skills"}
                secondBtnText={"Skills Members Have"}
                thirdBtnText={"Skills Member Need"}
              />
            ) : (
              <SlideGraphsBtn
                active={activeSkills}
                setActive={setActiveSkills}
                firstBtnText={"Skills Members Have"}
                secondBtnText={"Skills Member Need"}
              />
            )}
            <ToggleSlideBtn toggleBtn={toggleGraphs} setToggleBtn={setToggleGraphs} />
            <div className={styles.radioBlock}>
              <div>
                <SkillsLevel radioState={radioState} setRadioState={setRadioState} />
              </div>
              {radioState === "Teams" && <SkillsTeams teamsList={teamsList} />}
              {radioState === "Individual" && <SkillsIndividual membersList={membersList} />}
            </div>
          </div>
          {toggleGraphs === "Data" && (
            <div className={styles.skillzGrid}>
              <div>
                {(activeSkills === "all" || activeSkills === "have") && (
                  <SoftSkillsHave skillsTeamsList={skillsTeamsList} />
                )}
                {(activeSkills === "all" || activeSkills === "need") && (
                  <SoftSkillsNeed skillsTeamsList={skillsTeamsList} />
                )}
              </div>
              <div>
                {(activeSkills === "all" || activeSkills === "have") && (
                  <HardSkillsHave skillsTeamsList={skillsTeamsList} />
                )}
                {(activeSkills === "all" || activeSkills === "need") && (
                  <HardSkillsNeed skillsTeamsList={skillsTeamsList} />
                )}
              </div>
            </div>
          )}
          {toggleGraphs === "Insights" && (
            <div className={styles.graphs}>
              <div className={styles.graphLine}>
                <SkillsGrowth />
                <SkillsDistribution />
              </div>
              {radioState === "Individual" && activeSkills === "needGraph" ? null : (
                <SoftSkillsBar activeSkills={activeSkills} />
              )}
              {radioState === "Individual" && activeSkills === "needGraph" ? null : (
                <HardSkillsBar activeSkills={activeSkills} />
              )}
            </div>
          )}
        </div>
      </Layout>
    </section>
  );
};

export default TeamSkills;
