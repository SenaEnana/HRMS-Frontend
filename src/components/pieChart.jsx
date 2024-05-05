import { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const PieChart = ({ employeeDataProp }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch("https://localhost:7140/DashBoard/TotalEmployeesPerBranch");
        const data = await response.json();
        console.log(data);
        setEmployeeData(data);
      } catch (error) {
        console.error("Error fetching employee data:", error.message);
      }
    };
    fetchEmployeeData();
  }, []);

 
  const formattedData = employeeData.map((branch) => ({
    id: branch.branchName,
    label: branch.branchName,
    value: branch.totalEmployees,
  }));

  return (
    <ResponsivePie
      data={formattedData}
      theme={{
      }}

    />
  );
};

export default PieChart;
