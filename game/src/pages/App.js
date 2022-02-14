import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Introduction from "./introduction";
import StartGame from "./startGame";
import Profile from "./profile";
import GameOver from "./gameover";

// import MarketPlace from "./../components/marketplace";

function App() {
    return (
        // <Box w="100vw" h="100vh">
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
                    {/* <MarketPlace /> */}
                </Route>
                <Route path="/gameover">
                    <GameOver />
                </Route>
            </Switch>
        </Router>
        // </Box>
    );
}

export default App;
