import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CharacterSheet from './CharacterSheet';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for your application */}
        <Route path="/" element={<Home />} />
        <Route path="/character-sheet" element={<CharacterSheet />} />
      </Routes>
    </Router>
  );
};

export default App;
