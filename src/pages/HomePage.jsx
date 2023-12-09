import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page container my-5">
      <h1 className="text-center mb-3">Home Page</h1>
      <h1 className="text-center mb-4">
        Welcome to the Employee Management System!
      </h1>
      <p className="text-center lead mb-4">
        This project was created for Kennesaw State University's Cloud Software Development class (SWE 4633) by Imani Allen, Alejandro Bhagwandeen, Zeshan Khan, Carter Ray, and Joseph Thompson.
      </p>
      <div className="d-flex justify-content-center">
        <button onClick={() => navigate("/login")} className="btn btn-primary">Login</button>
      </div>
    </div>
  );
}

export default HomePage;
