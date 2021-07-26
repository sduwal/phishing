import { Box } from "@chakra-ui/react";
import "../css/App.css";
import EmailScreen from "../screens/AttackerEmail";

function App() {
    return (
        <Box
            className="App"
            width="100%"
            background="green.100"
            textAlign="start"
            height="100vh"
        >
            <EmailScreen />
        </Box>
    );
}

export default App;
