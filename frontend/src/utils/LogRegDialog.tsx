import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import MHWTextField from "./MHWTextField";
import MHWButton from "./MHWButton";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../assets/google.svg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface LogRegDialogProps {
  open: boolean;
  handleClose: (e: any) => void;
}

export default function LogRegDialog({
  open = false,
  handleClose,
}: LogRegDialogProps) {
  const navigate = useNavigate();
  const [loginScreen, setLoginScreen] = React.useState(true);
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Login/Register
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {loginScreen ? (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <MHWTextField
                type={"text"}
                value={""}
                label="Email"
                placeHolder="Enter your email"
                size="small"
                handleChange={() => {}}
              />
              <MHWTextField
                value={""}
                type={"password"}
                label="Password"
                placeHolder="Enter your password"
                size="small"
                handleChange={() => {}}
              />
              <MHWButton
                background="red"
                fontSize="16px"
                fontWeight="bold"
                handleClick={() => {
                  navigate("/home");
                }}
                height="40px"
                width="100%"
                label="Login"
              />
              <Typography style={{ textAlign: "end" }}>
                Don't have account?{" "}
                <Link
                  to={""}
                  onClick={() => {
                    setLoginScreen(false);
                  }}
                >
                  Sign Up
                </Link>{" "}
                <strong>Or</strong> <Link to={""}>Forgot Password</Link>
              </Typography>
            </div>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <MHWTextField
                  type={"text"}
                  value={""}
                  label="Email"
                  placeHolder="Enter your email"
                  size="small"
                  handleChange={() => {}}
                />
                <MHWTextField
                  type={"text"}
                  value={""}
                  label="Name"
                  placeHolder="Enter your name"
                  size="small"
                  handleChange={() => {}}
                />
                <MHWTextField
                  value={""}
                  type={"password"}
                  label="Password"
                  placeHolder="Enter your password"
                  size="small"
                  handleChange={() => {}}
                />
                <MHWTextField
                  value={""}
                  type={"password"}
                  label="Confirm Password"
                  placeHolder="Enter your password"
                  size="small"
                  handleChange={() => {}}
                />
                <MHWButton
                  background="red"
                  fontSize="16px"
                  fontWeight="bold"
                  handleClick={() => {}}
                  height="40px"
                  width="100%"
                  label="Register"
                />

                <Link
                  style={{ textAlign: "end" }}
                  to={""}
                  onClick={() => {
                    setLoginScreen(true);
                  }}
                >
                  Back to login
                </Link>
              </div>
            </>
          )}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div>
              <strong>OR</strong>
            </div>
            <img style={{ cursor: "pointer" }} src={googleLogo} alt="" />
          </div>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </React.Fragment>
  );
}
