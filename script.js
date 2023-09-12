const apiKey = 'iOl4vy5hFzAvu9RGuStafQ39vqliO7qXAWsehKIh42IngWS8FZ57nvOjb71jpoJP';

document.addEventListener("DOMContentLoaded", function() {
    const testMongoButton = document.getElementById('employeeCreateUserButton');
    if (testMongoButton) {
        testMongoButton.addEventListener('click', function() {
            EmployeeCreateUserButtonClicked();
        });
    }
    
    const employeeLoginButton = document.getElementById('employeeLoginButton');
    if (employeeLoginButton) {
        employeeLoginButton.addEventListener('click', function() {
            EmployeeLoginButtonClicked();
        });
    }

    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = "login.html";
        });
    }

    const homePageButton = document.getElementById('homePageButton');
    if (homePageButton) {
        homePageButton.addEventListener('click', function() {
            window.location.href = "index.html";
        });
    }
});

async function EmployeeCreateUserButtonClicked() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const params = new URLSearchParams({email: email, password: password});

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-qvqcw/endpoint/AddEmployee?'+params.toString();
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + apiKey,
        }
    };
    
    fetch(url, options)
    .then(response => response.json())
    .then(data => alert(JSON.stringify(data)))
    .catch(err => console.error(err));
};

async function EmployeeLoginButtonClicked() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const params = new URLSearchParams({email: email, password: password});

    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-qvqcw/endpoint/EmployeeLogIn?'+params.toString();
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
            window.location.href = "employeePortal.html";
        } else {
            alert(JSON.stringify(data));
        }
    })
    .catch(err => console.error(err));
};