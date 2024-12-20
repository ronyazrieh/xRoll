import React from "react";

const ItemCard = ({ name, description, quantity, type }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
      <h3>{name}</h3>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Quantity:</strong> {quantity}</p>
      <p><strong>Type:</strong> {type}</p>
    </div>
  );
};

export default ItemCard;
