import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store/store";
// import Marketplace from "./components/domains";

import App from "./pages/profile";
// import { EmailClient } from "./components/email";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <Provider store={store}>
                {/* <EmailClient /> */}
                <App />
                {/* <Marketplace /> */}
            </Provider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
