import React from "react";
import AbilityScore from "./AbilityScore";

const StatsBlock = ({ abilityScores }) => {
  return (
    <div>
      <h2>Stats</h2>
      {Object.entries(abilityScores).map(([key, value]) => (
        <AbilityScore key={key} statName={key} score={value} />
      ))}
    </div>
  );
};

export default StatsBlock;
