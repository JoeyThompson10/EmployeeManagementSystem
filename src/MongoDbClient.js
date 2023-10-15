import * as RealmWeb from "realm-web";

function app(){
    return new RealmWeb.App({ id: "application-0-qvqcw" });
}

function credentials(){
    const apiKey = import.meta.env.VITE_REALM_API_KEY;

    if (!apiKey) {
        window.alert("No API key. Set REALM_API_KEY as an env variable.");
        console.log("No API key. Set REALM_API_KEY as an env variable.");
    }
    return RealmWeb.Credentials.apiKey(apiKey);
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