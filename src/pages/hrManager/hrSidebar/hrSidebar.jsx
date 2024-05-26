import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DropdownMenu from "../../../components/dropdownMenu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { tokens } from "../../../theme";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";

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

const HrSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();

  const items = [
    {
      label: "Add New Employee",
      value: "addNewEmployee",
      onClick: () => navigate("/employeeBasic"),
    },
    {
      label: "Employee List",
      value: "employeeList",
      onClick: () => navigate("/employeeList"),
    },
  ];

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
              title="My Profile"
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
              Data
            </Typography>

            <DropdownMenu
              label="Manage Employee"
              items={items}
              icon={<PeopleOutlinedIcon />}
              to="/employeeBasic"
            />
            <Item
              title="Post Job"
              to="/postJob"
              icon={<LocalPostOfficeOutlinedIcon />}
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
              title="Posted Job List"
              to="/postedJob"
              icon={<ChecklistRtlOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Branch List"
              to="/branchList"
              icon={<ChecklistRtlOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Grade List"
              to="/gradeList"
              icon={<ChecklistRtlOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Position List"
              to="/positionList"
              icon={<ChecklistRtlOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Department List"
              to="/departmentList"
              icon={<ChecklistRtlOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Degree List"
              to="/degreeList"
              icon={<ChecklistRtlOutlinedIcon />}
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
            <Typography
              variant="h6"
              className="text-dark fw-bold"
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default HrSidebar;
