import React from 'react';
import {MantineProvider} from "@mantine/core";
import CreateElection from "./modules/admin/components/CreateElection";
import LoginForm from "./modules/auth/components/LoginForm";
import ElectionList from "./modules/shared/lists/ElectionList";
import ElectionPage from "./modules/shared/pages/ElectionPage";

function App() {
    return (
        <MantineProvider
            theme={{
                fontFamily: "Ubuntu, sans-serif",
            }}
        >
            <ElectionPage/>
        </MantineProvider>
    );
}

export default App;
