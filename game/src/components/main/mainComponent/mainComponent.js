import { Box, Center, VStack, Flex } from "@chakra-ui/react";
import StatusBar from "./StatusBar";
import Domain from "./domain";

import Status from "./Status";

export default function mainComponent(props) {
    return (
        <div className="stats">
            <Status />
        </div>
    );
}
