import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
        navigate("/dashboard"); // Or wherever you want to redirect
    }
}, [navigate]);

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <h1>
        Welcome to the Employee Management System!
      </h1>
      <p >
        This project was created for Kennesaw State University's Cloud Software Development class (SWE 4633) by Imani Allen, Alejandro Bhagwandeen, Zeshan Khan, Carter Ray, and Joseph Thompson.
      </p>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
}

export default HomePage;
