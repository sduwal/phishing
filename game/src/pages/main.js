/* eslint-disable operator-linebreak */
// import React, { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";

import BrowserCustom from "../components/main/browser";
import Questions from "../components/main/questions";

function main() {
    return (
        <Box p="20px" background="white" height="100vh">
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
