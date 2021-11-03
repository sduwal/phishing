import { VStack, Box, Flex, Spacer } from "@chakra-ui/react";
import { Timer, Sidebar, MainComponent } from "../components/main";

export default function App() {
    function Top() {
        return (
            <>
                <Timer />
            </>
        );
    }

    return (
        <Box h="100vh" bg="#eee8d5" overflow="hidden" py={"5"} px={0}>
            <VStack>
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
