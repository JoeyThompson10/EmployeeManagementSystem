import * as RealmWeb from "realm-web";

function app(){
    return new RealmWeb.App({ id: "application-0-qvqcw" });
}

function credentials(){
    const apiKey =
      "EX08de60FItB9TdwhZkAf4k1Q5YqfXVFYsiValRYiHKiSYf2rilVcMbBdllDmpqY";
    return RealmWeb.Credentials.apiKey(apiKey);
}

async function AddEmployee(email, password){
    const user = await app().logIn(credentials());
    return await user.functions.AddEmployee(email, password);
}

async function EmployeeLogin(email, password){
    const user = await app().logIn(credentials());
    return await user.functions.EmployeeLogin(email, password);
}

export { AddEmployee, EmployeeLogin };