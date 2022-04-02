import React from 'react';
import {MantineProvider} from "@mantine/core";
import MainRouter from "./modules/router";

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
