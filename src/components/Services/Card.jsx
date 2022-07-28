import React from "react";
import "./Card.css";

const Card = ({ icon, title, text }) => {
  return (
    <div className="services-card">
      <div className="services-card-icon">{icon}</div>
      <div className="services-card-title">{title}</div>
      <div className="services-card-text">{text}</div>
    </div>
  );
};

export default Card;
