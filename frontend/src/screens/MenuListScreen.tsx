import React, { useState } from "react";
import noMenu from "../assets/noMenu.jpg";
import { Typography } from "@mui/material";
import MenuDialog from "../utils/MenuDialog";
import MHWButton from "../utils/MHWButton";
import MHWMenuItemTable from "../utils/MHWMenuItemTable";

const MenuListScreen = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div style={{ alignSelf: "end", cursor: "pointer" }}>
          <MHWButton
            background="tomato"
            fontSize=""
            handleClick={() => {
              setOpen(true);
            }}
            fontWeight="bold"
            height=""
            label="Add Menu Items"
            width=""
          />
        </div> */}
        <MHWMenuItemTable />

        {/* <img style={{ width: "40%", height: "40%" }} src={noMenu} alt="" /> */}
      </div>
      <MenuDialog
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
        handleSaveClick={(menus) => {
          console.log("menus :", menus);
        }}
      />
    </>
  );
};

export default MenuListScreen;
