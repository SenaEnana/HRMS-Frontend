import { Box, Typography, useTheme } from "@mui/material";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import SwipeLeftAltOutlinedIcon from "@mui/icons-material/SwipeLeftAltOutlined";
import Header from "../../../components/header";
import StatBox from "../../../components/statBox";
import { tokens } from "../../../theme";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const EmployeeDashboard = () => {
  const [leaveBalances, setLeaveBalances] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [compliantRequests, setCompliantRequests] = useState([]);
  const [readNotification, setReadNotification] = useState([]);
  const [unReadNotification, setUnReadNotification] = useState([]);
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
    fetchReadNotification();
    fetchUnReadNotification();
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

      const url = `https://localhost:7140/api/Leave/GetMyLeaveBalance?userId=${userId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch leave balance');
      }
      const data = await response.json();
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
      const url = `https://localhost:7140/api/Complaint/MyCompliants?userId=${userId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch complaint requests');
      }
      const data = await response.json();
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
      const url = `https://localhost:7140/api/Leave/MyLeaveRequests?userId=${userId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch leave requests');
      }

      const data = await response.json();
      setLeaveRequests(data);
    } catch (error) {
      console.error("Error fetching leave requests:", error.message);
    }
  }

  async function fetchReadNotification() {
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
      const url = `https://localhost:7140/Notification/GetReadNotificationCount?userId=${userId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch notifications');
      }
      const data = await response.json();
      setReadNotification(data);
    } catch (error) {
      console.error("Error fetching notifications:", error.message);
    }
  }

  async function fetchUnReadNotification() {
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
      const url = `https://localhost:7140/Notification/GetUnreadNotificationCount?userId=${userId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch notifications');
      }
      const data = await response.json();
      setUnReadNotification(data);
    } catch (error) {
      console.error("Error fetching notifications:", error.message);
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
          subtitle=""
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

              subtitle={`${balance.remainingLeaveBalance} days remaining`}
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
            title={readNotification.toLocaleString()}
            subtitle="Read Notifications"
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
          <StatBox
            title={unReadNotification.toLocaleString()}
            subtitle="New Notifications"
            icon={<SwipeLeftAltOutlinedIcon className="text-dark fs-3" />}
          />
        </Box>
        {/* <Box
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
        </Box> */}
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

      </Box>
    </Box>
  );
};

export default EmployeeDashboard;