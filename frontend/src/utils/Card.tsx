import React from "react";
import "./Card.css"; // Import CSS for styling


const Card = ({ imageSrc, heading, subtitle, handleClick,address }: any) => {

  return (
    <div
      className="gold-card"
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <img
        src={imageSrc}
        alt={heading + "-image"}
        className="gold-card-image"
      />
      <div className="gold-card-content">
        <h2 className="gold-card-heading">
          {heading?.length >= 20 ? `${heading?.substring(0, 20)}...` : heading}
        </h2>
        <p className="gold-card-subtitle">Price: {subtitle}</p>
        <p className="gold-card-subtitle">
          {address?.length >= 30 ? `${address.substring(0, 30)}...` : address}
        </p>
        <p>Click here to See More</p>
      </div>
    </div>
  );
};

export default Card;
