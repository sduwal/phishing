import Email from "./email";
import {
    Text,
    Center,
    Image,
    Box,
    ScaleFade,
    Button,
    keyframes
} from "@chakra-ui/react";

const fade = keyframes`
    0% {opacity:0;}
    25%{background:red;}
    50%{background:yellow;}
    100% {opacity:1;}
`;
const fadeAnimation = `${fade} 0.5s ease-in`;

const targetedEmails = [
    {
        to: "sarose012@gmail.com",
        from: "someone@gmail.com",
        subject: "Netflix scheduled payment",
        name: "Saroj Duwal",
        body: {
            start: (
                <Box>
                    <Center>
                        <Image
                            src="https://sm.pcmag.com/pcmag_in/review/p/paypal/paypal_mb8k.png"
                            height="100px"
                        />
                    </Center>
                    <Text fontWeight="bold">Automatic Payment Schedule</Text>
                    <Text>
                        Hi Saroj, <br />
                        Your automatic payment for netflix has been scheduled
                        for Nov 10, 2022. If you did not make this change,
                        please click below:
                    </Text>
                </Box>
            ),
            link: {
                normal: (
                    <Button
                        animation={fadeAnimation}
                        background="transparent"
                        _hover
                        p="0"
                    >
                        {"https://mynormalLink.com"}
                    </Button>
                ),
                shortner: (
                    <Button
                        animation={fadeAnimation}
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
                            animation={fadeAnimation}
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
                            animation={fadeAnimation}
                        >
                            <Text color="white">Click here</Text>
                        </Button>
                    </Center>
                )
            },
            end: (
                <Text>
                    Regards,
                    <br />
                    Paypal
                </Text>
            )
        }
    }
];
const groupEmails = [
    new Email({
        to: "all@gmail.com",
        from: "someone@gmail.com",
        subject: "Group email",
        body: "placeholder"
    })
];
const generalEmails = [
    new Email({
        to: "all@gmail.com",
        from: "someone@gmail.com",
        subject: "General email",
        body: "placeholder"
    })
];

function getRandomEmails(targeted = false, group = false, individual = true) {
    if (targeted) {
        return targetedEmails[
            Math.floor(Math.random() * targetedEmails.length)
        ];
    }

    if (group) {
        return groupEmails[Math.floor(Math.random() * groupEmails.length)];
    }

    if (individual) {
        return generalEmails[Math.floor(Math.random() * generalEmails.length)];
    }
}

export { getRandomEmails as default };
