import { Box, Typography, useTheme } from "@mui/material";
import Button from "react-bootstrap/Button";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import SwipeLeftAltOutlinedIcon from "@mui/icons-material/SwipeLeftAltOutlined";
import Header from "../../../components/header";
import BarChart from "../../../components/barChart";
import StatBox from "../../../components/statBox";
import { tokens } from "../../../theme";
import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [approvedLeaveCount, setApprovedLeaveCount] = useState("Loading...");
  const [rejectedLeaveCount, setRejectedLeaveCount] = useState("Loading...");
  const [activeEmployeeCount, setActiveEmployeeCount] = useState("Loading...");
  const [employeeData, setEmployeeData] = useState([]);
  const [listOfUsers, setListOfUsers] = useState([]);
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
    const fetchListOfUsers = async () => {
      try {
        const response = await fetch("https://localhost:52339/User");
        const data = await response.json();
        setListOfUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pending leave requests:", error.message);
        setLoading(false);
      }
    };

    fetchListOfUsers();
  }, []);
  useEffect(() => {
    const fetchInactiveEmployeeCount = async () => {
      try {
        const response = await fetch(
          "https://localhost:52339/DashBoard/InactiveCount"
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
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch("https://localhost:52339/User/UsersCount");
        const data = await response.json();
        console.log(data);
        setEmployeeData(data);
      } catch (error) {
        console.error("Error fetching employee data:", error.message);
      }
    };
    fetchEmployeeData();
  }, []);

  useEffect(() => {
    const fetchActiveEmployeeCount = async () => {
      try {
        const response = await fetch(
          "https://localhost:52339/DashBoard/ActiveCount"
        );
        const data = await response.json();
        setActiveEmployeeCount(data);
        console.log(data);
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
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Admin Dashboard" subtitle="" />

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
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={activeEmployeeCount.toLocaleString()}
            subtitle="Active Employees"
            icon={<RecommendOutlinedIcon className="text-dark fs-3" />}
          />
        </Box>
        <Box
          className="rounded"
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={inactiveEmployeeCount.toLocaleString()}
            subtitle="InActive Employees"
            icon={<SwipeLeftAltOutlinedIcon className="text-dark fs-3" />}
          />
        </Box>
        <Box
          className="rounded"
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={employeeData.toLocaleString()}
            subtitle="Total users"
            icon={<EventAvailableOutlinedIcon className="text-dark fs-3" />}
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
                List of users
              </Typography>
            </Box>

            {/* Display each leave request in a separate Box */}
            {!loading &&
              listOfUsers.length > 0 &&
              listOfUsers.map((leaveRequest, index) => (
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
                    Name: {leaveRequest.name}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    Role: {leaveRequest.roles}
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

export default AdminDashboard;
/*<Box
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
          <BarChart 
          
          data={[
            { status: "Active", count: activeEmployeeCount },
            { status: "Inactive", count: inactiveEmployeeCount },
          ]}
          xAxisLabel="Leave request Status"
          yAxisLabel="Number of requests" />
          </Box>
        </Box>
        */
