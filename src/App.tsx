import React from 'react';
import {MantineProvider} from "@mantine/core";
import MainRouter from "./modules/router";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBe4pvR4iCVyLQNzTEqaLKoHSBegzHT64M",
    authDomain: "uiss-demo.firebaseapp.com",
    projectId: "uiss-demo",
    storageBucket: "uiss-demo.appspot.com",
    messagingSenderId: "62093310499",
    appId: "1:62093310499:web:0ef2cb9dee5cff76fbcf96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
    return (
        <MantineProvider
            theme={{
                fontFamily: "Ubuntu, sans-serif",
            }}
        >
            <MainRouter/>
        </MantineProvider>
    );
}

export default App;
