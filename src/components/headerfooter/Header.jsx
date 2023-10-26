import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/headerfooter.css';

function Header() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('isManager');
    window.alert('Logged out successfully!');
    navigate('/login');
  }

  return (
    <header className="header">
      <div className="brand" onClick={() => navigate("/")}>
        EmployeeManagementSystem
      </div>
      <nav className="navigation">
        <button onClick={() => navigate("/employeePortal")}>Employee Portal</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => logout()}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;
