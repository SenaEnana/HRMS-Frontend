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
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("https://localhost:7140/Employee/ListEmployees")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        console.log(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box className="d-flex rounded m-2" backgroundColor={colors.primary[400]}>
        <InputBase
          className="ps-2 fs-6 d-flex text-dark"
          placeholder="type name"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <IconButton type="button" className="btn p-1 text-dark">
          <SearchIcon className="text-info" />
        </IconButton>
      </Box>
      <Box className="d-flex rounded m-2" backgroundColor={colors.primary[400]}>
        <InputBase
          className="ps-2 fs-6 d-flex text-dark"
          placeholder="type department"
        />{" "}
        <IconButton type="button" className="btn p-1 text-dark">
          <SearchIcon className="text-info" />
        </IconButton>
      </Box>
      <Box className="d-flex rounded m-2" backgroundColor={colors.primary[400]}>
        <InputBase
          className="ps-2 fs-6 d-flex text-dark"
          placeholder="type branch"
        />
        <IconButton type="button" className="btn p-1 text-dark">
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
