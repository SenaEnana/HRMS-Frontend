import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Button from "react-bootstrap/Button";
import { mockTransactions } from "../../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import SendIcon from "@mui/icons-material/Send";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";
import SwipeLeftAltOutlinedIcon from "@mui/icons-material/SwipeLeftAltOutlined";
import Header from "../../../components/header";
//import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LineChart from "../../../components/lineChart";
import BarChart from "../../../components/barChart";
import StatBox from "../../../components/statBox";
import ProgressCircle from "../../../components/progressCircle";
import { tokens } from "../../../theme";

const HrDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
            title="32,441"
            subtitle="Available Employees"
            progress="0.30"
            increase="+5%"
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
            title="1,325,134"
            subtitle="Approved Leave Request"
            progress="0.80"
            increase="+43%"
            icon={<RecommendOutlinedIcon className="text-dark fs-3" />}
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
            subtitle="Rejected Leave Request"
            progress="0.80"
            increase="+43%"
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
        {/* ROW 2 */}
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
            subtitle="Rejected Resignation Request"
            progress="0.80"
            increase="+43%"
            icon={<SwipeLeftAltOutlinedIcon className="text-dark fs-3" />}
          />
        </Box>
        <Box
          className="rounded"
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
                Employee Information Generated
              </Typography>
              <Typography
                className="text-dark fw-bold"
                variant="h3"
                fontWeight="bold"
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon className="text-dark fs-3" />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
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
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  className="text-dark fw-bold"
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                className="text-dark fs-5 fw-bold"
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
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
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HrDashboard;
