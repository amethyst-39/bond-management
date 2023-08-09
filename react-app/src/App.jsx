import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/DashBoard';
import BondDetails from './components/BondDetails';
import DeleteSecurity from './components/DeleteSecurity';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bond" element={<BondDetails />} />
        <Route path="/delete-security" element={<DeleteSecurity />} />
      </Routes>
    </Router>
  );
}

export default App;