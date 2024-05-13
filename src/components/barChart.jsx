import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";

const BarChart = ({ data, xAxisLabel, yAxisLabel , isDashboard = false }) => {
  const theme = useTheme();
  const colors = theme.palette.mode === 'light' ? theme.palette.primary : theme.palette.secondary;

  return (
    <ResponsiveBar
      data={data}
      keys={["count"]}
      indexBy="status"
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      padding={0.3}
      indexScale={{ type: "band", round: true }}
      colors={[colors[500], colors[700]]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }} // Removed unnecessary color modifier (optional)
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Status",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Count",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false} // Removed unnecessary label styles
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }} // Removed unnecessary color modifier (optional)
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
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
      enableHover={true} // Enable hover interactions
      tooltip={({ index, value, color }) => (
        <div style={{ background: color, padding: '8px 10px', borderRadius: '4px' }}>
          <strong>{index}:</strong> {value}
        </div>
      )} // Define custom tooltip content and style
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in status: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
