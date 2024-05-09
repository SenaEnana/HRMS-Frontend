import { Box } from "@mui/material";
import Header from "../../../components/header";
import BarChart from "../../../components/barChart";
import React, { useState, useEffect } from "react";

const Bar = () => {
  const [addressedCompliantCount, setAddressedCompliantCount] = useState(0);
  const [pendingCompliantCount, setPendingCompliantCount] = useState(0);
  useEffect(() => {
    const fetchPendingCompliantCount = async () => {
      try {
        const response = await fetch(
          "https://localhost:7140/api/Complaint/PendingComplaintCount"
        );
        const data = await response.json();
        setPendingCompliantCount(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching inactive employee count:", error.message);
      }
    };
    fetchPendingCompliantCount();
  }, []);


  useEffect(() => {
    const fetchAddressedCompliantCount = async () => {
      try {
        const response = await fetch(
          "https://localhost:7140/api/Complaint/AddressedComplaintCount"
        );
        const data = await response.json();
        setAddressedCompliantCount(data);
        console.log(data);
      } catch (error) {
        console.error(
          "Error fetching available employee count:",
          error.message
        );
      }
    };
    fetchAddressedCompliantCount();
  }, []);

  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Compliant Bar Chart" />
      <Box height="75vh">
      <BarChart
          
          data={[                       
            { status: "Pending", count: pendingCompliantCount },
            { status: "Addressed", count: addressedCompliantCount },
          ]}
          xAxisLabel="Complaint Status"
          yAxisLabel="Number of Complaints"
          /> 
      </Box>
    </Box>
  );
};

export default Bar;
