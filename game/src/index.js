import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store/store";
import Marketplace from "./components/domains";
// import theme from "./utils/theme";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <Provider store={store}>
                {/* <App /> */}
                <Marketplace />
            </Provider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
