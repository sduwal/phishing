import { Text, Link, Center } from "@chakra-ui/react";

import createSpellingErrors from "@components/emails/shared/createSpellingErrors";

const desc =
    "we need your help securing your account to prevent unauthorized access. For your safety click the Link below to confirm your informations.";

const email = {
    subject: "Secure your account",
    name: "Rena Quinn",
    from: "hecsoz@gi.mr",
    to: "war@fazjasmin.mw",
    body: {
        link: {
            normal: (
                <>
                    <Center>
                        <Link>https://xyz.xyz/secure-account</Link>
                    </Center>
                </>
            )
        },
        text: [
            {
                start: (
                    <>
                        <Text>{desc}</Text>
                    </>
                ),
                end: <></>,
                properties: ["spelling"]
            },
            {
                start: (
                    <>
                        <Text>
                            {createSpellingErrors({ description: desc })}
                        </Text>
                    </>
                ),
                end: <></>,
                properties: []
            },
            {
                start: (
                    <>
                        <Text>
                            {createSpellingErrors({ description: desc })}
                        </Text>
                    </>
                ),
                end: <></>,
                properties: []
            }
        ]
    }
};

export default email;
