import { Box } from "@mui/material";
import Header from "../../../components/header";
import PieChart from "../../../components/pieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Total Employees Per Branch" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
