import React from "react";
import BarChart from "../../components/BarChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Bar = () => {
  return (
    <Box m="0 40px 0 40px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
