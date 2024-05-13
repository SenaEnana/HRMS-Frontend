import { Box } from "@mui/material";
import Header from "../../../components/header";
import BarChart from "../../../components/barChart";
import React, { useState, useEffect } from "react";

const Bar = () => {
  const [approvedLeaveCount, setApprovedLeaveCount] = useState(0);
  const [rejectedLeaveCount, setRejectedLeaveCount] = useState(0);
  const [pendingLeaveCount, setPendingLeaveCount] = useState(0);
  useEffect(() => {
    const fetchApprovedLeaveCount = async () => {
      try {
        const response = await fetch("https://localhost:7140/DashBoard/CountApprovedLeaveRequests");
        const data = await response.json();
        setApprovedLeaveCount(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching approved leave count:", error.message);
      }
    };
    fetchApprovedLeaveCount();
  }, []);
  useEffect(() => {
    const fetchPendingLeaveCount = async () => {
      try {
        const response = await fetch("https://localhost:7140/DashBoard/CountPendingLeaveRequests");
        const data = await response.json();
        setPendingLeaveCount(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching approved leave count:", error.message);
      }
    };
    fetchPendingLeaveCount();
  }, []);
  useEffect(() => {
    const fetchRejectedLeaveCount = async () => {
      try {
        const response = await fetch("https://localhost:7140/DashBoard/CountRejectedLeaveRequests");
        const data = await response.json();
        setRejectedLeaveCount(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching rejected leave count:", error.message);
      }
    };
    fetchRejectedLeaveCount();
  }, []);


  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
      <BarChart 
          data={[
            { status: "Pending", count: pendingLeaveCount },
            { status: "Approved", count: approvedLeaveCount },
            { status: "Rejected", count: rejectedLeaveCount },
          ]}
          xAxisLabel="Leave request Status"
          yAxisLabel="Number of requests"
              
            />
      </Box>
    </Box>
  );
};

export default Bar;
