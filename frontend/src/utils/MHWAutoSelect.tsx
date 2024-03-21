import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface MHWAutoSelectProps {
  dropdownData: any;
  label: string;
  value: any;
  disabled?: boolean;
  handleChange: (data: any) => void;
}

export default function MHWAutoSelect({
  label,
  value,
  dropdownData,
  disabled = false,
  handleChange,
}: MHWAutoSelectProps) {
  return (
    <>
      <Autocomplete
        value={value}
        disabled={disabled}
        fullWidth
        disablePortal
        size="small"
        id="combo-box-demo"
        options={dropdownData}
        onChange={(e, newValue) => {
          handleChange(newValue);
        }}
        //   sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </>
  );
}
