import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import NavBar from './components/NavBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/user" /> : <GuestPage />} />
        <Route path="/user" element={isLoggedIn ? <UserPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
