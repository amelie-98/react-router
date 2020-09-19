import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

export default function Login() {
    const [user, updateUser] = useState("");
    const history = useHistory();

    function handleLogin(){
        localStorage.setItem("user", user);
        history.push("/app")
    }

    if (localStorage.getItem("user")){
        alert("You're already authenticated in localStorage and being redirected into the app.");
        return <Redirect to={"/app"} />;
    }

    return (
        <div style={{ padding: 50}}>
            <h1>Log in</h1>
            <div>
                <label>User (anything will work)</label>
                <input value={user} onChange={e => upDateUser}>
    )
}
