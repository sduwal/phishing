import { Flex, Box } from "@chakra-ui/react";

import BrowserCustom from "./browser";
import Questions from "./questions/questions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { changeEmail } from "../../store/email";

function main({ onClose }) {
    const dispatch = useDispatch();

    useEffect(() => {
        return dispatch(changeEmail({}));
    });

    return (
        <DndProvider backend={HTML5Backend} height="100vh">
            <Box p="20px" background="white">
                <Flex direction="row">
                    <Box flex="2">
                        <Questions></Questions>
                    </Box>
                    <Box flex="2">
                        <BrowserCustom onClose={onClose} />
                    </Box>
                </Flex>
            </Box>
        </DndProvider>
    );
}

export { main as default };
