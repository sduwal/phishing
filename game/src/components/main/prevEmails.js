import { Box, Text, Spacer, Flex, Divider } from "@chakra-ui/react";

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
                    <Flex>
                        <Text fontSize={"1.5em"} fontWeight={"bold"}>
                            Subject
                        </Text>
                        <Spacer />
                        <Text fontSize={"1.5em"} fontWeight={"bold"}>
                            Efficiency
                        </Text>
                    </Flex>
                    <Divider />
                    {emails.map((email, index) => (
                        <Flex key={index} my={2} alignItems={"center"}>
                            {/* <Center px={2}> */}
                            {/* <CircleIcon boxSize={2} /> */}
                            {/* </Center> */}
                            <Text>
                                {index + 1}. {email.subject}
                            </Text>
                            <Spacer />
                            <Text>{Math.round(email.successrate * 100)} %</Text>
                        </Flex>
                    ))}
                </Box>
            )}
        </>
    );
}
