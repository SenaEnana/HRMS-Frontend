import { Box, Typography, useTheme } from "@mui/material";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import SwipeLeftAltOutlinedIcon from "@mui/icons-material/SwipeLeftAltOutlined";
import Header from "../../../components/header";
import BarChart from "../../../components/barChart";
import StatBox from "../../../components/statBox";
import { tokens } from "../../../theme";
import React, { useState, useEffect } from "react";
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';

const HrDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [approvedLeaveCount, setApprovedLeaveCount] = useState("Loading...");
  const [rejectedLeaveCount, setRejectedLeaveCount] = useState("Loading...");
  const [activeEmployeeCount, setActiveEmployeeCount] = useState("Loading...");
  const [pendingLeaveRequests, setPendingLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inactiveEmployeeCount, setInactiveEmployeeCount] = useState(0);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  useEffect(() => {
    const fetchPendingLeaveRequests = async () => {
      try {
        const response = await fetch(
          "http://localhost:5100/api/Leave/GetPendingLeaveRequests"
        );
        const data = await response.json();
        setPendingLeaveRequests(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pending leave requests:", error.message);
        setLoading(false);
      }
    };

    fetchPendingLeaveRequests();
  }, []);
  useEffect(() => {
    const fetchInactiveEmployeeCount = async () => {
      try {
        const response = await fetch(
          "http://localhost:5100/DashBoard/InactiveCount"
        );
        const data = await response.json();
        setInactiveEmployeeCount(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching inactive employee count:", error.message);
        setLoading(false);
      }
    };
    fetchInactiveEmployeeCount();
  }, []);

  useEffect(() => {
    const fetchApprovedLeaveCount = async () => {
      try {
        const response = await fetch(
          "http://localhost:5100/DashBoard/CountApprovedLeaveRequests"
        );
        const data = await response.json();
        setApprovedLeaveCount(data);
      } catch (error) {
        console.error("Error fetching approved leave count:", error.message);
      }
    };
    fetchApprovedLeaveCount();
  }, []);
  useEffect(() => {
    const fetchRejectedLeaveCount = async () => {
      try {
        const response = await fetch(
          "http://localhost:5100/DashBoard/CountRejectedLeaveRequests"
        );
        const data = await response.json();
        setRejectedLeaveCount(data);
      } catch (error) {
        console.error("Error fetching rejected leave count:", error.message);
      }
    };
    fetchRejectedLeaveCount();
  }, []);
  useEffect(() => {
    const fetchActiveEmployeeCount = async () => {
      try {
        const response = await fetch(
          "http://localhost:5100/DashBoard/ActiveCount"
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
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="HR Manager Dashboard" subtitle="" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          className="rounded"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={activeEmployeeCount.toLocaleString()}
            subtitle="Active Employees"
            icon={<ToggleOnOutlinedIcon className="text-success fs-3" />}
          />
        </Box>
        <Box
          className="rounded"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={inactiveEmployeeCount.toLocaleString()}
            subtitle="InActive Employees"
            icon={<ToggleOffOutlinedIcon className="text-danger fs-3" />}
          />
        </Box>
        <Box
          className="rounded"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={approvedLeaveCount.toLocaleString()}
            subtitle="Approved Leave Requests"
            icon={<RecommendOutlinedIcon className="text-success fs-3" />}
          />
        </Box>
        <Box
          className="rounded"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={rejectedLeaveCount.toLocaleString()}
            subtitle="Rejected Leave Request"
            icon={<SwipeLeftAltOutlinedIcon className="text-danger fs-3" />}
          />
        </Box>
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Pending Leave Requests
              </Typography>
            </Box>

            {/* Display each leave request in a separate Box */}
            {!loading &&
              pendingLeaveRequests.length > 0 &&
              pendingLeaveRequests.map((leaveRequest, index) => (
                <Box
                  key={index}
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  p="15px"
                >
                  {/* Render leave request details here */}
                  <Typography
                    className="text-dark fw-bold"
                    variant="h5"
                    fontWeight="600"
                  >
                    {leaveRequest.Id}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    Reason: {leaveRequest.reason}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    Start Date: {formatDate(leaveRequest.startDate)}
                    <br />
                    End Date: {formatDate(leaveRequest.endDate)}
                  </Typography>
                  <Typography
                    className="text-dark fs-5 fw-bold"
                    p="5px 10px"
                    borderRadius="4px"
                  ></Typography>
                </Box>
              ))}
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            className="text-dark"
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Employee Status
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart
              data={[
                { status: "Active", count: activeEmployeeCount },
                { status: "Inactive", count: inactiveEmployeeCount },
              ]}
              xAxisLabel="Leave request Status"
              yAxisLabel="Number of requests"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HrDashboard;
