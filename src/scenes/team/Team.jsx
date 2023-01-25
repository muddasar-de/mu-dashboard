import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "ZIP-Code", flex: 1 },
  ];
  return (
    <Box m="0 40px 0 40px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Users" subtitle="Managing the XyCAD Users" />
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <PersonAddAltOutlinedIcon sx={{ mr: "10px" }} /> Add Team Member
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            fontSize: "16px",
            border: "none !important",
          },
          "& .name-column--cell": {
            color: colors.blueAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[500],
            borderBottom: "none",
            fontSize: "16px",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[500],
            fontSize: "16px",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.grey[300]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer": {
            color: `${colors.grey[100]} !important`,
            justifyContent: "center",
            alignItems: "end",
            gap: "1.2rem",
            marginBottom: "0.2rem",
          },
          "& .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
            justifyContent: "center",
            alignItems: "flex-end",
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          width="100%"
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Team;
