import React, { useEffect, useState } from "react";
import { ResponsiveBar, ResponsiveBarCanvas } from "@nivo/bar";
import styles from "./graph.module.scss";
import { useSelector } from "react-redux";
import { useResize } from "../../../../customHooks/useResize";
import { colorArr } from "../../../../services/colorsArr";

const HardSkillsBar = ({ activeSkills }) => {
  const { graphsSkillsList, graphsSkillsNeedList } = useSelector((state) => ({
    graphsSkillsList: state.skillsTeamsReducers.graphsSkillsList,
    graphsSkillsNeedList: state.skillsTeamsReducers.graphsSkillsNeedList,
  }));
  const windowSize = useResize(800);

  return (
    <div className={styles.graphBlock} style={{ height: "700px" }}>
      <h3>
        {activeSkills === "haveGraph" && "Hard Skills"}
        {activeSkills === "needGraph" && "Hard Skills Members Need"}
      </h3>
      <ResponsiveBarCanvas
        data={activeSkills === "haveGraph" ? graphsSkillsList.hard_skills : graphsSkillsNeedList.hard_skills}
        keys={graphsSkillsList.teams_name || graphsSkillsList.users_in_team || ["count"]}
        indexBy="skills"
        margin={{ top: 30, right: windowSize ? 140 : 115, bottom: 50, left: windowSize ? 170 : 30 }}
        pixelRatio={1}
        padding={0.15}
        innerPadding={0}
        minValue="auto"
        maxValue="auto"
        groupMode="stacked"
        layout="horizontal"
        reverse={false}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "red_blue" }}
        colorBy="id"
        borderWidth={0}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: "", legendOffset: 36 }}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 36,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        enableGridX={true}
        enableGridY={false}
        enableLabel={true}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        isInteractive={true}
      />
    </div>
  );
};

export default HardSkillsBar;
