import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        setCharacter(json);
        setError(null);
      } catch (err) {
        setError('Error parsing the JSON file. Please make sure the file is valid.');
        setCharacter(null);
      } 
    };

    reader.onerror = () => {
      setError('Error reading the file. Please try again.');
      setCharacter(null);
    };

    reader.readAsText(file);
  };

  return (
    <div className='home'>
      <h1>Welcome to xRoll</h1>
      <p>Please upload your character's JSON file to get started.</p>

      <input 
        type="file" 
        accept=".json" 
        onChange={handleFileUpload} 
      />

      
      {error && <p style={{ color: 'red' }}>{error}</p>} 

      {/*if the character is successfully loaded, show basic character info */}
      {character && (
        <div className='card'>
          <h2>Character Loaded:</h2>
          <div className='stats'>
          <p><strong>Name:</strong> {character.characterName}</p>
          <p><strong>Race:</strong> {character.race}</p>
          <p><strong>Class:</strong> {character.class}</p>
          <p><strong>Level:</strong> {character.level}</p> 
          </div>
          
          <Link     
          to="/character-sheet"
          state={{ character }}>
            <p>View Character Sheet</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
