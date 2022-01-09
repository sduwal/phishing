// no special properties

import { Text } from "@chakra-ui/react";
import { m } from "framer-motion";

const email = {
    to: "jane_doe@gmail.com",
    from: "customerservice@gmail.com",
    subject: "Your account is on hold #62378957",
    totalSend: 1000,
    body: {
        text: [
            {
                start: (
                    <>
                        <Text>
                            {
                                "We've limited access to your account because your account was recently logged into from a new browser."
                            }
                        </Text>
                        <Text fontWeight={"bold"} my={2}>
                            {"Was that you?"}
                        </Text>

                        <Text my={2}>
                            {"- Browser: Mozilla/5.0 (Windows NT 6.1; rv: 29.0"}
                        </Text>

                        <Text fontWeight={"bold"} my={2}>
                            What do I need to do?
                        </Text>
                        <Text>
                            In order to access your account again, you need to
                            verify your identity by following some of our
                            security steps. Use the link below:
                        </Text>
                    </>
                ),
                end: <></>,
                properties: ["spelling", "grammar"]
            },
            {
                start: (
                    <>
                        <Text>
                            {
                                "We've limited acces to your acount because your acount was recently logged into from a new browser."
                            }
                        </Text>
                        <Text fontWeight={"bold"} my={2}>
                            {"Was that you?"}
                        </Text>

                        <Text my={2}>
                            {"- Browser: Mozilla/5.0 (Windows NT 6.1; rv: 29.0"}
                        </Text>

                        <Text fontWeight={"bold"}>What do I need to do?</Text>
                        <Text my={2}>
                            In order to access your account again, you need to
                            verify your identity by following some of our
                            security steps. Use the link below:
                        </Text>
                    </>
                ),
                end: <></>,
                properties: ["grammar"]
            },
            {
                start: (
                    <>
                        <Text>
                            {
                                "We limited access to your account because your account recently log into from a new browser."
                            }
                        </Text>
                        <Text fontWeight={"bold"} my={2}>
                            {"Was that you?"}
                        </Text>
                        <Text my={2}>
                            {"- Browser: Mozilla/5.0 (Windows NT 6.1; rv: 29.0"}
                        </Text>

                        <Text fontWeight={"bold"} my={2}>
                            What do I need to do?
                        </Text>
                        <Text>
                            In order to access your account again, you need to
                            verify your identity by following some of our
                            security steps. Use the link below:
                        </Text>
                    </>
                ),
                end: <></>,
                properties: ["grammar"]
            }
        ]
    }
};

export default {
    email: email,
    properties: ["spelling", "grammar"],
    targeted: "generic",
    styled: false
};
