import React from "react";
import { TextField } from "@mui/material";

interface MHWTextFieldProps {
  size: "small" | "medium";
  label: string;
  placeHolder: string;
  value: any;
  disabled?: boolean;
  type: any;

  handleChange: (e: any) => void;
}
const MHWTextField = ({
  value,
  type = "text",
  size = "small",
  label = "Label",
  placeHolder = "Placeholder",
  disabled = false,
  handleChange,
}: MHWTextFieldProps) => {
  return (
    <div>
      <TextField
        type={type}
        value={value}
        size={size}
        label={label}
        disabled={disabled}
        fullWidth
        // placeholder={placeHolder}
        onChange={handleChange}
      />
    </div>
  );
};

export default MHWTextField;
