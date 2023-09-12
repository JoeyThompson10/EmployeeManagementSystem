async function createUserButtonClicked() {
    const params = new URLSearchParams({email: "test", password: "test"});
    const url = 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-qvqcw/endpoint/AddEmployee?'+params.toString();
    const apiKey = 'iOl4vy5hFzAvu9RGuStafQ39vqliO7qXAWsehKIh42IngWS8FZ57nvOjb71jpoJP';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + apiKey,
        },
        params: {
            email: "test",
            password: "test"
        }
    };
    
    fetch(url, options)
    .then(response => response.json())
    .then(data => alert(JSON.stringify(data)))
    .catch(err => console.error(err));
};

document.addEventListener("DOMContentLoaded", function() {
    const testMongoButton = document.getElementById('createUserButton');
    if (testMongoButton) {
        testMongoButton.addEventListener('click', function() {
            createUserButtonClicked();
        });
    }
});
