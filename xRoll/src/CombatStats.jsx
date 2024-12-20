import React, { useState } from "react";

const CombatStats = ({ combatStats }) => {
  const [currentHP, setCurrentHP] = useState(combatStats.hitPoints.current);
  const [temporaryHP, setTemporaryHP] = useState(combatStats.hitPoints.temporary);
  const [initiativeRoll, setInitiativeRoll] = useState(null);

  const handleInitiativeRoll = () => {
    const roll = Math.floor(Math.random() * 20) + 1; // Roll a d20
    const total = roll + combatStats.initiative;
    setInitiativeRoll({ roll, total });
  };

  const adjustHP = (type, adjustment) => {
    if (type === "current") {
      setCurrentHP((prev) => Math.max(0, prev + adjustment));
    } else if (type === "temporary") {
      setTemporaryHP((prev) => Math.max(0, prev + adjustment));
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h2>Combat Stats</h2>
      <p>
        <strong>Armor Class (AC):</strong> {combatStats.armorClass}
      </p>
      <p>
        <strong>Initiative:</strong> {combatStats.initiative}
        <button onClick={handleInitiativeRoll} style={{ marginLeft: "10px" }}>
          Roll Initiative
        </button>
      </p>
      {initiativeRoll && (
        <p>
          <strong>Initiative Roll:</strong> {initiativeRoll.roll} + {combatStats.initiative} ={" "}
          {initiativeRoll.total}
        </p>
      )}
      <p>
        <strong>Speed:</strong> {combatStats.speed} ft.
      </p>
      <p>
        <strong>Proficiency Bonus:</strong> +{combatStats.proficiencyBonus}
      </p>
      <div>
        <h3>Hit Points</h3>
        <p>
          <strong>Max HP:</strong> {combatStats.hitPoints.max}
        </p>
        <p>
          <strong>Current HP:</strong> {currentHP}
          <button onClick={() => adjustHP("current", 1)} style={{ marginLeft: "10px" }}>
            +1
          </button>
          <button onClick={() => adjustHP("current", -1)} style={{ marginLeft: "5px" }}>
            -1
          </button>
        </p>
        <p>
          <strong>Temporary HP:</strong> {temporaryHP}
          <button onClick={() => adjustHP("temporary", 1)} style={{ marginLeft: "10px" }}>
            +1
          </button>
          <button onClick={() => adjustHP("temporary", -1)} style={{ marginLeft: "5px" }}>
            -1
          </button>
        </p>
      </div>
    </div>
  );
};

export default CombatStats;
