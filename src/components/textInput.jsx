import { tokens } from "../theme";
import {Box, useTheme} from "@mui/material";

function TextInput({ value, type, name, label, onChange, error, placeholder }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="col-12 row">
      <div>
        <label className="text-dark float-start m-1 p-1 fs-5">{label}</label>
      </div>
      <div className="form-group">
        <input
          type={type}
          className="form-control text-dark fw-lighter fs-6 m-1"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
      {<p className="text-danger text-start m-1">{error}</p>}
    </div>
  );
}

export default TextInput;
