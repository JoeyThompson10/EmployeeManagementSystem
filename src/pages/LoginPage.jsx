import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const apiKey = 'iOl4vy5hFzAvu9RGuStafQ39vqliO7qXAWsehKIh42IngWS8FZ57nvOjb71jpoJP';


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
        const params = new URLSearchParams({ email: email, password: password });

        const url = 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-qvqcw/endpoint/EmployeeLogIn?' + params.toString();
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + apiKey,
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.loggedIn) {
                    alert(JSON.stringify(data));
                    navigate("/employeePortal");
                } else {
                    alert(JSON.stringify(data));
                }
            })
            .catch(err => console.error(err));
    };

    function forgotPasswordEndpointCall() {
        // TODO: Check security questions and send reset password link to user email
        window.alert("Password reset link sent!");
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