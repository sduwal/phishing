import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store/store";

import App from "./pages/App";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
