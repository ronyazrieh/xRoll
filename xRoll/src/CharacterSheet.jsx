import React from "react";
import CharacterHeader from "./CharacterHeader";
import StatsBlock from "./StatsBlock";
import SavingThrows from "./SavingThrows";
import CombatStats from "./CombatStats";
import WeaponsList from "./WeaponsList";
import SpellsManager from "./SpellsManager";
import InventoryManager from "./InventoryManager";
import FeatureTraits from "./FeatureTraits";
import { useLocation } from "react-router-dom";
import './CharacterSheet.css';

const CharacterSheet = () => {
  const { state } = useLocation();
  const { character } = state; //access the character data passed from Home
  console.log("Character Data:", character);
  console.log("Spells Data:", character.spells);
  console.log("Known Spells:", character.spells.known);

  return (
    <div className="cSheet">
      <h1>Character Sheet</h1>
      {/*render child components passing relevant data */}
      <CharacterHeader 
        name={character.characterName} 
        race={character.race} 
        class={character.class} 
        level={character.level}
        background={character.background}
      />
      
      <StatsBlock className="card" abilityScores={character.abilityScores} />
      <SavingThrows savingThrows={character.savingThrows} /> 
      <CombatStats combatStats={character.combatStats} />    
      <WeaponsList weapons={character.weapons} />
      <SpellsManager spells={character.spells.known} spellSlots={character.spells.spellSlots} /> 
      <InventoryManager inventory={character.inventory} />
      <FeatureTraits traits={character.featuresTraits} />

      {/*
     
       */}
    </div>
  );
};

export default CharacterSheet;
