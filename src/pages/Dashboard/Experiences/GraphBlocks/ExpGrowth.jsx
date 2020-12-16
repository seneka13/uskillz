import React from "react";
import styles from "./graph.module.scss";
import { ResponsiveLine } from "@nivo/line";
import { useSelector } from "react-redux";
import { filterArrByMonth } from "../../../../services/monthFounder";
import { colorArr } from "../../../../services/colorsArr";
import { useResize } from "../../../../customHooks/useResize";

const ExpGrowth = () => {
  const { graphsExpAndIndustriesList } = useSelector((state) => ({
    graphsExpAndIndustriesList: state.expTeamsReducers.graphsExpAndIndustriesList,
  }));
  const windowSize = useResize(750);

  return (
    <div className={styles.graphBlock} style={{ height: "430px" }}>
      <h3>Experiences Growth</h3>
      <ResponsiveLine
        data={filterArrByMonth(graphsExpAndIndustriesList.experiences_by_months)}
        colors={colorArr}
        margin={{ top: 50, right: 120, bottom: windowSize ? 30 : 66, left: 30 }}
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
            direction: "column",
            justify: false,
            translateX: 111,
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

export default ExpGrowth;
