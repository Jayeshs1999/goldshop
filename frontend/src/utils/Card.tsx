import React from "react";
import "./Card.css"; // Import CSS for styling

const Card = ({ imageSrc, heading, subtitle, handleClick }: any) => {
  return (
    <div className="gold-card" onClick={handleClick}>
      <img src={imageSrc} alt="Card" className="gold-card-image" />
      <div className="gold-card-content">
        <h2 className="gold-card-heading">{heading}</h2>
        <p className="gold-card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
