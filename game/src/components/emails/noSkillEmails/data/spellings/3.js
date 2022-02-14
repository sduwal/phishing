import { Text, Link, Center } from "@chakra-ui/react";

import createSpellingErrors from "@components/emails/shared/createSpellingErrors";

const start =
    "due to connection from an unknown device your account has been frozen temporarily in order to protect it Please click on the following link to Confirm it.";
const end =
    "This will help protect you in the future. This process does not take more than 3 minutes.";

const email = {
    subject: "Login",
    name: "Rosie Curtis",
    from: "leusa@uldacpe.ir",
    to: "vaete@zonkok.sy",
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
                        <Text>
                            {createSpellingErrors({ description: start })}
                        </Text>
                    </>
                ),
                end: (
                    <>
                        {" "}
                        <Text>
                            {createSpellingErrors({ description: end })}
                        </Text>
                    </>
                ),
                properties: []
            },
            {
                start: (
                    <>
                        <Text>
                            {createSpellingErrors({ description: start })}
                        </Text>
                    </>
                ),
                end: (
                    <>
                        <Text>{end}</Text>
                    </>
                ),
                properties: []
            },
            {
                start: (
                    <>
                        <Text>{start}</Text>
                    </>
                ),
                end: (
                    <>
                        <Text>{end}</Text>
                    </>
                ),
                properties: ["spelling"]
            }
        ]
    }
};

export default email;
