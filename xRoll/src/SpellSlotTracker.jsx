import React from "react";

const SpellSlotTracker = ({ level, max, used, onCast }) => {
  return (
    <div style={{ margin: "10px 0" }}>
      <strong>{level.toUpperCase()}</strong>: Used {used} / Max {max}
      <button onClick={onCast} disabled={used >= max}>
        Cast
      </button>
    </div>
  );
};

export default SpellSlotTracker;
