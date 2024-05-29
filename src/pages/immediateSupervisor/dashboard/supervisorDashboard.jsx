import { Box, Typography, useTheme } from "@mui/material";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import Header from "../../../components/header";
import StatBox from "../../../components/statBox";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import { tokens } from "../../../theme";
import React, { useState, useEffect } from "react";

const SupervisorDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [addressedCompliantCount, setAddressedCompliantCount] =
    useState("Loading...");
  const [addressedRequests, setAddressedRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pendingCompliantCount, setPendingCompliantCount] =
    useState("Loading...");
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  useEffect(() => {
    const fetchAddressedRequests = async () => {
      try {
        const response = await fetch(
          "http://localhost:5100/api/Complaint/AddressedComplaints"
        );
        const data = await response.json();
        setAddressedRequests(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching pending leave requests:", error.message);
        setLoading(false);
      }
    };
    fetchAddressedRequests();
  }, []);
  useEffect(() => {
    const fetchPendingCompliantCount = async () => {
      try {
        const response = await fetch(
          "http://localhost:5100/api/Complaint/PendingComplaintCount"
        );
        const data = await response.json();
        setPendingCompliantCount(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching inactive employee count:", error.message);
        setLoading(false);
      }
    };
    fetchPendingCompliantCount();
  }, []);

  useEffect(() => {
    const fetchAddressedCompliantCount = async () => {
      try {
        const response = await fetch(
          "http://localhost:5100/api/Complaint/AddressedComplaintCount"
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
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Supervisor Dashboard" subtitle="" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          className="rounded"
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {addressedCompliantCount === "Loading..." ? (
            <p>Fetching addressed compliant count...</p>
          ) : (
            <StatBox
              title={addressedCompliantCount.toLocaleString()}
              subtitle="Addressed Compliant"
              icon={<GpsFixedOutlinedIcon className="text-success fs-3" />}
            />
          )}
        </Box>
        <Box
          className="rounded"
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={pendingCompliantCount.toLocaleString()}
            subtitle="Pending Compliant"
            icon={<PendingOutlinedIcon className="text-dark fs-3" />}
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
                Addressed Compliants
              </Typography>
            </Box>

            {!loading &&
              addressedRequests.length > 0 &&
              addressedRequests.map((leaveRequest, index) => (
                <Box
                  key={index}
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  p="15px"
                >
                  <Typography
                    className="text-dark fw-bold"
                    variant="h5"
                    fontWeight="600"
                  >
                    {leaveRequest.Id}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    Employee Name: {leaveRequest.employeeName}
                    <br />
                    Employee Id: {leaveRequest.employeeId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    Date of Event: {formatDate(leaveRequest.dateOfEvent)}
                    <br />
                    Submitted Date: {formatDate(leaveRequest.submittedDate)}
                    <br />
                    Incident: {leaveRequest.incident}
                    <br />
                    Remedy: {leaveRequest.remedy}
                    <br />
                    Status:{leaveRequest.status}
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
      </Box>
    </Box>
  );
};

export default SupervisorDashboard;
