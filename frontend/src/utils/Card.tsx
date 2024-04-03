import React from "react";
import "./Card.css"; // Import CSS for styling

const Card = ({ imageSrc, heading, subtitle, handleClick }: any) => {
  return (
    <div className="card" onClick={handleClick}>
      <img src={imageSrc} alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-heading">{heading}</h2>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
