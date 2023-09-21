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

    const attendanceTrackerButton = document.getElementById('attendanceTrackerButton');
    if (attendanceTrackerButton) {
        attendanceTrackerButton.addEventListener('click', function() {
            window.location.href = "attendanceTracker.html";
        });
    }

    const employeePortalButton = document.getElementById('payrollManagementButton');
    if (employeePortalButton) {
        employeePortalButton.addEventListener('click', function() {
            window.location.href = "payrollManagement.html";
        });
    }

    const employeeDirectoryButton = document.getElementById('employeeDirectoryButton');
    if (employeeDirectoryButton) {
        employeeDirectoryButton.addEventListener('click', function() {
            window.location.href = "employeeDirectory.html";
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

function toggleNewUserForm() {
    const newUserForm = document.getElementById('newUserForm');
    newUserForm.style.display = (newUserForm.style.display === "block") ? "none" : "block";
};

function forgotPassword() {
    // TODO: Check security questions and send reset password link to user email
    window.alert("Password reset link sent!");
};