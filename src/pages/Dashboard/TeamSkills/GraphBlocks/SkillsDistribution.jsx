import React from "react";
import styles from "./graph.module.scss";
import { ResponsivePie } from "@nivo/pie";
import { useSelector } from "react-redux";

const SkillsDistribution = () => {
  const { graphsSkillsList } = useSelector((state) => ({
    graphsSkillsList: state.skillsTeamsReducers.graphsSkillsList,
  }));
  return (
    <div className={styles.graphBlock} style={{ height: "430px" }}>
      <h3 style={{ textAlign: "center" }}>Skills Distribution</h3>
      <ResponsivePie
        data={graphsSkillsList.skills_by_percentage}
        margin={{ top: 40, right: 40, bottom: 80, left: 40 }}
        startAngle={-135}
        endAngle={315}
        sortByValue={false}
        height={350}
        theme={{ fontSize: "14px", textColor: "#333333" }}
        innerRadius={0.4}
        colors={["#5965f0", "#f07171"]}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        enableRadialLabels={false}
        sliceLabel={(data) => `${data.value}%`}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="white"
        radialLabelsLinkColor={{ from: "color" }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="white"
        isInteractive={true}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#5d5d5d",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 20,
            symbolShape: "circle",
            fontWeight: "bold",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#5d5d5d",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default SkillsDistribution;
