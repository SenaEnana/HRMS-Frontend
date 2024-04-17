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

const EmployeeDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
        <Box
          className="rounded"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1200 days"
            subtitle="Available leave balance"
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
