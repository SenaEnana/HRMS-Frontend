import { Box, IconButton, Typography, useTheme } from "@mui/material";
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
import { useState, useEffect } from "react";

const LeaveAdminDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [approvedLeaveCount, setApprovedLeaveCount] = useState("Loading...");
  const [rejectedLeaveCount, setRejectedLeaveCount] = useState("Loading...");
  const [pendingLeaveCount, setPendingLeaveCount] = useState("Loading...");
  const [approvedLeaveRequests, setApprovedLeaveRequests] = useState([]);
  const [allLeaveRequests, setAllLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  useEffect(() => {
    const fetchApprovedLeaveRequests = async () => {
      try {
        const response = await fetch("https://localhost:7140/api/Leave/GetApprovedLeaveRequests");
        const data = await response.json();
        setApprovedLeaveRequests(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pending leave requests:", error.message);
        setLoading(false);
      }
    };

    fetchApprovedLeaveRequests();
  }, []);
  useEffect(() => {
    const fetchAllLeaveRequests = async () => {
      try {
        const response = await fetch("https://localhost:7140/api/Leave/ListOfLeaveRequests");
        const data = await response.json();
        setAllLeaveRequests(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pending leave requests:", error.message);
        setLoading(false);
      }
    };

    fetchAllLeaveRequests();
  }, []);

  useEffect(() => {
    const fetchApprovedLeaveCount = async () => {
      try {
        const response = await fetch("https://localhost:7140/DashBoard/CountApprovedLeaveRequests");
        const data = await response.json();
        setApprovedLeaveCount(data);
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
      } catch (error) {
        console.error("Error fetching rejected leave count:", error.message);
      }
    };
    fetchRejectedLeaveCount();
  }, []);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Admin Dashboard" subtitle="Welcome to your dashboard" />
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
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {pendingLeaveCount === "Loading..." ? (
            <p>Fetching pending leave count...</p>
          ) : (
            <StatBox
              title={pendingLeaveCount.toLocaleString()}
              subtitle="Pending Leave Requests"
              icon={<EventAvailableOutlinedIcon className="text-dark fs-3" />}
            />
          )}

        </Box>
        <Box
          className="rounded"
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {rejectedLeaveCount === "Loading..." ? (
            <p>Fetching rejected leave count...</p>
          ) : (
            <StatBox
              title={rejectedLeaveCount.toLocaleString()}
              subtitle="Rejected Leave Requests"
              icon={<SwipeLeftAltOutlinedIcon className="text-dark fs-3" />}
            />
          )}

        </Box>
        <Box
          className="rounded"
          gridColumn="span 4"
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
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            flexDirection="column" 
          >
            <Box 
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                Approved Leave Requests
              </Typography>
            </Box>

            {/* Display each leave request in a separate Box */}
            {!loading && approvedLeaveRequests.length > 0 && (
              approvedLeaveRequests.map((leaveRequest, index) => (
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
                    Start Date: {formatDate(leaveRequest.startDate)}<br />
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

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          p="30px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              All Leave Requests
            </Typography>
          </Box>
          {allLeaveRequests.map((leaveRequest, i) => (
            <Box
              key={`${leaveRequest.id}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography className="text-dark fw-bold" variant="h5" fontWeight="600">
                  Employee Id: {leaveRequest.employeeId}

                </Typography>
                <Typography color={colors.grey[100]}>
                  Employee Name: {leaveRequest.employeeName}<br />
                  Leave Type:{leaveRequest.leaveTypeName}<br />
                  Allowed Days: {leaveRequest.allowedDays}<br />
                  Remaining Days: {leaveRequest.remainingLeaveBalance}<br />
                </Typography>
                <Typography color={colors.grey[100]}>
                  From: {formatDate(leaveRequest.startDate)} - {formatDate(leaveRequest.endDate)}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{leaveRequest.status}</Box>
            </Box>
          ))}
        </Box>

        {/* ROW 2 */}
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
            { status: "Pending", count: pendingLeaveCount },
            { status: "Approved", count: approvedLeaveCount },
            { status: "Rejected", count: rejectedLeaveCount },
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

export default LeaveAdminDashboard;

