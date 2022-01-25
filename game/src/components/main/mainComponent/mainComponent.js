import { Box, Center, VStack } from "@chakra-ui/react";
import StatusBar from "./StatusBar";
import Domain from "./domain";
import Timer from "@components/timer";
export default function mainComponent(props) {
    function Top() {
        return (
            <>
                <div className="timer">
                    <Timer />
                </div>
            </>
        );
    }
    return (
        <Box width="85vw" height="100%" p={5}>
            <VStack alignItems={"center"} mb="10">
                <Top />
                <div className="stats">
                    <StatusBar />
                </div>
            </VStack>
            <Center>
                <div className="domain">
                    <Domain />
                </div>
            </Center>
        </Box>
    );
}
