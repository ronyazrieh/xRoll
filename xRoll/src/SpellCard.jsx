import React from "react";

const SpellCard = ({ name, description, slotsUsed, onCast }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <h4>{name}</h4>
      <p>{description}</p>

    </div>
  );
};

export default SpellCard;
