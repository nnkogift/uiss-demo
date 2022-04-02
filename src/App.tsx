import React from 'react';
import {MantineProvider} from "@mantine/core";
import CreateElection from "./modules/admin/components/CreateElection";

function App() {
    return (
        <MantineProvider
            theme={{
                fontFamily: "Ubuntu, sans-serif",
            }}
        >
            <CreateElection/>
        </MantineProvider>
    );
}

export default App;
