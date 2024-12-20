import React from "react";

const FeatureCard = ({ name, description }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
