import { Box, Flex, Spacer, Text, Center } from "@chakra-ui/react";
import EmailClient from "../components/emailClient";
import Techniques from "../components/phishingTechnique";
import { EmailContext, EmailReducer } from "../AppState";
import { useReducer } from "react";

function EmailScreen() {
    return (
        <EmailContext.Provider
            value={useReducer(EmailReducer, { email: "", subject: "" })}
        >
            <Box height="100%">
                <Text p="20px">
                    Your goal is to create phishing emails. HINT: The side bar
                    provides{" "}
                </Text>
                <Center height="90%">
                    <Flex direction="row" width="100%" justify="center">
                        <EmailClient />
                        <Techniques />
                    </Flex>
                </Center>
            </Box>
        </EmailContext.Provider>
    );
}

export default EmailScreen;
