import { Box } from "@mui/material";
import Header from "../../../components/header";
import LineChart from "../../../components/lineChart";
import React, { useState, useEffect } from "react";

const Line = () => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(
          "https://localhost:7140/DashBoard/EmployeesHiredPerYear"
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
  return (
    <Box m="20px">
      <Header
        title="Line Chart for total employees hired per year"
        subtitle="Simple Line Chart"
      />
      <Box height="75vh">
        <LineChart data={employeeData} />
      </Box>
    </Box>
  );
};

export default Line;
