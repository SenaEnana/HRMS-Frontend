import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import TimeToLeaveOutlinedIcon from "@mui/icons-material/TimeToLeaveOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { tokens } from "../../../theme";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';

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
                  className="text-info fst-italic fw-bold"
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
              <Box textAlign="center">
                <Typography
                  className="fst-italic"
                  variant="h3"
                  color={colors.grey[100]}
                  sx={{ m: "8px 0 0 0" }}
                >
                  Welcome back!
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              className=""
              title="My Account"
              to="/myAccount"
              icon={<AccountBoxIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              className=""
              title="Dashboard"
              to="/"
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
              icon={<ExitToAppOutlinedIcon />}
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
            <Typography
              variant="h6"
              className="text-dark fw-bold"
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Posted Jobs"
              to="/postedJob"
              icon={<PostAddOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Evaluation Result"
              to="/evaluationResult"
              icon={<PreviewOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Notifications"
              to="/notifications"
              icon={<NotificationsNoneIcon />}
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
