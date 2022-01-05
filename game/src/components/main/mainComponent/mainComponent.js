import { Box, Center } from "@chakra-ui/react";

import StatusBar from "./StatusBar";
import Domain from "./domain";

export default function mainComponent(props) {
    return (
        <Box width="85vw" height="100%" p={5}>
            <Center mb="10">
                <StatusBar />
            </Center>
            <Center>
                <Domain />
            </Center>
        </Box>
    );
}
