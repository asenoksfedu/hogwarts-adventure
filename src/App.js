import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GreatHall from './rooms/GreatHall';
import Library from './rooms/Library';
import Dungeon from './rooms/Dungeon';
import Forest from './rooms/Forest';
import GryffindorTower from './rooms/GryffindorTower';
import Victory from './components/Victory';
import PotionsClass from './rooms/PotionsClass';
import Owlery from './rooms/Owlery';
import DumbledoreOffice from './rooms/DumbledoreOffice';
import Lake from './rooms/Lake';
import QuidditchField from './rooms/QuidditchField';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/great-hall" element={<GreatHall />} />
        <Route path="/library" element={<Library />} />
        <Route path="/dungeon" element={<Dungeon />} />
        <Route path="/forest" element={<Forest />} />
        <Route path="/tower" element={<GryffindorTower />} />
        <Route path="/victory" element={<Victory />} />
        <Route path="/potions" element={<PotionsClass />} />
        <Route path="/owlery" element={<Owlery />} />
        <Route path="/dumbledore-office" element={<DumbledoreOffice />} />
        <Route path="/lake" element={<Lake />} />
        <Route path="/quidditch" element={<QuidditchField />} />
      </Routes>
    </Router>
  );
}

export default App;
