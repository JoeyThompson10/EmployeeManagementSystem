import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { EmployeeLogin } from "../MongoDbClient";

function LoginPage() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Check if user is already logged in
    useEffect(() => {
        const loggedInUser = localStorage.getItem('username');
        if (loggedInUser) {
            navigate("/dashboard"); // Or wherever you want to redirect
        }
    }, [navigate]);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const EmployeeLoginButtonClicked = (e) => {
        e.preventDefault();
        console.log('Login button clicked');
        EmployeeLoginButtonClickedEndpointCall();
    };

    const forgotPassword = () => {
        console.log('Forgot password');
        forgotPasswordEndpointCall();
    };

    async function EmployeeLoginButtonClickedEndpointCall() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const data = await EmployeeLogin(username, password);

        if (data.loggedIn) {
            alert("Logged in successfully as " + username + "!");
            writeToLocalStorage(username, data.isManager);
            navigate("/dashboard");
        } else {
            alert(JSON.stringify(data));
        }
    };

    function forgotPasswordEndpointCall() {
        // TODO: Check security questions and send reset password link to user email
        window.alert("Password reset link sent!");
    };

    function writeToLocalStorage(_id, isManager) {
        localStorage.setItem('username', _id);
        localStorage.setItem('isManager', isManager);
        window.dispatchEvent(new Event('storageChange')); // Dispatch event after storage change
      };
      
      function logout() {
        localStorage.removeItem('username');
        localStorage.removeItem('isManager');
        window.alert('Logged out successfully!');
        navigate('/login');
        window.dispatchEvent(new Event('storageChange')); // Dispatch event after storage change
      }      

      return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Employee Login</h2>
                            
                            <form onSubmit={EmployeeLoginButtonClicked}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" required value={username} onChange={handleUsernameChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" required value={password} onChange={handlePasswordChange} />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                    <button type="button" className="btn btn-link" onClick={forgotPassword}>Forgot Password?</button>
                                </div>
                            </form>
                            <h3>
                                Employee credentials for testing:
                            </h3>
                            <p>
                                Username: employee
                            </p>
                            <p>
                                Password: employee
                            </p>
                            <hr />
                            <h3>
                                Manager credentials for testing:
                            </h3>
                            <p>
                                Username: manager
                            </p>
                            <p>
                                Password: manager
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;