import React from 'react';
import {MantineProvider} from "@mantine/core";
import CreateElection from "./modules/admin/components/CreateElection";
import LoginForm from "./modules/auth/components/LoginForm";

function App() {
    return (
        <MantineProvider
            theme={{
                fontFamily: "Ubuntu, sans-serif",
            }}
        >
            <LoginForm/>
        </MantineProvider>
    );
}

export default App;
