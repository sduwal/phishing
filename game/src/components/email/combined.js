import { Flex, Box } from "@chakra-ui/react";

import BrowserCustom from "./browser";
import Questions from "./questions";
// import getRandomEmails from "../model/emailData";

function main() {
    return (
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
    );
}

export { main as default };
