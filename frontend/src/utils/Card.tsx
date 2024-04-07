import React from "react";
import "./Card.css"; // Import CSS for styling
import useDeviceType from "./DeviceType";


const Card = ({ imageSrc, heading, subtitle, handleClick,address }: any) => {
  const deviceType = useDeviceType();
  return (
    <div
      className="gold-card"
      style={{
        cursor: "pointer",
        width: deviceType === "mobile" ? "initial" : "300px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "transform 0.3s ease",
        margin: deviceType === "mobile" ? "8px" : "20px",
      }}
      onClick={handleClick}
    >
      <img
        src={imageSrc}
        alt={heading + "-image"}
        className="gold-card-image"
        style={{
          width: "100%",
          height: deviceType === "mobile" ? "110px" : "200px",
          objectFit: "fill",
        }}
      />
      <div className="gold-card-content">
        <h2
          className="gold-card-heading"
          style={{
            margin: "0",
            fontSize: deviceType === "mobile" ? "20px" : "24px",
            color: "#333",
          }}
        >
          {heading?.length >= 20 ? `${heading?.substring(0, 20)}...` : heading}
        </h2>
        <p
          className="gold-card-subtitle"
          style={{ marginTop: "5px", marginBottom:'5px', fontSize: "16px" }}
        >
          Price: {subtitle}
        </p>
        {deviceType !== "mobile" && (
          <p className="gold-card-subtitle">
            {address?.length >= 30 ? `${address.substring(0, 30)}...` : address}
          </p>
        )}
        {deviceType === "mobile" && (
          <p
            className="gold-card-subtitle"
            style={{ marginTop: "0px", marginBottom:'0px', fontSize: "16px" }}
          >
            {address?.length >= 12 ? `${address.substring(0, 12)}...` : address}
          </p>
        )}
        {deviceType !== "mobile" && <p>Click here to See More</p>}
      </div>
    </div>
  );
};

export default Card;
