import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="20px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mr: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.blueAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
