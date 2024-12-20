import React from "react";

const CharacterHeader = ({ name, race, class: charClass, level, background }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        <strong>Race:</strong> {race}
      </p>
      <p>
        <strong>Class:</strong> {charClass}
      </p>
      <p>
        <strong>Level:</strong> {level}
      </p>
      <p>
        <strong>Background:</strong> {background}
      </p>
    </div>
  );
};

export default CharacterHeader;
