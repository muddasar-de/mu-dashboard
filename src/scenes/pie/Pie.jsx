import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
const Pie = () => {
  return (
    <Box m="0 40px 0 40px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
