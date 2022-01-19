import { Box } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Introduction from "./introduction";
import StartGame from "./startGame";
import Profile from "./profile";

function App() {
    return (
        <Box w="100vw" h="100vh">
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <StartGame />
                    </Route>
                    <Route path="/introduction">
                        <Introduction />
                    </Route>
                    <Route path="/main">
                        <Profile />
                    </Route>
                </Switch>
            </Router>
        </Box>
    );
}

export default App;
