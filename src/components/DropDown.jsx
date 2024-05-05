import React from "react";
import { tokens } from "../theme";
import {Box, useTheme} from "@mui/material";
const DropDown = ({ options, onChange, label, name ,type}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box
    sx={{
      background: `${colors.blueAccent[900]}`,
    }}
  >
    <div className="col-12 row">
      <div>
        <label className="text-dark float-start mt-1 p-1 fs-5" htmlFor="option">
          {label}
        </label>
      </div>
      <div>
        <select
        type={type}
          className="form-control mb-3"
          id="option"
          name={name}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name || option.gradeName}
            </option>
          ))}
        </select>
      </div>
    </div>
    </Box>
  );
};


export default DropDown;
