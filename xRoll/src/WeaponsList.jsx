import React, { useState } from "react";

const WeaponsList = ({ weapons }) => {
  const [rollResult, setRollResult] = useState(null);

  const rollDice = (roll) => {
    const [numDice, sidesPlusModifier] = roll.split("d");
    const [sides, modifier] = sidesPlusModifier.split("+").map(Number);
    let total = 0;

    // Roll each die and sum up
    for (let i = 0; i < numDice; i++) {
      total += Math.floor(Math.random() * sides) + 1;
    }

    return total + (modifier || 0); // Add the modifier if it exists
  };

  const handleRoll = (weapon) => {
    const attackRoll = Math.floor(Math.random() * 20) + 1 + weapon.attackModifier; // d20 + attack modifier
    const damageRoll = rollDice(weapon.damageRoll); // Roll the weapon's damage

    setRollResult({
      weapon: weapon.name,
      attackRoll,
      damageRoll,
    });
  };

  return (
    <div>
      <h2>Weapons</h2>
      {weapons.map((weapon, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p>
            <strong>Name:</strong> {weapon.name}
          </p>
          <p>
            <strong>Attack Modifier:</strong> +{weapon.attackModifier}
          </p>
          <p>
            <strong>Damage Roll:</strong> {weapon.damageRoll}
          </p>
          <p>
            <strong>Damage Type:</strong> {weapon.damageType}
          </p>
          <button
            onClick={() => handleRoll(weapon)}
            style={{
              marginTop: "10px",
              padding: "5px 10px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Roll Attack
          </button>
        </div>
      ))}

      {rollResult && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid black" }}>
          <h3>Roll Results</h3>
          <p>
            <strong>Weapon:</strong> {rollResult.weapon}
          </p>
          <p>
            <strong>Attack Roll:</strong> {rollResult.attackRoll} (d20 + modifier)
          </p>
          <p>
            <strong>Damage Roll:</strong> {rollResult.damageRoll} ({rollResult.damageRoll})
          </p>
        </div>
      )}
    </div>
  );
};

export default WeaponsList;
