import { Box } from "@mui/material";
import Header from "../../../components/header";
import BarChart from "../../../components/barChart";
import React, { useState, useEffect } from "react";

const Bar = () => {
  const [activeEmployeeCount, setActiveEmployeeCount] = useState("Loading...");
  const [inactiveEmployeeCount, setInactiveEmployeeCount] = useState(0);

  useEffect(() => {
    const fetchInactiveEmployeeCount = async () => {
      try {
        const response = await fetch(
          "https://localhost:7140/DashBoard/InactiveCount"
        );
        const data = await response.json();
        setInactiveEmployeeCount(data);
      } catch (error) {
        console.error("Error fetching inactive employee count:", error.message);
      }
    };
    fetchInactiveEmployeeCount();
  }, []);

  useEffect(() => {
    const fetchActiveEmployeeCount = async () => {
      try {
        const response = await fetch(
          "https://localhost:7140/DashBoard/ActiveCount"
        );
        const data = await response.json();
        setActiveEmployeeCount(data);
      } catch (error) {
        console.error(
          "Error fetching available employee count:",
          error.message
        );
      }
    };
    fetchActiveEmployeeCount();
  }, []);

  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart
          activeEmployeeCount={activeEmployeeCount}
          inactiveEmployeeCount={inactiveEmployeeCount}
        />
      </Box>
    </Box>
  );
};

export default Bar;
