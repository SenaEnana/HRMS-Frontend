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
  const [addressedCompliantCount, setAddressedCompliantCount] = useState("Loading...");
  const [addressedRequests, setAddressedRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pendingCompliantCount, setPendingCompliantCount] = useState("Loading...");
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
        const response = await fetch("https://localhost:7140/api/Complaint/AddressedComplaints");
        const data = await response.json();
        setAddressedRequests(data);
        setLoading(false);
        console.log(data)
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
        const response = await fetch("https://localhost:7140/api/Complaint/PendingComplaintCount");
        const data = await response.json();
        setPendingCompliantCount(data);
        console.log(data)
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
        const response = await fetch("https://localhost:7140/api/Complaint/AddressedComplaintCount");
        const data = await response.json();
        setAddressedCompliantCount(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching available employee count:", error.message);
      }
    };
    fetchAddressedCompliantCount();
  }, []);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Suprvisor Dashboard" subtitle="Welcome to your dashboard" />

        <Box>
          <Button className="btn btn-info ps-1 pt-2 fw-bold">
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

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
        {addressedCompliantCount === "Loading..." ? (
          <p>Fetching addressed compliant count...</p>
        ) : (
          <StatBox
            title={addressedCompliantCount.toLocaleString()}
            subtitle="Addressed Compliants"
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
          title={pendingCompliantCount.toLocaleString()}
          subtitle="Pending Compliants"
          icon={<SwipeLeftAltOutlinedIcon className="text-dark fs-3" />}
        />
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
              Addressed Compliants
            </Typography>
          </Box>

          {!loading && addressedRequests.length > 0 && (
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
                  Employee Name: {leaveRequest.employeeName}<br />
                  Employee Id: {leaveRequest.employeeId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  Date of Event: {formatDate(leaveRequest.dateOfEvent)}<br />
                  Submitted Date: {formatDate(leaveRequest.submittedDate)}<br />
                  Incident: {leaveRequest.incident}<br />
                  Remedy: {leaveRequest.remedy}<br />
                  Status:{leaveRequest.status}
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
          Employee compliants
        </Typography>
        <Box height="250px" mt="-20px">
          <BarChart addressedCompliantCount={addressedCompliantCount} pendingCompliantCount={pendingCompliantCount} />
        </Box>
      </Box>
    </Box>
    </Box >
  );
};

export default SupervisorDashboard;
