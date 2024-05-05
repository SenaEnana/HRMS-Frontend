import React, { useState } from "react";
import { tokens } from "../theme";
import {Box, useTheme} from "@mui/material";

const RadioButton = ({ title, options, value, onChange }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedValue, setSelectedValue] = useState(value || options[0].value);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    onChange && onChange(event.target.value);
  };

  return (
    <Box
    sx={{
      background: `${colors.blueAccent[900]}`,
    }}
  >
    <div className="col-12 row">
      <div>
        <h4 className="text-dark float-start m-1 p-1 fs-5">{title}</h4>
      </div>
      {options.map((option) => (
        <label key={option.value} className="text-dark p-1 fs-5 ms-3">
          <input
            type="radio"
            className="text-dark fs-5 m-1"
            name={title}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange}
          />
          {option.label}
        </label>
      ))}
    </div>
    </Box>
  );
};

export default RadioButton;
