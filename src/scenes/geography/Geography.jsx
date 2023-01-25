import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
const Geography = () => {
  return (
    <Box m="0 40px 0 40px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
