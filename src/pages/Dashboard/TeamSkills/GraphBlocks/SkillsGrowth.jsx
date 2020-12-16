import React from "react";
import styles from "./graph.module.scss";
import { ResponsiveLine } from "@nivo/line";
import { useSelector } from "react-redux";
import { filterArrByMonth } from "../../../../services/monthFounder";
import { useResize } from "../../../../customHooks/useResize";

const SkillsGrowth = () => {
  const { graphsSkillsList } = useSelector((state) => ({
    graphsSkillsList: state.skillsTeamsReducers.graphsSkillsList,
  }));
  const windowSize = useResize(750);

  return (
    <div className={styles.graphBlock} style={{ height: "430px" }}>
      <h3>Skills Growth</h3>
      <ResponsiveLine
        data={filterArrByMonth(graphsSkillsList.skills_by_months)}
        colors={["#5965f0", "#f07171"]}
        margin={{ top: 50, right: 30, bottom: windowSize ? 30 : 66, left: 30 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
        curve="basis"
        height={340}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 3,
          tickPadding: 10,
          tickRotation: windowSize ? 0 : -90,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
        }}
        theme={{ fontSize: "11px", textColor: "#333333" }}
        enableGridX={false}
        lineWidth={3}
        enablePoints={false}
        pointSize={7}
        pointColor={{ theme: "grid.line.stroke" }}
        pointBorderWidth={20}
        pointBorderColor={{ theme: "background" }}
        pointLabelYOffset={-12}
        areaOpacity={0}
        isInteractive={true}
        useMesh={true}
        legends={[
          {
            anchor: "top-right",
            direction: "row",
            justify: false,
            translateX: 11,
            translateY: -50,
            itemWidth: 103,
            itemHeight: 20,
            itemsSpacing: 4,
            symbolSize: 20,
            symbolShape: "circle",
            itemDirection: "left-to-right",
            itemTextColor: "#777",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default SkillsGrowth;
