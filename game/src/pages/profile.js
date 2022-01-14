import { VStack, Box, Flex, Spacer } from "@chakra-ui/react";
import { Timer, Sidebar, MainComponent } from "../components/main";

import { ToastContainer } from "react-toastify";

export default function App() {
    function Top() {
        return (
            <>
                <Timer />
            </>
        );
    }

    return (
        <Box
            h="100vh"
            bg="#eee8d5"
            overflowY="auto"
            py={"5"}
            px={0}
            width={"100vw"}
            overflowX={"hidden"}
        >
            <VStack>
                <ToastContainer />
                <Top />
                <Flex>
                    <MainComponent />
                    <Spacer />
                    <Sidebar />
                </Flex>
            </VStack>
        </Box>
    );
}
