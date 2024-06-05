// pages/signup.js

import React, { useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Signup = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const handleSignup = async () => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        router.push("/home");
    } 
    catch (error) {
        console.error(error.message);
    }
};

return (
    <div>
        <h1>Signup</h1>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Signup</button>
    </div>
    );
};

export default Signup;

