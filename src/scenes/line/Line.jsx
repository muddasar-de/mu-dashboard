import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
const Line = () => {
  return (
    <Box m="0 40px 0 40px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
