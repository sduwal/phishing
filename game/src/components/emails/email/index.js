import { Flex, Box, Text, Center } from "@chakra-ui/react";

import BrowserCustom from "./browser";
import Questions from "./questions/questions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeLinkType, resetKey, spoofEmail } from "@store/email";
import initializeEmails from "./emailsData/initializeEmails";

import _ from "lodash";
import generateLinks from "./emailsData/generateLinks";
import { toggleCanSend } from "../../../store/email";
// import { EmailSendContext } from "./EmailSendContext";

function EmailClient({ onClose }) {
    const dispatch = useDispatch();
    const activeLink = useSelector((state) => state.domain.activeDomain);
    const linkType = useSelector((state) => state.email.linkType);
    const from = useSelector((state) => state.email.from);
    const attacker = useSelector((state) => state.attacker);

    const sentNumber = useSelector((state) => state.email.sentNumber);

    const emails = useMemo(
        () => initializeEmails(activeLink, attacker),
        [sentNumber]
    );

    const [currentEmail, setCurrentEmail] = useState({});
    const key = useSelector((state) => state.email.key);

    useEffect(() => {
        return () => {
            dispatch(resetKey());
            dispatch(changeLinkType("normal"));
            dispatch(spoofEmail(""));
            dispatch(toggleCanSend(false));
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
            {/* <EmailSendContext.Provider value={true}> */}
            <Box p="20px" background="white">
                <FirstTimeMessage />
                <Flex direction="row">
                    <Box flex="2">
                        <Questions emails={emails}></Questions>
                    </Box>
                    <Box flex="2" maxWidth={"50vw"}>
                        <BrowserCustom onClose={onClose} email={currentEmail} />
                    </Box>
                </Flex>
            </Box>
            {/* </EmailSendContext.Provider> */}
        </DndProvider>
    );
}

function FirstTimeMessage() {
    let messages = [
        "Woah! New options!! You have unlocked new skills. You can now ask the helper to create more directed questions."
    ];

    const sentNumber = useSelector((state) => state.email.sentNumber);

    if (sentNumber > 0) {
        messages = [
            "Keep working on those emails! You can unlock more options by training the helper.",
            "Seeing the same options? Train your attacker!"
        ];
    }

    if (sentNumber > 5) {
        messages.push(
            "Not seeing improvements? Did you checkout the marketplace?"
        );
    }

    const techSkills = useSelector((state) => state.attacker.techSkills);

    if (techSkills.includes("spoofing")) {
        messages.push(
            "Want more efficient emails? Send the email as someone else!"
        );
    }
    const randomIndex = useMemo(
        () => Math.floor(Math.random() * messages.length),
        [sentNumber]
    );
    const message = messages[randomIndex];

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
                <Text color="black">{message}</Text>
            </Box>
        </Center>
    );
}
export { EmailClient };
