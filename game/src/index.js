import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./utils/theme";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
