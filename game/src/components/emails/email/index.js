import { Flex, Box, Text, Center } from "@chakra-ui/react";

import BrowserCustom from "./browser";
import Questions from "./questions/questions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeLinkType, resetKey, spoofEmail } from "@store/email";
import initializeEmails from "./emailsData/initializeEmails";

import _ from "lodash";
import generateLinks from "./emailsData/generateLinks";

function EmailClient({ onClose }) {
    const dispatch = useDispatch();
    const activeLink = useSelector((state) => state.domain.activeDomain);
    const linkType = useSelector((state) => state.email.linkType);
    const from = useSelector((state) => state.email.from);
    const attacker = useSelector((state) => state.attacker);

    const firstTime = useRef(true);

    const [emails, setEmails] = useState({});

    const [currentEmail, setCurrentEmail] = useState({});
    const key = useSelector((state) => state.email.key);

    useEffect(() => {
        setEmails(initializeEmails(activeLink, attacker));

        return () => {
            dispatch(resetKey());
            dispatch(changeLinkType("normal"));
            dispatch(spoofEmail(""));
            firstTime.current = false;
        };
    }, []);

    useEffect(() => {
        if (key === "") {
            setCurrentEmail({});
        } else {
            if (from.length == 0) dispatch(spoofEmail(emails[key].from));
            setCurrentEmail({ ...emails[key], from, linkType });
        }
    }, [key, from, linkType]);

    useEffect(() => {
        if (_.isEmpty(currentEmail)) return;
        const link = generateLinks(activeLink);
        const body = { ...currentEmail.body, link };

        setCurrentEmail({ ...currentEmail, body });
    }, [activeLink]);

    return (
        <DndProvider backend={HTML5Backend} height="100vh">
            <Box p="20px" background="white" ref={firstTime}>
                {!firstTime.current && <FirstTimeMessage />}
                <Flex direction="row">
                    <Box flex="2">
                        <Questions emails={emails}></Questions>
                    </Box>
                    <Box flex="2" maxWidth={"50vw"}>
                        <BrowserCustom onClose={onClose} email={currentEmail} />
                    </Box>
                </Flex>
            </Box>
        </DndProvider>
    );
}

const FirstTimeMessage = () => {
    return (
        <Center>
            <Box
                p={2}
                maxW="80%"
                border={"2px solid black"}
                rounded={"xl"}
                mb={4}
                background={"green.100"}
                fontWeight={"semibold"}
                fontSize={"1.1em"}
            >
                <Text color="black">
                    {
                        "Woah! New options!! You have finished reviewing the helper. You can now ask the helper to create more directed questions."
                    }
                </Text>
                <Text color={"purple"}>
                    {
                        "Don't see many options? Train your attacker with more skills!!"
                    }
                </Text>
            </Box>
        </Center>
    );
};
export { EmailClient };
