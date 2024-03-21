import { Typography } from "@mui/material";
import React from "react";
import MHWButton from "./MHWButton";
import "../utils/card.css";

interface CardProps {
  data: any;
  handleAction: (action: any) => void;
}
const Card = ({ data, handleAction }: CardProps) => {
  return (
    <div
      style={{
        // border: "1px solid red",
        // width: "30%",
        // height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        flexDirection: "column",
        gap: "16px",
        position: "relative", // Add position relative for absolute positioning of pseudo-element
      }}
    >
      <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
        {data?.tableName}
      </Typography>
      <MHWButton
        background=""
        fontSize="16px"
        fontWeight="bold"
        label="View Total"
        height=""
        width="100%"
        handleClick={() => {
          handleAction("viewTotal");
        }}
      />
      <MHWButton
        background="tomato"
        fontSize="16px"
        fontWeight="bold"
        label="Update"
        height=""
        width="100%"
        handleClick={() => {
          handleAction("update");
        }}
      />
      <MHWButton
        background="green"
        fontSize="16px"
        fontWeight="bold"
        label="Mark as Completed"
        height=""
        width="100%"
        handleClick={() => {
          handleAction("completed");
        }}
      />
      <div className="animated-border"></div>{" "}
      {/* Pseudo-element for animated border */}
    </div>
  );
};

export default Card;
