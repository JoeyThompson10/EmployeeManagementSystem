import * as RealmWeb from "realm-web";

function app(){
    return new RealmWeb.App({ id: "application-0-qvqcw" });
}

function credentials(){
    const apiKey = getApiKey();
    return RealmWeb.Credentials.apiKey(apiKey);
}

function getApiKey(){
    console.log("GETTING API KEY: ");

    const apiKey = import.meta.env.VITE_REALM_API_KEY;

    console.log("API KEY: " + apiKey);

    if (apiKey) {
        return apiKey;
    } else {
        window.alert("No API key. Set REALM_API_KEY as an env variable.");
        console.log("No API key. Set REALM_API_KEY as an env variable.");
    }
}

async function AddEmployee(email, password){
    const user = await app().logIn(credentials());
    return await user.functions.AddEmployee(email, password);
}

async function EmployeeLogin(email, password){
    const user = await app().logIn(credentials());
    return await user.functions.EmployeeLogIn(email, password);
}

export { AddEmployee, EmployeeLogin };