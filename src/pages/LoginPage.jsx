import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { EmployeeLogin } from "../MongoDbClient";

function LoginPage() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        const data = await EmployeeLogin(email, password);

        if (data.loggedIn) {
            alert("Logged in successfully as " + email + "!");
            writeToLocalStorage(data._id, data.isManager);
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
    };

    return (
        <form onSubmit={EmployeeLoginButtonClicked}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" required value={username} onChange={handleUsernameChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit">Login</button>
            <button type="button" onClick={forgotPassword}>Forgot Password</button>
        </form>
    );
};

export default LoginPage;