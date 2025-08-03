import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/user');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid black' }}>
      <button onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
}

export default NavBar;
