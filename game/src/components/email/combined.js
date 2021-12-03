import { Flex, Box } from "@chakra-ui/react";

import BrowserCustom from "./browser";
import Questions from "./questions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// import getRandomEmails from "../model/emailData";

function main() {
    return (
        <DndProvider backend={HTML5Backend}>
            {/* Here, render a component that uses DND inside it */}
            <Box p="20px" background="white" height="100vh">
                {/* {JSON.stringify(getRandomEmails())} */}
                <Flex direction="row">
                    <Box flex="2">
                        <Questions></Questions>
                    </Box>
                    <Box flex="2">
                        <BrowserCustom></BrowserCustom>
                    </Box>
                </Flex>
            </Box>
        </DndProvider>
    );
}

export { main as default };
