import { VStack, Box, Flex, Spacer } from "@chakra-ui/react";
import { Timer, Sidebar, MainComponent } from "../components/main";

import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function App() {
    const money = useSelector((state) => state.status.money);

    useEffect(() => {
        if (money === 0) {
            // TODO: navigate to game over
            console.log("do something");
        }
    }, [money]);

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
