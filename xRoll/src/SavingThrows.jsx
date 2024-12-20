import React, { useState } from "react";

const SavingThrows = ({ savingThrows }) => {
  const [rollResult, setRollResult] = useState(null);
  const [rolledStat, setRolledStat] = useState(""); 

  const handleRoll = (statName, modifier) => {
    const roll = Math.floor(Math.random() * 20) + 1; 
    const total = roll + modifier; 
    setRollResult({ roll, modifier, total }); 
    setRolledStat(statName);
  };

  return (
    <div>
      <h2>Saving Throws</h2>
      <ul>
        {Object.entries(savingThrows).map(([key, value]) => (
          <li key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
            <button onClick={() => handleRoll(key, value)}>Roll</button>
          </li>
        ))}
      </ul>

      {rollResult && (
        <div>
          <h3>Roll Result</h3>
          <p>
            <strong>{rolledStat.charAt(0).toUpperCase() + rolledStat.slice(1)} Roll:</strong> {rollResult.roll}
          </p>
          <p>
            <strong>Modifier:</strong> {rollResult.modifier >= 0 ? `+${rollResult.modifier}` : rollResult.modifier}
          </p>
          <p>
            <strong>Total:</strong> {rollResult.total}
          </p>
          {rollResult.roll === 20 ? (
            <p style={{ color: "green" }}><strong>Critical Success!</strong></p>
          ) : rollResult.roll === 1 ? (
            <p style={{ color: "red" }}><strong>Critical Failure!</strong></p>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SavingThrows;
