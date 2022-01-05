import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    UnorderedList,
    ListItem
} from "@chakra-ui/react";

import { useSelector } from "react-redux";

export default function prevEmails() {
    const emails = useSelector((state) => state.email.prevEmails);
    return (
        <>
            <Text>
                Emails stats will be updated here once the email stops receiving
                traction.
            </Text>
            {emails.length == 0 && (
                <Text fontSize={"2em"}>No emails found</Text>
            )}

            {emails.length != 0 && (
                <Box
                    m={5}
                    p={5}
                    border="2px solid black"
                    rounded="2xl"
                    width="90%"
                >
                    <Text fontSize={"1.5em"} fontWeight={"bold"}>
                        Prev Emails Properties
                    </Text>
                    <Accordion allowMultiple allowToggle>
                        {emails.map((email) => (
                            <AccordionItem key={email.subject}>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        <Text fontWeight={"semibold"}>
                                            {email.subject}
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} textAlign={"left"}>
                                    <Text>
                                        Success Rate:{" "}
                                        {Math.round(email.successrate * 100)}%
                                    </Text>
                                    <Text>Email properties:</Text>
                                    <UnorderedList>
                                        {email.properties.map((prop) => (
                                            <ListItem key={prop} mx={10}>
                                                {prop}
                                            </ListItem>
                                        ))}
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Box>
            )}
        </>
    );
}
