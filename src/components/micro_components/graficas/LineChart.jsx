import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "@views/theme/theme.js";
import ClockLoader from "react-spinners/ClockLoader.js";

const LineChart = ({
  isCustomLineColors = false,
  isDashboard = false,
  data = [{ id: "Ventas", data: [], color: "#01a7c2" }], // Added default color
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Ensure data has colors and proper structure
  const chartData =
    Array.isArray(data) && data.length > 0
      ? data.map((series) => ({
          ...series,
          color: series.color || colors.greenAccent[500], // Default color if not provided
        }))
      : [{ id: "Ventas", data: [], color: colors.greenAccent[500] }];

  return (
    <ResponsiveLine
      data={chartData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={({ color }) => color} // Use the color from data
      margin={{ top: 50, right: 100, bottom: 50, left: 50 }}
      xScale={{
        type: "time",
        format: "%Y-%m-%d",
        precision: "day",
        min: "auto",
        max: "auto",
        useUTC: false,
      }}
      xFormat="time:%Y-%m-%d"
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: "20%y %b %d",
        tickValues: "every 1 day",
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -30,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Ventas",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      lineWidth={2}
      enableArea={true}
      areaOpacity={0.1}
      defs={[
        {
          id: "gradient",
          type: "linearGradient",
          colors: [
            { offset: 0, color: "inherit", opacity: 0.3 },
            { offset: 100, color: "inherit", opacity: 0 },
          ],
        },
      ]}
      fill={[{ match: "*", id: "gradient" }]}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
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
  );
};

export default LineChart;
