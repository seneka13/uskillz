import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import styles from "./graph.module.scss";
import { useSelector } from "react-redux";
import { useResize } from "../../../../customHooks/useResize";
import { colorArr } from "../../../../services/colorsArr";

const SoftSkillsBar = ({ activeSkills }) => {
  const { graphsSkillsList, graphsSkillsNeedList } = useSelector((state) => ({
    graphsSkillsList: state.skillsTeamsReducers.graphsSkillsList,
    graphsSkillsNeedList: state.skillsTeamsReducers.graphsSkillsNeedList,
  }));
  const windowSize = useResize(800);

  return (
    <div className={styles.graphBlock} style={{ height: "700px" }}>
      <h3>
        {activeSkills === "haveGraph" && "Soft Skills"}
        {activeSkills === "needGraph" && "Soft Skills Members Need"}
      </h3>
      <ResponsiveBar
        data={activeSkills === "haveGraph" ? graphsSkillsList.soft_skills : graphsSkillsNeedList.soft_skills}
        keys={graphsSkillsList.teams_name || graphsSkillsList.users_in_team || ["count"]}
        indexBy="skills"
        margin={{ top: 30, right: windowSize ? 140 : 115, bottom: 50, left: windowSize ? 170 : 30 }}
        padding={0.75}
        innerPadding={2}
        height={600}
        layout={`${windowSize ? "horizontal" : "vertical"}`}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={colorArr}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        axisBottom={
          windowSize
            ? {
                tickSize: 0,
                tickPadding: 0,
                tickRotation: 0,
              }
            : null
        }
        enableGridY={false}
        borderRadius={6}
        borderColor={{ from: "color", modifiers: [["darker", "2.3"]] }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
        }}
        enableLabel={false}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "top-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 25,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 17,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default SoftSkillsBar;
