import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/headerfooter.css';

function Header() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const handleStorageChange = () => {
      // Fetch the new username from local storage
      const storedUsername = localStorage.getItem("username");
      setUsername(storedUsername || ''); // Update or clear username
    };
  
    // Add event listener
    window.addEventListener('storageChange', handleStorageChange);
  
    // Call the function initially to set the correct username
    handleStorageChange();
  
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('storageChange', handleStorageChange);
    };
  }, []);
  
  function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('isManager');
    window.alert('Logged out successfully!');
    navigate('/login');
    window.dispatchEvent(new Event('storageChange')); // Dispatch event after storage change
}


  return (
    <header className="header">
      <div className="brand" onClick={() => navigate("/")}>
        EmployeeManagementSystem
      </div>
      <nav className="navigation">
        <button onClick={() => navigate("/employeePortal")}>Employee Portal</button>
        <button onClick={() => navigate("/about")}>About</button>
        {username && (
          <>
            <span className="username-display">Hello, {username}</span>
            <button onClick={() => logout()}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
