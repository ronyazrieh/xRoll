import React, { useState } from "react";

const AbilityScore = ({ statName, score }) => {
  const [rollResult, setRollResult] = useState(null);

  const calculateModifier = (score) => Math.floor((score - 10) / 2);

  const handleRoll = () => {
    const modifier = calculateModifier(score);
    const roll = Math.floor(Math.random() * 20) + 1; // d20 roll
    const total = roll + modifier;
    setRollResult({ roll, modifier, total });
  };

  return (
    <div style={{ margin: "10px", border: "1px solid black", padding: "10px" }}>
      <h3>{statName.charAt(0).toUpperCase() + statName.slice(1)}</h3>
      <p>Score: {score}</p>
      <p>Modifier: {calculateModifier(score)}</p>
      <button onClick={handleRoll}>Roll</button>
      {rollResult && (
        <div>
          <p>Roll: {rollResult.roll}</p>
          <p>Modifier: {rollResult.modifier}</p>
          <p>Total: {rollResult.total}</p>
        </div>
      )}
    </div>
  );
};

export default AbilityScore;
