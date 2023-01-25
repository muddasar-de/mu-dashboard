import React, { useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";
import { userDialogContext } from "../scenes/users/Users";
import Header from "./Header";
const AddUserDialog = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { open, setOpen } = useContext(userDialogContext);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{
          "& .MuiPaper-root ": {
            background: `${colors.primary[400]} !important`,
          },
          "& .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DialogTitle id="responsive-dialog-title">
          <Header title="ADD USER" subtitle="Create a new user" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddUserDialog;
