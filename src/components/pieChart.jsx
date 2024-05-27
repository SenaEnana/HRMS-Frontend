import { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";

const PieChart = ({ employeeDataProp }) => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5100/DashBoard/TotalEmployeesPerBranch"
        );
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

  return <ResponsivePie data={formattedData} theme={{}} />;
};

export default PieChart;
