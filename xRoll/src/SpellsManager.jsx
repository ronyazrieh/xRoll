import React, { useState } from "react";
import SpellCard from "./SpellCard";
import SpellSlotTracker from "./SpellSlotTracker";

const SpellsManager = ({ spells, spellSlots }) => {
  const [slots, setSlots] = useState(spellSlots);

  //function to handle casting a spell
  const castSpell = (spellLevel) => {
    setSlots((prevSlots) => {
      const updatedSlots = { ...prevSlots };

      if (updatedSlots[spellLevel]?.used < updatedSlots[spellLevel]?.max) {
        updatedSlots[spellLevel].used += 1;
      } else {
        alert("No remaining spell slots at this level!");
      }

      return updatedSlots;
    });
  };

  return (
    <div>
      <h2>Spells Manager</h2>

      <div>
        <h3>Spell Slots</h3>
        {Object.entries(slots).map(([level, { max, used }]) => (
          <SpellSlotTracker
            key={level}
            level={level}
            max={max}
            used={used}
            onCast={() => castSpell(level)}
          />
        ))}
      </div>

      <div>
        <h3>Known Spells</h3>
        {spells.map((spell, index) => (
          <SpellCard
            key={index}
            name={spell.name}
            description={spell.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SpellsManager;
