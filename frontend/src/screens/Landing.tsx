import React from "react";
import resto from "../assets/resto.jpg";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import useDeviceType from "../utils/DeviceType";
import { useNavigate } from "react-router";
import LogRegDialog from "../utils/LogRegDialog";

const Landing = () => {
  const deviceType = useDeviceType();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const myStyle = {
    // backgroundImage: `${resto}`,
    height: "81vh",
    width: "100%",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    // <div style={{ position: "relative" }}>
    //   <img src={resto} style={myStyle} alt="" />
    //   <h1 style={{ position: "absolute", top: "0", left: "45%" }}>
    //     {" "}
    //     geeksforgeeks{" "}
    //   </h1>
    // </div>

    <div style={{ position: "relative", textAlign: "center" }}>
      <img src={resto} style={myStyle} alt="" />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: deviceType === "mobile" ? "20px" : "40px",
            color: "white",
            background: "radial-gradient(black, transparent)",
          }}
        >
          Manage your restaurant on our app in free of cost
        </Typography>
        <Button
          style={{
            marginTop: "20px",
            width: deviceType === "mobile" ? "100%" : "40%",
            height: "48px",
            background: "palevioletred",
            fontWeight: "bold",
            fontSize: "16px",
          }}
          variant="contained"
          onClick={() => {
            setOpen(true);
          }}
        >
          Login/Register
        </Button>
      </div>
      <LogRegDialog
        open={open}
        handleClose={(e: any) => {
          console.log(e);
          setOpen(false);
        }}
      />
    </div>
  );
};

export default Landing;
