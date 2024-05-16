import { Box, Typography } from "@mui/material";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h4" fontWeight="bold" className="text-dark">
            {title}
          </Typography>
        </Box>
        {/* <Box>
          <ProgressCircle progress={progress} />
        </Box> */}
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" className="text-dark">
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          className="text-dark fw-bold"
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
