import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Button from "react-bootstrap/Button";
import SendIcon from "@mui/icons-material/Send";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
//import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../../../components/header";
import StatBox from "../../../components/statBox";
import { mockTransactions } from "../../../data/mockData";
import { tokens } from "../../../theme";
import ProgressCircle from "../../../components/progressCircle";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const EmployeeDashboard = () => {
  const [leaveBalances, setLeaveBalances] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [compliantRequests, setCompliantRequests] = useState([]);
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  useEffect(() => {
    fetchLeaveBalance();
    fetchLeaveRequests();
    fetchMyCompliant();
  }, []);

  async function fetchLeaveBalance() {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.error('Token not found in session storage');
        navigate('/login');
        return;
      }

      const isValid = isTokenValid(token);
      if (!isValid) {
        console.error('Invalid token');
        navigate('/login');
        return;
      }

      const userId = getUserIdFromToken(token);
      console.log(userId);

      const url = `https://localhost:7140/api/Leave/GetMyLeaveBalance?userId=${userId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch leave balance');
      }

      const data = await response.json();
      console.log(data)
      setLeaveBalances(data);
    } catch (error) {
      console.error("Error fetching leave balance:", error.message);
    }
  }
  async function fetchMyCompliant() {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.error('Token not found in session storage');
        navigate('/login');
        return;
      }

      const isValid = isTokenValid(token);
      if (!isValid) {
        console.error('Invalid token');
        navigate('/login');
        return;
      }

      const userId = getUserIdFromToken(token);
      console.log(userId);

      const url = `https://localhost:7140/api/Complaint/MyCompliants?userId=${userId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch complaint requests');
      }

      const data = await response.json();
      console.log(data)
      setCompliantRequests(data);
    } catch (error) {
      console.error("Error fetching compliant requests:", error.message);
    }
  }
  async function fetchLeaveRequests() {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.error('Token not found in session storage');
        navigate('/login');
        return;
      }

      const isValid = isTokenValid(token);
      if (!isValid) {
        console.error('Invalid token');
        navigate('/login');
        return;
      }

      const userId = getUserIdFromToken(token);
      console.log(userId);

      const url = `https://localhost:7140/api/Leave/MyLeaveRequests?userId=${userId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch leave requests');
      }

      const data = await response.json();
      console.log(data)
      setLeaveRequests(data);
    } catch (error) {
      console.error("Error fetching leave requests:", error.message);
    }
  }

  function isTokenValid(token) {
    if (!token) {
      return false;
    }

    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = Date.now();

      return currentTime < expirationTime;
    } catch (error) {
      console.error('Error decoding or validating token:', error);
      return false;
    }
  }

  function getUserIdFromToken(token) {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  }

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Employee Dashboard"
          subtitle="Welcome to your dashboard"
        />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        {leaveBalances.map((balance, index) => (
          <Box
            key={index}
            className="rounded"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={<>
                {balance.leaveTypeName}<br />
                Allowed Days: {balance.allowedDays}
              </>}

              subtitle={`${balance.remainingLeaveBalance} days remaining`} // Using remainingLeaveBalance
              icon={<EventAvailableOutlinedIcon className="text-dark fs-3" />}
            />
          </Box>
        ))}
        <Box
          className="rounded"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431"
            subtitle="Performance Evaluation Result"
            icon={<EventAvailableOutlinedIcon className="text-dark fs-3" />}
          />
        </Box>
        {/* ROW 2 */}
        <Box
          gridColumn="span 4"
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
              Your Leave Requests
            </Typography>
          </Box>
          {leaveRequests.map((leaveRequest, i) => (
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
                  {leaveRequest.type}
                </Typography>
                <Typography color={colors.grey[100]}>
                Leave Type:{leaveRequest.leaveTypeName}
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
          gridColumn="span 4"
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
              Your Complaints
            </Typography>
          </Box>
          {/* Replace mockTransactions with your complaint data */}
          {compliantRequests.map((complaint, i) => (
            <Box
              key={`${complaint.id}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography className="text-dark fw-bold" variant="h5" fontWeight="600">
                  Incident :{complaint.incident}
                </Typography>
                <Typography color={colors.grey[100]}>
                  Date of Event: {formatDate(complaint.dateOfEvent)}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{complaint.status}</Box>
            </Box>
          ))}
        </Box>


        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography className="text-dark" variant="h5" fontWeight="600">
            Employee Transaction
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
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeDashboard;
