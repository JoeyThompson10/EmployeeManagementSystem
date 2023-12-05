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

async function DisplayEmployees(){
    const user = await app().logIn(credentials());
    return await user.functions.DisplayEmployees();
}

async function requestTimeOff( username, startDate, endDate, reason ){
    const user = await app().logIn(credentials());
    return await user.functions.requestTimeOff( username, startDate, endDate, reason );
}

async function updateUserProfile(_id, email, firstName, lastName, phoneNumber, address, city, state, zipCode, country, emergencyContactName, emergencyContactPhone, emergencyContactEmail, emergencyContactAddress, emergencyContactCity, emergencyContactState, emergencyContactZipCode, emergencyContactCountry){
    const user = await app().logIn(credentials());
    return await user.functions.updateProfile(
        _id, email, firstName, lastName, phoneNumber, address, city, state, zipCode, country, emergencyContactName, emergencyContactPhone, emergencyContactEmail, emergencyContactAddress, emergencyContactCity, emergencyContactState, emergencyContactZipCode, emergencyContactCountry
    );
}

async function getEmployee(_id){
    const user = await app().logIn(credentials());
    return await user.functions.getEmployee(_id);
}

export { AddEmployee, EmployeeLogin, DisplayEmployees, requestTimeOff, updateUserProfile, getEmployee };