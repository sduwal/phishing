import { Flex, Box } from "@chakra-ui/react";

import BrowserCustom from "./browser";
import Questions from "./questions/questions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useEffect, useState } from "react";
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

    const [emails, setEmails] = useState({});

    const [currentEmail, setCurrentEmail] = useState({});
    const key = useSelector((state) => state.email.key);

    useEffect(() => {
        setEmails(initializeEmails(activeLink));

        return () => {
            dispatch(resetKey());
            dispatch(changeLinkType("normal"));
            dispatch(spoofEmail(""));
        };
    }, []);

    useEffect(() => {
        if (key.length == 0) {
            setCurrentEmail({});
        } else {
            if (from.length == 0) dispatch(spoofEmail(emails[key].from));
            setCurrentEmail({ ...emails[key], from, linkType });
        }
    }, [key, from, linkType]);

    // useEffect(() => {
    //     if (key === "" || _.isEmpty(currentEmail)) return;
    //     setCurrentEmail({ ...currentEmail, linkType: linkType });
    // }, [linkType]);

    useEffect(() => {
        if (_.isEmpty(currentEmail)) return;
        const link = generateLinks(activeLink);
        const body = { ...currentEmail.body, link };

        setCurrentEmail({ ...currentEmail, body });
    }, [activeLink]);

    return (
        <DndProvider backend={HTML5Backend} height="100vh">
            <Box p="20px" background="white">
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

export { EmailClient };
