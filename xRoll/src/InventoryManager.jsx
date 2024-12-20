import React from "react";
import ItemCard from "./ItemCard";

const InventoryManager = ({ inventory }) => {
  return (
    <div>
      <h2>Inventory Manager</h2>
      <div>
        {inventory.map((item, index) => (
          <ItemCard
            key={index}
            name={item.name}
            description={item.description}
            quantity={item.quantity}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default InventoryManager;
