import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Button from "react-bootstrap/Button";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import SendIcon from "@mui/icons-material/Send";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import SwipeLeftAltOutlinedIcon from "@mui/icons-material/SwipeLeftAltOutlined";
import Header from "../../../components/header";
import LineChart from "../../../components/lineChart";
import BarChart from "../../../components/barChart";
import StatBox from "../../../components/statBox";
import ProgressCircle from "../../../components/progressCircle";
import { tokens } from "../../../theme";
import React, { useState, useEffect } from "react";

const SupervisorDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [approvedLeaveCount, setApprovedLeaveCount] = useState("Loading...");
  const [rejectedLeaveCount, setRejectedLeaveCount] = useState("Loading...");
  const [activeEmployeeCount, setActiveEmployeeCount] = useState("Loading...");
  const [employeeData, setEmployeeData] = useState([]);
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
        const response = await fetch("https://localhost:7140/api/Leave/GetPendingLeaveRequests");
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
        const response = await fetch("https://localhost:7140/DashBoard/InactiveCount");
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
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch("https://localhost:7140/DashBoard/TotalEmployeesPerBranch");
        const data = await response.json();
        console.log(data)
        setEmployeeData(data);
      } catch (error) {
        console.error("Error fetching employee data:", error.message);
      }
    };
    fetchEmployeeData();
  }, []);

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
  useEffect(() => {
    const fetchActiveEmployeeCount = async () => {
      try {
        const response = await fetch("https://localhost:7140/DashBoard/ActiveCount");
        const data = await response.json();
        setActiveEmployeeCount(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching available employee count:", error.message);
      }
    };
    fetchActiveEmployeeCount();
  }, []);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Admin Dashboard" subtitle="Welcome to your dashboard" />

        <Box>
          <Button className="btn btn-info ps-1 pt-2 fw-bold">
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          className="rounded"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Send Leave Request"
            progress="0.75"
            increase="+14%"
            icon={<SendIcon className="text-dark fs-3" />}
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
            title="431,225"
            subtitle="Send Resignation Request"
            progress="0.50"
            increase="+21%"
            icon={<SendIcon className="text-dark fs-3" />}
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
            title={activeEmployeeCount.toLocaleString()}
            subtitle="Active Employees"
            icon={<EventAvailableOutlinedIcon className="text-dark fs-3" />}
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
          {approvedLeaveCount === "Loading..." ? (
            <p>Fetching approved leave count...</p>
          ) : (
            <StatBox
              title={approvedLeaveCount.toLocaleString()}
              subtitle="Approved Leave Requests"
              icon={<RecommendOutlinedIcon className="text-dark fs-3" />}
            />
          )}

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
            icon={<SwipeLeftAltOutlinedIcon className="text-dark fs-3" />}
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
            title="1,325,134"
            subtitle="Approved Resignation Request"
            progress="0.80"
            increase="+43%"
            icon={<RecommendOutlinedIcon className="text-dark fs-3" />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Rejected Resignation Request"
            progress="0.80"
            increase="+43%"
            icon={<SwipeLeftAltOutlinedIcon className="text-dark fs-3" />}
          />
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Total Employees Per Branch
              </Typography>
              <Typography
                className="text-dark fw-bold"
                variant="h3"
                fontWeight="bold"
              >

              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon className="text-dark fs-3" />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart employeeData={employeeData} isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            flexDirection="column" // Ensure each leave request is displayed vertically
          >
            <Box // This Box contains the header for the pending leave requests section
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                Pending Leave Requests
              </Typography>
            </Box>

            {/* Display each leave request in a separate Box */}
            {!loading && pendingLeaveRequests.length > 0 && (
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
                    Start Date: {formatDate(leaveRequest.startDate)}<br/>
                    End Date: {formatDate(leaveRequest.endDate)}
                  </Typography>
                  <Typography
                    className="text-dark fs-5 fw-bold"
                    p="5px 10px"
                    borderRadius="4px"
                  >
                    
                  </Typography>
                </Box>
              ))
            )}
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" className="text-dark">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography variant="h5" className="text-dark" sx={{ mt: "15px" }}>
              $48,352 revenue generated
            </Typography>
            <Typography className="text-dark">
              Includes extra misc expenditures and costs
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
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
          <BarChart activeEmployeeCount={activeEmployeeCount} inactiveEmployeeCount={inactiveEmployeeCount} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SupervisorDashboard;