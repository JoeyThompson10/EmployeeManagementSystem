import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/headerfooter.css';

function Header() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const handleStorageChange = () => {
      const storedUsername = localStorage.getItem("username");
      setUsername(storedUsername || '');
    };
  
    window.addEventListener('storageChange', handleStorageChange);
    handleStorageChange();
  
    return () => {
      window.removeEventListener('storageChange', handleStorageChange);
    };
  }, []);
  
  function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('isManager');
    window.alert('Logged out successfully!');
    navigate('/login');
    window.dispatchEvent(new Event('storageChange'));
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 cursor-pointer" onClick={() => navigate("/")} title="Go to Home">
          EmployeeManagementSystem
        </span>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link cursor-pointer" onClick={() => navigate("/employeePortal")} title="View Employee Portal">
                Employee Portal
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link cursor-pointer" onClick={() => navigate("/about")} title="Learn About Us">
                About
              </span>
            </li>
          </ul>
          {username && (
            <div className="d-flex">
              <span className="navbar-text text-white mx-2">
                Hello, {username}
              </span>
              <button className="btn btn-outline-danger" onClick={() => logout()} title="Sign out of your account">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;