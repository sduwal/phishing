import { Box } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Introduction from "./introduction";
import Main from "./main";
import StartGame from "./startGame";

function App() {
    return (
        <Box minW="100vw" minH="100vh" bg="#eee8d5">
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <StartGame />
                    </Route>
                    <Route path="/introduction">
                        <Introduction />
                    </Route>
                    <Route path="/main">
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </Box>
    );
}

export default App;
