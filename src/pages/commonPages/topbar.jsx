import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext, tokens } from "../../theme";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [fetchedData, setFetchedData] = useState(null); 
  const [searchQuery, setSearchQuery] = useState({
    empId: "",
    name: "",
    branch: "",
    department: "",
    email:"",
    position:"",
  });

  const handleChange = (field, value) => {
    setSearchQuery((prevSearchQuery) => ({
      ...prevSearchQuery,
      [field]: value,
    }));
  };

  const fetchData = () => {
    const queryParams = new URLSearchParams(searchQuery).toString();
    fetch(`https://localhost:7140/Employee/Filter?${queryParams}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setFetchedData(json);
        // Handle the fetched data here
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box className="d-flex rounded m-1" backgroundColor={colors.primary[400]}>
        <InputBase
          className="ps-2 fs-6 m-1 text-dark"
          placeholder="Enter Employee ID"
          value={searchQuery.empId}
          onChange={(e) => handleChange("empId", e.target.value)}
        />
        <InputBase
          className="ps-2 fs-6 m-1 text-dark"
          placeholder="Enter Name "
          value={searchQuery.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <InputBase
          className="ps-2 fs-6 m-1 text-dark"
          placeholder="Branch name"
          value={searchQuery.branch}
          onChange={(e) => handleChange("branch", e.target.value)}
        />
        <InputBase
          className="ps-2 fs-6 m-1 text-dark"
          placeholder="Department name"
          value={searchQuery.department}
          onChange={(e) => handleChange("department", e.target.value)}
        />
          <InputBase
          className="ps-2 fs-6 m-1 text-dark"
          placeholder="Position name"
          value={searchQuery.position}
          onChange={(e) => handleChange("position", e.target.value)}
        />
         <InputBase
          className="ps-2 fs-6 m-1 text-dark"
          placeholder="Enter Email"
          value={searchQuery.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <IconButton type="button" className="btn p-1" onClick={fetchData}>
          <SearchIcon className="text-info" />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
