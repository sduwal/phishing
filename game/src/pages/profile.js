import { Box, Flex } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

import { Sidebar, MainComponent } from "../components/main";

export default function App() {
    return (
        <>
            <ToastContainer limit={3} />

            <Flex background={"#fdf6e3"}>
                <Box flex="1" h="100vh">
                    <MainComponent />
                </Box>
                <Sidebar />
            </Flex>
        </>
    );
}
