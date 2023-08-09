import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/DashBoard';
import BondDetails from './components/BondDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bond" element={<BondDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
