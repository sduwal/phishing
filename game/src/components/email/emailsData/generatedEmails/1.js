import { Box, Center, Text, Button, Image } from "@chakra-ui/react";

const email = {
    to: "sarose012@gmail.com",
    from: "someone@gmail.com",
    subject: "Netflix scheduled payment",
    name: "Saroj Duwal",
    linkType: "normal",
    totalSend: 1000,
    languageProperties: [],
    techincalProperties: [],
    body: {
        text: [
            {
                start: (
                    <Box>
                        <Center>
                            <Image
                                src="https://sm.pcmag.com/pcmag_in/review/p/paypal/paypal_mb8k.png"
                                height="100px"
                            />
                        </Center>
                        <Text fontWeight="bold">
                            Automatic Payment Schedule
                        </Text>
                        <Text>
                            Hi Saroj, <br />
                            Your automatic pyment for netflix has been scheduled
                            for Nov 10, 2022. If you did not make this change,
                            please click below:
                        </Text>
                    </Box>
                ),
                end: (
                    <Text>
                        Regards,
                        <br />
                        Paypal
                    </Text>
                )
            },
            {
                start: (
                    <Box>
                        <Center>
                            <Image
                                src="https://sm.pcmag.com/pcmag_in/review/p/paypal/paypal_mb8k.png"
                                height="100px"
                            />
                        </Center>
                        <Text fontWeight="bold">
                            Automatic Payment Schedule
                        </Text>
                        <Text>
                            Hi User, <br />
                            Your automatic payment for netflix has been
                            scheduled for Nov 10, 2022. If you did not make this
                            change, please click below:
                        </Text>
                    </Box>
                ),
                end: (
                    <Text>
                        Regards,
                        <br />
                        Paypal
                    </Text>
                )
            },
            {
                start: (
                    <Box>
                        <Center>
                            <Image
                                src="https://sm.pcmag.com/pcmag_in/review/p/paypal/paypal_mb8k.png"
                                height="100px"
                            />
                        </Center>
                        <Text fontWeight="bold">
                            Automatic Payment Schedule
                        </Text>
                        <Text>
                            Hi Saroj, <br />
                            Your automatic payment for{" "}
                            <Text fontStyle="bold">Netflix</Text> has been
                            scheduled for Nov 10, 2022. If you did not make this
                            change, please click below:
                        </Text>
                    </Box>
                ),
                end: (
                    <Text>
                        Regards,
                        <br />
                        Paypal
                    </Text>
                )
            },
            {
                start: (
                    <Box>
                        <Center>
                            <Image
                                src="https://sm.pcmag.com/pcmag_in/review/p/paypal/paypal_mb8k.png"
                                height="100px"
                            />
                        </Center>
                        <Text fontWeight="bold">
                            Automatic Payment Schedule
                        </Text>
                        <Text>
                            Hi Saroj, <br />
                            Your automatic payment for netflix has been
                            scheduled for Nov 10, 2022. If you did not make this
                            change, please below:
                        </Text>
                    </Box>
                ),
                end: (
                    <Text>
                        Regards,
                        <br />
                        Paypal
                    </Text>
                )
            }
        ],
        link: {
            normal: (
                <Button
                    // animation={fadeAnimation}
                    background="transparent"
                    _hover
                    p="0"
                >
                    {"https://mynormalLink.com"}
                </Button>
            ),
            shortner: (
                <Button
                    // animation={fadeAnimation}
                    background="transparent"
                    _hover
                    p="0"
                >
                    {"https://tinylink.com"}
                </Button>
            ),
            confused: (
                <Center>
                    <Button
                        // animation={fadeAnimation}
                        background="transparent"
                        _hover
                        p="0"
                    >
                        {"https://randomconfusinglink.com"}
                    </Button>
                </Center>
            ),
            hidden: (
                <Center>
                    <Button
                        background="blue"
                        width="fit-content"
                        borderRadius="10px"
                        // animation={fadeAnimation}
                    >
                        <Text color="white">Click here</Text>
                    </Button>
                </Center>
            )
        }
    }
};

export default {
    email: email,
    properties: [],
    targeted: "generic"
};
