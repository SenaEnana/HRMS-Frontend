import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import TimeToLeaveOutlinedIcon from "@mui/icons-material/TimeToLeaveOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { tokens } from "../../../theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography className="text-dark">{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const EmployeeSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography
                  variant="h3"
                  className="text-dark fst-italic fw-bold"
                >
                  AKUFADA
                </Typography>
                <IconButton
                  className="text-dark"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  // src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  User Name
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              className=""
              title="Dashboard"
              to="/employeeDashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              className="text-dark fw-bold"
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Send Leave Request"
              to="/leaveRequest"
              icon={<TimeToLeaveOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Send Resignation Request"
              to="/resignationRequest"
              icon={<TimeToLeaveOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Send Complaint"
              to="/complaint"
              icon={<AddCommentOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Apply For Job"
              to="/applyForJob"
              icon={<AddCommentOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              className="text-dark fw-bold"
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Supervisor Feedback"
              to="/supervisorFeedback"
              icon={<FeedbackOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Posted Jobs"
              to="/postedJob"
              icon={<FeedbackOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Employee Calendar"
              to="/employeeCalendar"
              icon={<FeedbackOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default EmployeeSidebar;
