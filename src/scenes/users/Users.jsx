import React, { createContext, useState } from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SafetyCheckOutlinedIcon from "@mui/icons-material/SafetyCheckOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AddUserDialog from "../../components/AddUserDialog";
export const userDialogContext = createContext(false);
const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
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
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "left",
      justifyContent: "flex-start",
      alignItems: "start",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            borderRadius="4px"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.blueAccent[600]
                : colors.blueAccent[500]
            }
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SafetyCheckOutlinedIcon />}
            {access === "user" && <SafetyCheckOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  const handleClickOpen = () => {
    setOpen(true);
    // return <AddUserDialog open={open} />;
  };
  return (
    <Box m="0 40px 0 40px">
      <userDialogContext.Provider value={{ open, setOpen }}>
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
            <PersonAddAltOutlinedIcon sx={{ mr: "10px" }} /> Add User
          </Button>
        </Box>
        <AddUserDialog />
        <Box
          m="40px 0 0 0"
          height="75vh"
          // boxShadow=`10px 10px 5px 12px ${}`
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
              fontSize: "16px",
            },
            "& .name-column--cell": {
              color: colors.blueAccent[400],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[600],
              borderBottom: "none",
              fontSize: "16px",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[600],
              fontSize: "16px",
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
            rows={mockDataTeam}
            columns={columns}
            width="100%"
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </userDialogContext.Provider>
    </Box>
  );
};

export default Users;
