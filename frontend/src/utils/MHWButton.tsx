import { Button } from "@mui/material";
import React from "react";

interface MHWButtonProps {
  width: string;
  height: string;
  background: string;
  fontWeight: string;
  fontSize: string;
  label: string;
  disable?: boolean;
  handleClick: () => void;
}
const MHWButton = ({
  width = "100%",
  height = "40px",
  background = "palevioletred",
  fontWeight = "bold",
  fontSize = "16px",
  label = "Login/Register",
  disable = false,
  handleClick,
}: MHWButtonProps) => {
  return (
    <Button
      disabled={disable}
      style={{
        width: width,
        height: height,
        background: background,
        fontWeight: fontWeight,
        fontSize: fontSize,
      }}
      variant="contained"
      onClick={() => {
        handleClick();
      }}
    >
      {label}
    </Button>
  );
};

export default MHWButton;
